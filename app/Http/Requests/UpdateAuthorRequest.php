<?php

namespace App\Http\Requests;

use App\Models\Author;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;

class UpdateAuthorRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('author_edit');
    }

    public function rules()
    {
        return [
            'usetenant' => [
                'string',
                'nullable',
            ],
            'email' => [
                'nullable',
            ],
            'desc' => [
                'string',
                'nullable',
            ],
            'pass' => [
                'nullable',
            ],
            'yesno' => [
                'nullable',
                'in:' . implode(',', Arr::pluck(Author::YESNO_RADIO, 'value')),
            ],
            'multiplechoice' => [
                'nullable',
                'in:' . implode(',', Arr::pluck(Author::MULTIPLECHOICE_SELECT, 'value')),
            ],
            'checkit' => [
                'boolean',
            ],
            'num' => [
                'integer',
                'min:-2147483648',
                'max:2147483647',
                'nullable',
            ],
            'bignum' => [
                'numeric',
                'nullable',
            ],
            'budget' => [
                'numeric',
                'nullable',
            ],
            'birthday' => [
                'date_format:' . config('project.date_format'),
                'nullable',
            ],
            'birthalarm' => [
                'date_format:' . config('project.datetime_format'),
                'nullable',
            ],
            'morning' => [
                'date_format:' . config('project.time_format'),
                'nullable',
            ],
            'herefile' => [
                'array',
                'nullable',
            ],
            'herefile.*.id' => [
                'integer',
                'exists:media,id',
            ],
            'picture' => [
                'array',
                'nullable',
            ],
            'picture.*.id' => [
                'integer',
                'exists:media,id',
            ],
        ];
    }
}
