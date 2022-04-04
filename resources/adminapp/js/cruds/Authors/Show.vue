<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-primary card-header-icon">
            <div class="card-icon">
              <i class="material-icons">remove_red_eye</i>
            </div>
            <h4 class="card-title">
              {{ $t('global.view') }}
              <strong>{{ $t('cruds.author.title_singular') }}</strong>
            </h4>
          </div>
          <div class="card-body">
            <back-button></back-button>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-12">
                <div class="table-responsive">
                  <div class="table">
                    <tbody>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.author.fields.id') }}
                        </td>
                        <td>
                          {{ entry.id }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.author.fields.usetenant') }}
                        </td>
                        <td>
                          {{ entry.usetenant }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.author.fields.email') }}
                        </td>
                        <td>
                          {{ entry.email }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.author.fields.desc') }}
                        </td>
                        <td>
                          {{ entry.desc }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.author.fields.pass') }}
                        </td>
                        <td>
                          {{ entry.pass }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.author.fields.yesno') }}
                        </td>
                        <td>
                          <datatable-enum :row="entry" field="yesno">
                          </datatable-enum>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.author.fields.multiplechoice') }}
                        </td>
                        <td>
                          <datatable-enum :row="entry" field="multiplechoice">
                          </datatable-enum>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.author.fields.checkit') }}
                        </td>
                        <td>
                          <datatable-checkbox :value="entry.checkit">
                          </datatable-checkbox>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.author.fields.num') }}
                        </td>
                        <td>
                          {{ entry.num }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.author.fields.bignum') }}
                        </td>
                        <td>
                          {{ entry.bignum }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.author.fields.budget') }}
                        </td>
                        <td>
                          {{ entry.budget }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.author.fields.birthday') }}
                        </td>
                        <td>
                          {{ entry.birthday }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.author.fields.birthalarm') }}
                        </td>
                        <td>
                          {{ entry.birthalarm }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.author.fields.morning') }}
                        </td>
                        <td>
                          {{ entry.morning }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.author.fields.herefile') }}
                        </td>
                        <td>
                          <datatable-attachments
                            :row="entry"
                            :field="'herefile'"
                          >
                          </datatable-attachments>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.author.fields.picture') }}
                        </td>
                        <td>
                          <datatable-pictures :row="entry" :field="'picture'">
                          </datatable-pictures>
                        </td>
                      </tr>
                    </tbody>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DatatableEnum from '@components/Datatables/DatatableEnum'
import DatatableCheckbox from '@components/Datatables/DatatableCheckbox'
import DatatableAttachments from '@components/Datatables/DatatableAttachments'
import DatatablePictures from '@components/Datatables/DatatablePictures'

export default {
  components: {
    DatatableEnum,
    DatatableCheckbox,
    DatatableAttachments,
    DatatablePictures
  },
  data() {
    return {}
  },
  beforeDestroy() {
    this.resetState()
  },
  computed: {
    ...mapGetters('AuthorsSingle', ['entry'])
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler() {
        this.resetState()
        this.fetchShowData(this.$route.params.id)
      }
    }
  },
  methods: {
    ...mapActions('AuthorsSingle', ['fetchShowData', 'resetState'])
  }
}
</script>
