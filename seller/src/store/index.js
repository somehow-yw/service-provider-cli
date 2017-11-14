import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    modal: false,
    changePrice: false,
    notice: false,
    show: true,
    popsearch: false
  }
})

export default store
