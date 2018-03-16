import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import assets from './modules/assets'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    assets
  },
  getters,
  actions
})

export default store
