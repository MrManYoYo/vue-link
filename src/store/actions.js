import * as types from './mutations'

export const updateName1 = ({ commit }, params) => {
  commit(types.UPDATE_NAME, { name: params.name })
}
