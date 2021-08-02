import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    filter: '',
    code: {},
    showModal: false
  },
  mutations: {
      setFilterElement(state, payload) {
          state.filter = payload
      },
      setCodeToVuex(state, payload) {
          state.code = payload
      },
      modalWindow(state) {
          state.showModal = !state.showModal
      }
  },
  actions: {
      setFilterElement(context, payload) {
          context.commit('setFilterElement', payload)
      },
      setCodeToVuex(context, payload) {
          context.commit('setCodeToVuex', payload)
      },
      modalWindow(context){ 
          context.commit('modalWindow')
      }
  },
  getters: {
      filterElement(state) {
          return state.filter
      },
      getCode(state) {
        return state.code
      },
      modalData(state) {
          return state.showModal
      }
  }
})