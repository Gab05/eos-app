<template>
  <div class="main-body">

    <div v-if="!scatterInstalled()">
      <section class="hero is-danger">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Scatter non détecté!
            </h1>
            <h2 class="subtitle">
              <a href="https://get-scatter.com">Installez Scatter</a>
            </h2>
          </div>
        </div>
      </section>
    </div>

    <div v-else>
      <section class="hero is-success">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Bienvenue!
            </h1>
            <h2 v-if="!scatterPaired()" class="subtitle">

            </h2>
            <h2 v-else class="subtitle">
              Connecté en tant que {{ this.firstname }} {{ this.lastname }} ({{ this.accountName }})
            </h2>
          </div>
        </div>
      </section>

      <div v-if="scatterPaired()">
        <div v-if="this.contracts" class="container box">
          <h1 class="subtitle is-4 has-text-left">Vos contrats d'assurance</h1>
          <ul id="listeContrats">
            <li v-for="c in this.contracts" v-bind:key="c.id" class="level box">
              <div class="level-left">
                <div class="level-item">
                  <span class="icon is-large box">
                    <i class="fas fa-2x fa-car"></i>
                  </span>
                </div>
                <div class="level-item">
                  {{ c.id }} {{ c.name }}, {{ c.owner }}
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div v-else class="container section">
          <p class="subtitle is-2 has-text-grey-lighter">Aucun Contrat</p>
        </div>
        <div class="section">
          <button class="button is-info rounded">
            Ajouter un contrat
          </button>
        </div>
      </div>
      <div v-else>
        <h2 class="subtitle is-3 has-text-centered">
          Connectez-vous à l'aide de Scatter
        </h2>
        <button class="button is-info is-rounded" @click="login">
          <span>Connexion</span>
        </button>
      </div>
    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import { Component, Vue } from 'vue-property-decorator'
import store from '../store'
import Eos from 'eosjs'

@Component({
  computed: {
    ...mapState(['scatter']),
    ...mapGetters(['identity', 'network', 'contracts'])
  },
  methods: {
    ...mapActions(['login', 'setContracts'])
  }
})
export default class Profil extends Vue {
  scatter
  identity
  contracts
  accountName = null
  firstname = null
  lastname = null

  scatterInstalled () {
    let installed = false
    if (this.scatter) installed = true
    return installed
  }

  scatterPaired () {
    let paired = false
    if (this.identity) {
      paired = true
      this.firstname = this.identity.personal.firstname
      this.lastname = this.identity.personal.lastname
      this.accountName = this.identity.accounts[0].name
      this.getContracts()
    }
    console.log('scatterPaired()')
    return paired
  }

  async getContracts () {
    const httpEndpoint = 'http://' + this.network.host + ':' + this.network.port
    const eos = Eos({ httpEndpoint, chainId: this.network.chainId })

    if (!this.contracts) {
      eos.getTableRows({
        json: true,
        code: 'monstereosio',
        scope: 'monstereosio', // this.accountName,
        table: 'pets'
      }).then(function (data) {
        store.dispatch('setContracts', data.rows)
      })
    }
  }
}
</script>

<style scoped>
  .hero {
    margin: 3% 0 3% 0;
    text-align: left;
  }
</style>
