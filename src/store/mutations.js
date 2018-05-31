import * as types from './mutation-types'

export default {
  [types.CHANGE_PAGE] (state, pagenum) {
    state.pagenum = pagenum
  }
}
