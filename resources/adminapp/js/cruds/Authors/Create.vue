<template>
  <div class="container-fluid">
    <form @submit.prevent="submitForm">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header card-header-primary card-header-icon">
              <div class="card-icon">
                <i class="material-icons">add</i>
              </div>
              <h4 class="card-title">
                {{ $t('global.create') }}
                <strong>{{ $t('cruds.author.title_singular') }}</strong>
              </h4>
            </div>
            <div class="card-body">
              <back-button></back-button>
            </div>
            <div class="card-body">
              <bootstrap-alert />
              <div class="row">
                <div class="col-md-12">
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.usetenant,
                      'is-focused': activeField == 'usetenant'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.author.fields.usetenant')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.usetenant"
                      @input="updateUsetenant"
                      @focus="focusField('usetenant')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.email,
                      'is-focused': activeField == 'email'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.author.fields.email')
                    }}</label>
                    <input
                      class="form-control"
                      type="email"
                      :value="entry.email"
                      @input="updateEmail"
                      @focus="focusField('email')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.desc,
                      'is-focused': activeField == 'desc'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.author.fields.desc')
                    }}</label>
                    <textarea
                      class="form-control"
                      rows="5"
                      :value="entry.desc"
                      @input="updateDesc"
                      @focus="focusField('desc')"
                      @blur="clearFocus"
                    ></textarea>
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.pass,
                      'is-focused': activeField == 'pass'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.author.fields.pass')
                    }}</label>
                    <input
                      class="form-control"
                      type="password"
                      :value="entry.pass"
                      @input="updatePass"
                      @focus="focusField('pass')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div class="form-group">
                    <label>{{ $t('cruds.author.fields.yesno') }}</label>
                    <v-radio
                      :value="entry.yesno"
                      :options="lists.yesno"
                      @change="updateYesno"
                    >
                    </v-radio>
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.multiplechoice,
                      'is-focused': activeField == 'multiplechoice'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.author.fields.multiplechoice')
                    }}</label>
                    <v-select
                      name="multiplechoice"
                      :key="'multiplechoice-field'"
                      :value="entry.multiplechoice"
                      :options="lists.multiplechoice"
                      :reduce="entry => entry.value"
                      @input="updateMultiplechoice"
                      @search.focus="focusField('multiplechoice')"
                      @search.blur="clearFocus"
                    />
                  </div>
                  <div class="form-group form-check">
                    <label class="form-check-label"
                      ><input
                        class="form-check-input"
                        type="checkbox"
                        :value="entry.checkit"
                        :checked="entry.checkit"
                        @change="updateCheckit"
                      /><span class="form-check-sign"
                        ><span class="check"></span></span
                      >{{ $t('cruds.author.fields.checkit') }}</label
                    >
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.num,
                      'is-focused': activeField == 'num'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.author.fields.num')
                    }}</label>
                    <input
                      class="form-control"
                      type="number"
                      step="1"
                      :value="entry.num"
                      @input="updateNum"
                      @focus="focusField('num')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.bignum,
                      'is-focused': activeField == 'bignum'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.author.fields.bignum')
                    }}</label>
                    <input
                      class="form-control"
                      type="number"
                      step="0.01"
                      :value="entry.bignum"
                      @input="updateBignum"
                      @focus="focusField('bignum')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.budget,
                      'is-focused': activeField == 'budget'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.author.fields.budget')
                    }}</label>
                    <input
                      class="form-control"
                      type="number"
                      step="0.01"
                      :value="entry.budget"
                      @input="updateBudget"
                      @focus="focusField('budget')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.birthday,
                      'is-focused': activeField == 'birthday'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.author.fields.birthday')
                    }}</label>
                    <datetime-picker
                      class="form-control"
                      type="text"
                      picker="date"
                      :value="entry.birthday"
                      @input="updateBirthday"
                      @focus="focusField('birthday')"
                      @blur="clearFocus"
                    >
                    </datetime-picker>
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.birthalarm,
                      'is-focused': activeField == 'birthalarm'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.author.fields.birthalarm')
                    }}</label>
                    <datetime-picker
                      class="form-control"
                      type="text"
                      :value="entry.birthalarm"
                      @input="updateBirthalarm"
                      @focus="focusField('birthalarm')"
                      @blur="clearFocus"
                    >
                    </datetime-picker>
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.morning,
                      'is-focused': activeField == 'morning'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.author.fields.morning')
                    }}</label>
                    <datetime-picker
                      class="form-control"
                      type="text"
                      picker="time"
                      :value="entry.morning"
                      @input="updateMorning"
                      @focus="focusField('morning')"
                      @blur="clearFocus"
                    >
                    </datetime-picker>
                  </div>
                  <div class="form-group">
                    <label>{{ $t('cruds.author.fields.herefile') }}</label>
                    <attachment
                      :route="getRoute('authors')"
                      :collection-name="'author_herefile'"
                      :media="entry.herefile"
                      :max-file-size="2"
                      @file-uploaded="insertHerefileFile"
                      @file-removed="removeHerefileFile"
                    />
                  </div>
                  <div class="form-group">
                    <label>{{ $t('cruds.author.fields.picture') }}</label>
                    <attachment
                      :route="getRoute('authors')"
                      :collection-name="'author_picture'"
                      :media="entry.picture"
                      :max-file-size="2"
                      :component="'pictures'"
                      :accept="'image/*'"
                      @file-uploaded="insertPictureFile"
                      @file-removed="removePictureFile"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <vue-button-spinner
                class="btn-primary"
                :status="status"
                :isLoading="loading"
                :disabled="loading"
              >
                {{ $t('global.save') }}
              </vue-button-spinner>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Attachment from '@components/Attachments/Attachment'

export default {
  components: {
    Attachment
  },
  data() {
    return {
      status: '',
      activeField: ''
    }
  },
  computed: {
    ...mapGetters('AuthorsSingle', ['entry', 'loading', 'lists'])
  },
  mounted() {
    this.fetchCreateData()
  },
  beforeDestroy() {
    this.resetState()
  },
  methods: {
    ...mapActions('AuthorsSingle', [
      'storeData',
      'resetState',
      'setUsetenant',
      'setEmail',
      'setDesc',
      'setPass',
      'setYesno',
      'setMultiplechoice',
      'setCheckit',
      'setNum',
      'setBignum',
      'setBudget',
      'setBirthday',
      'setBirthalarm',
      'setMorning',
      'insertHerefileFile',
      'removeHerefileFile',
      'insertPictureFile',
      'removePictureFile',
      'fetchCreateData'
    ]),
    updateUsetenant(e) {
      this.setUsetenant(e.target.value)
    },
    updateEmail(e) {
      this.setEmail(e.target.value)
    },
    updateDesc(e) {
      this.setDesc(e.target.value)
    },
    updatePass(e) {
      this.setPass(e.target.value)
    },
    updateYesno(value) {
      this.setYesno(value)
    },
    updateMultiplechoice(value) {
      this.setMultiplechoice(value)
    },
    updateCheckit(e) {
      this.setCheckit(e.target.checked)
    },
    updateNum(e) {
      this.setNum(e.target.value)
    },
    updateBignum(e) {
      this.setBignum(e.target.value)
    },
    updateBudget(e) {
      this.setBudget(e.target.value)
    },
    updateBirthday(e) {
      this.setBirthday(e.target.value)
    },
    updateBirthalarm(e) {
      this.setBirthalarm(e.target.value)
    },
    updateMorning(e) {
      this.setMorning(e.target.value)
    },
    getRoute(name) {
      return `${axios.defaults.baseURL}${name}/media`
    },
    submitForm() {
      this.storeData()
        .then(() => {
          this.$router.push({ name: 'authors.index' })
          this.$eventHub.$emit('create-success')
        })
        .catch(error => {
          this.status = 'failed'
          _.delay(() => {
            this.status = ''
          }, 3000)
        })
    },
    focusField(name) {
      this.activeField = name
    },
    clearFocus() {
      this.activeField = ''
    }
  }
}
</script>
