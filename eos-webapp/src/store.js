import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    scatter: null,
    testnet: {
      protocol: 'http',
      blockchain: 'eos',
      host: 'localhost',
      port: 8888,
      chainId: 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f'
    },
    network: {
      protocol: 'http',
      blockchain: 'eos',
      host: 'eu1.eosdac.io',
      port: 80,
      chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
    },
    contracts: null,
    CADforEOS: undefined
  },

  mutations: {
    setTestnet (state, testnet) {
      state.testnet = testnet
    },
    setNetwork (state, network) {
      state.network = network
    },
    setScatter (state, scatter) {
      state.scatter = scatter
    },
    setContracts (state, contracts) {
      state.contracts = contracts
    },
    resetContracts (state) {
      state.contracts = null
    },
    setCADforEOS (state, CADforEOS) {
      state.CADforEOS = CADforEOS
    }
  },

  getters: {
    identity: (state) => state.scatter ? state.scatter.identity : null,
    network: (state) => state.network,
    testnet: (state) => state.testnet,
    contracts: (state) => state.scatter.identity ? state.contracts : null,
    CADforEOS: (state) => state.CADforEOS
  },

  actions: {
    resetContracts ({ commit }) {
      commit('resetContracts')
    },
    setContracts ({ commit, state }, contracts) {
      commit('setContracts', contracts)
    },
    setCADforEOS ({ commit, state }, CADforEOS) {
      commit('setCADforEOS', CADforEOS)
    },
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
