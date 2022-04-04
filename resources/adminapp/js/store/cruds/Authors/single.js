function initialState() {
  return {
    entry: {
      id: null,
      usetenant: '',
      email: null,
      desc: '',
      pass: null,
      yesno: 'yes',
      multiplechoice: null,
      checkit: false,
      num: '5',
      bignum: '',
      budget: '',
      birthday: '',
      birthalarm: '',
      morning: '',
      herefile: [],
      picture: [],
      created_at: '',
      updated_at: '',
      deleted_at: '',
      owner_id: null
    },
    lists: {
      yesno: [],
      multiplechoice: [],
      owner: []
    },
    loading: false
  }
}

const route = 'authors'

const getters = {
  entry: state => state.entry,
  lists: state => state.lists,
  loading: state => state.loading
}

const actions = {
  storeData({ commit, state, dispatch }) {
    commit('setLoading', true)
    dispatch('Alert/resetState', null, { root: true })

    return new Promise((resolve, reject) => {
      let params = objectToFormData(state.entry, {
        indices: true,
        booleansAsIntegers: true
      })
      axios
        .post(route, params)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          let message = error.response.data.message || error.message
          let errors = error.response.data.errors

          dispatch(
            'Alert/setAlert',
            { message: message, errors: errors, color: 'danger' },
            { root: true }
          )

          reject(error)
        })
        .finally(() => {
          commit('setLoading', false)
        })
    })
  },
  updateData({ commit, state, dispatch }) {
    commit('setLoading', true)
    dispatch('Alert/resetState', null, { root: true })

    return new Promise((resolve, reject) => {
      let params = objectToFormData(state.entry, {
        indices: true,
        booleansAsIntegers: true
      })
      params.set('_method', 'PUT')
      axios
        .post(`${route}/${state.entry.id}`, params)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          let message = error.response.data.message || error.message
          let errors = error.response.data.errors

          dispatch(
            'Alert/setAlert',
            { message: message, errors: errors, color: 'danger' },
            { root: true }
          )

          reject(error)
        })
        .finally(() => {
          commit('setLoading', false)
        })
    })
  },
  setUsetenant({ commit }, value) {
    commit('setUsetenant', value)
  },
  setEmail({ commit }, value) {
    commit('setEmail', value)
  },
  setDesc({ commit }, value) {
    commit('setDesc', value)
  },
  setPass({ commit }, value) {
    commit('setPass', value)
  },
  setYesno({ commit }, value) {
    commit('setYesno', value)
  },
  setMultiplechoice({ commit }, value) {
    commit('setMultiplechoice', value)
  },
  setCheckit({ commit }, value) {
    commit('setCheckit', value)
  },
  setNum({ commit }, value) {
    commit('setNum', value)
  },
  setBignum({ commit }, value) {
    commit('setBignum', value)
  },
  setBudget({ commit }, value) {
    commit('setBudget', value)
  },
  setBirthday({ commit }, value) {
    commit('setBirthday', value)
  },
  setBirthalarm({ commit }, value) {
    commit('setBirthalarm', value)
  },
  setMorning({ commit }, value) {
    commit('setMorning', value)
  },
  insertHerefileFile({ commit }, file) {
    commit('insertHerefileFile', file)
  },
  removeHerefileFile({ commit }, file) {
    commit('removeHerefileFile', file)
  },
  insertPictureFile({ commit }, file) {
    commit('insertPictureFile', file)
  },
  removePictureFile({ commit }, file) {
    commit('removePictureFile', file)
  },
  setCreatedAt({ commit }, value) {
    commit('setCreatedAt', value)
  },
  setUpdatedAt({ commit }, value) {
    commit('setUpdatedAt', value)
  },
  setDeletedAt({ commit }, value) {
    commit('setDeletedAt', value)
  },
  setOwner({ commit }, value) {
    commit('setOwner', value)
  },
  fetchCreateData({ commit }) {
    axios.get(`${route}/create`).then(response => {
      commit('setLists', response.data.meta)
    })
  },
  fetchEditData({ commit, dispatch }, id) {
    axios.get(`${route}/${id}/edit`).then(response => {
      commit('setEntry', response.data.data)
      commit('setLists', response.data.meta)
    })
  },
  fetchShowData({ commit, dispatch }, id) {
    axios.get(`${route}/${id}`).then(response => {
      commit('setEntry', response.data.data)
    })
  },
  resetState({ commit }) {
    commit('resetState')
  }
}

const mutations = {
  setEntry(state, entry) {
    state.entry = entry
  },
  setUsetenant(state, value) {
    state.entry.usetenant = value
  },
  setEmail(state, value) {
    state.entry.email = value
  },
  setDesc(state, value) {
    state.entry.desc = value
  },
  setPass(state, value) {
    state.entry.pass = value
  },
  setYesno(state, value) {
    state.entry.yesno = value
  },
  setMultiplechoice(state, value) {
    state.entry.multiplechoice = value
  },
  setCheckit(state, value) {
    state.entry.checkit = value
  },
  setNum(state, value) {
    state.entry.num = value
  },
  setBignum(state, value) {
    state.entry.bignum = value
  },
  setBudget(state, value) {
    state.entry.budget = value
  },
  setBirthday(state, value) {
    state.entry.birthday = value
  },
  setBirthalarm(state, value) {
    state.entry.birthalarm = value
  },
  setMorning(state, value) {
    state.entry.morning = value
  },
  insertHerefileFile(state, file) {
    state.entry.herefile.push(file)
  },
  removeHerefileFile(state, file) {
    state.entry.herefile = state.entry.herefile.filter(item => {
      return item.id !== file.id
    })
  },
  insertPictureFile(state, file) {
    state.entry.picture.push(file)
  },
  removePictureFile(state, file) {
    state.entry.picture = state.entry.picture.filter(item => {
      return item.id !== file.id
    })
  },
  setCreatedAt(state, value) {
    state.entry.created_at = value
  },
  setUpdatedAt(state, value) {
    state.entry.updated_at = value
  },
  setDeletedAt(state, value) {
    state.entry.deleted_at = value
  },
  setOwner(state, value) {
    state.entry.owner_id = value
  },
  setLists(state, lists) {
    state.lists = lists
  },
  setLoading(state, loading) {
    state.loading = loading
  },
  resetState(state) {
    state = Object.assign(state, initialState())
  }
}

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
}
