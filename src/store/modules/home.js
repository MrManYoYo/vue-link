import * as types from '../mutations'

// init state
const state = {
  name: 'Link'
}

const getters = {
  getName: state => state.name
}

const actions = {
  updateName ({ commit }, params) {
    commit(types.UPDATE_NAME, params)
  }
}

const mutations = {
  [types.UPDATE_NAME] (state, params) {
    state.name = params
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
