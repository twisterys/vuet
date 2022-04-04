<?php

namespace App\Models;

use \DateTimeInterface;
use App\Support\HasAdvancedFilter;
use App\Traits\Tenantable;
use Carbon\Carbon;
use Hash;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Author extends Model implements HasMedia
{
    use HasAdvancedFilter;
    use SoftDeletes;
    use Tenantable;
    use InteractsWithMedia;
    use HasFactory;

    public const YESNO_RADIO = [
        [
            'label' => 'yes',
            'value' => 'yes',
        ],
        [
            'label' => 'no',
            'value' => 'no',
        ],
    ];

    public const MULTIPLECHOICE_SELECT = [
        [
            'label' => 'choix 1',
            'value' => 'choice1',
        ],
        [
            'label' => 'choix 2',
            'value' => 'choice2',
        ],
    ];

    public $table = 'authors';

    protected $hidden = [
        'pass',
    ];

    protected $casts = [
        'checkit' => 'boolean',
    ];

    protected $appends = [
        'yesno_label',
        'multiplechoice_label',
        'herefile',
        'picture',
    ];

    protected $dates = [
        'birthday',
        'birthalarm',
        'morning',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $filterable = [
        'id',
        'usetenant',
        'email',
        'desc',
        'yesno',
        'multiplechoice',
        'num',
        'bignum',
        'budget',
        'birthday',
        'birthalarm',
        'morning',
    ];

    protected $orderable = [
        'id',
        'usetenant',
        'email',
        'desc',
        'yesno',
        'multiplechoice',
        'checkit',
        'num',
        'bignum',
        'budget',
        'birthday',
        'birthalarm',
        'morning',
    ];

    protected $fillable = [
        'usetenant',
        'email',
        'desc',
        'pass',
        'yesno',
        'multiplechoice',
        'checkit',
        'num',
        'bignum',
        'budget',
        'birthday',
        'birthalarm',
        'morning',
        'created_at',
        'updated_at',
        'deleted_at',
        'owner_id',
    ];

    public function registerMediaConversions(Media $media = null): void
    {
        $thumbnailWidth  = 50;
        $thumbnailHeight = 50;

        $thumbnailPreviewWidth  = 120;
        $thumbnailPreviewHeight = 120;

        $this->addMediaConversion('thumbnail')
            ->width($thumbnailWidth)
            ->height($thumbnailHeight)
            ->fit('crop', $thumbnailWidth, $thumbnailHeight);
        $this->addMediaConversion('preview_thumbnail')
            ->width($thumbnailPreviewWidth)
            ->height($thumbnailPreviewHeight)
            ->fit('crop', $thumbnailPreviewWidth, $thumbnailPreviewHeight);
    }

    public function setPassAttribute($input)
    {
        if ($input) {
            $this->attributes['pass'] = Hash::needsRehash($input) ? Hash::make($input) : $input;
        }
    }

    public function getYesnoLabelAttribute()
    {
        return collect(static::YESNO_RADIO)->firstWhere('value', $this->yesno)['label'] ?? '';
    }

    public function getMultiplechoiceLabelAttribute()
    {
        return collect(static::MULTIPLECHOICE_SELECT)->firstWhere('value', $this->multiplechoice)['label'] ?? '';
    }

    public function getBirthdayAttribute($value)
    {
        return $value ? Carbon::createFromFormat('Y-m-d H:i:s', $value)->format(config('project.date_format')) : null;
    }

    public function setBirthdayAttribute($value)
    {
        $this->attributes['birthday'] = $value ? Carbon::createFromFormat(config('project.date_format'), $value)->format('Y-m-d') : null;
    }

    public function getBirthalarmAttribute($value)
    {
        return $value ? Carbon::createFromFormat('Y-m-d H:i:s', $value)->format(config('project.datetime_format')) : null;
    }

    public function setBirthalarmAttribute($value)
    {
        $this->attributes['birthalarm'] = $value ? Carbon::createFromFormat(config('project.datetime_format'), $value)->format('Y-m-d H:i:s') : null;
    }

    public function getMorningAttribute($value)
    {
        return $value ? Carbon::createFromFormat('Y-m-d H:i:s', $value)->format(config('project.time_format')) : null;
    }

    public function setMorningAttribute($value)
    {
        $this->attributes['morning'] = $value ? Carbon::createFromFormat(config('project.time_format'), $value)->format('H:i:s') : null;
    }

    public function getHerefileAttribute()
    {
        return $this->getMedia('author_herefile')->map(function ($item) {
            $media = $item->toArray();
            $media['url'] = $item->getUrl();

            return $media;
        });
    }

    public function getPictureAttribute()
    {
        return $this->getMedia('author_picture')->map(function ($item) {
            $media = $item->toArray();
            $media['url'] = $item->getUrl();
            $media['thumbnail'] = $item->getUrl('thumbnail');
            $media['preview_thumbnail'] = $item->getUrl('preview_thumbnail');

            return $media;
        });
    }

    public function owner()
    {
        return $this->belongsTo(User::class);
    }

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }
}
