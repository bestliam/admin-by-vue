import user from '../../api/user'
import * as types from '../mutation-types'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allUsers: state => state.all
}

// actions
const actions = {
  getAllUsers ({ commit }) {
    user.getUsers(users => {
      commit(types.RECEIVE_USERS, { users })
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_USERS] (state, { users }) {
    state.all = users
  },
  [types.OVER_TO_USERS] (state, { name }) {
    // state.all.find(p => p.name === name).bm = 'oooo'
    state.all.splice(state.all.indexOf(state.all.find(p => p.name === name)), 1)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
