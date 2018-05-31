import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedStste from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  pagenum: 1
}

let getStorageType = function () {
  if (window.sessionStorage) {
    return {
      Storage: window.sessionStorage
    }
  } else {
    return {
      getState: (key) => Cookies.getJSON(key),
      setState: (key, stat) => Cookies.set(key, stat)
    }
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== 'production',
  plugins: [
    createPersistedStste(
      getStorageType()
    )
  ]
})
