import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    scatter: null,
    network: {
      protocol: 'http',
      blockchain: 'eos',
      host: 'mainnet.eoscalgary.io',
      port: 80,
      chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
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
