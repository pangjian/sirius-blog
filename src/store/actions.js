import * as types from './mutation-types'

export default {
  changePage ({commit}, pagenum) {
    commit(types.CHANGE_PAGE, pagenum)
  }
}
