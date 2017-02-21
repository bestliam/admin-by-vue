import * as types from './mutation-types'

export const overToUser = ({ commit }, user) => {
  commit(types.OVER_TO_USERS, {
    name: user.name
  })
}
