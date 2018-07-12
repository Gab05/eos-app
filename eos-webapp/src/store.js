import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    scatter: null,
    network: {
      protocol: 'http',
      blockchain: 'eos',
      host: '127.0.0.1',
      port: 8888,
      chainId: 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f'
    }
  },

  mutations: {
    setNetwork (state, network) {
      state.network = network
    },
    setScatter (state, scatter) {
      state.scatter = scatter
    }
  },

  getters: {
    identity: (state) => state.scatter ? state.scatter.identity : null,
    network: (state) => state.network
  },

  actions: {
    async setScatter ({ commit, state }, scatter) {
      commit('setScatter', scatter)
    },
    async login ({ state }) {
      if (!state.scatter) return false
      return state.scatter.getIdentity({
        personal: ['firstname', 'lastname'],
        accounts: [state.network]
      })
    }
  }
})

global.store = store

export default store
