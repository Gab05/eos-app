<template>
  <div class="main-body">

    <div v-if="!scatterInstalled()">
      <section class="hero is-danger">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Chargement de Scatter...
            </h1>
            <h2 class="subtitle">
              <a href="https://get-scatter.com">Installer Scatter?</a>
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
              Connecté en tant que {{ firstname }} {{ lastname }} ({{ accountName }})
            </h2>
          </div>
        </div>
      </section>

      <div v-if="scatterPaired()">
        <div v-if="this.contracts" class="container box">
          <h1 class="subtitle is-4 has-text-left">Vos contrats d'assurance</h1>

          <div v-if="this.contracts.length !== 0">
            <ul id="listeContrats">
              <li v-for="c in this.contracts" v-bind:key="c.id" class="level box">
                <div class="level-left">
                  <div class="level-item">
                    ID: {{ c.id }}
                  </div>
                  <div class="level-item">
                    <span class="icon is-large box">
                      <i class="fas fa-2x fa-car"></i>
                    </span>
                  </div>
                  <div class="level-item">
                    {{ String(c.car_info).replace(/;/g, ' ') }}
                  </div>
                  <br/>
                  <div class="level-item">
                    <span class="icon is-large box">
                      <i class="fas fa-2x fa-address-card"></i>
                    </span>
                  </div>
                  <div class="level-item">
                    {{ firstname }} {{ lastname }} ({{ accountName }})
                  </div>
                  <div class="level-item">
                    <span class="icon is-large box">
                      <i class="fas fa-2x fa-file-invoice-dollar"></i>
                    </span>
                  </div>
                  <div class="level-item">
                    <p>Mensuel: <span class="has-text-success bold"> 1.00 EOS ({{ Number(1*CADforEOS).toFixed(2) }} $CAD)</span></p>
                  </div>
                </div>
                <div class="level-right">
                  <div class="level-item">
                    <button class="button is-primary">
                      <span class="icon is-large"><i class="fas fa-lg fa-hand-holding-usd"></i></span>
                    </button>
                  </div>
                  <div class="level-item">
                    <button class="button is-info">
                      <span class="icon is-large"><i class="fas fa-lg fa-info-circle"></i></span>
                    </button>
                  </div>
                  <div class="level-item">
                    <button v-on:click="resignContract(c.id)" class="button is-danger">
                      <span class="icon is-large"><i class="fas fa-2x fa-times"></i></span>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div v-else>
            <p class="subtitle is-2 has-text-grey-lighter">Aucun contrat</p>
          </div>

        </div>

        <div v-else class="container section">
          <p class="subtitle is-2 has-text-grey-lighter">Chargement des contrats...
            <span class="icon"><i class="fas fa-spinner fa-spin"></i></span>
          </p>
        </div>

        <div class="section">
          <button @click="show('new-contract-modal')" class="button is-info is-rounded">
            <span>Ajouter un contrat</span>
            <span class="icon"><i class="fas fa-file-signature"></i></span>
          </button>
        </div>

        <div class="modal" id="new-contract-modal">
          <div class="modal-background" @click="hide('new-contract-modal')"></div>
          <div class="modal-content">
            <div class="field box">
              <h1 class="title has-text-grey">Assurer une voiture <span class="icon is-large"><i class="fas fa-car"></i></span></h1>
              <div class="control content">
                <div class="has-text-grey">Marque</div>
                <input class="input" type="text" id="new-make">
              </div>
              <div class="control content">
                <div class="has-text-grey">Modèle</div>
                <input class="input" type="text" id="new-model">
              </div>
              <div class="control content">
                <div class="has-text-grey">Année</div>
                <input class="input" type="number" id="new-year">
              </div>
              <div class="control content">
                <div class="has-text-grey">Immatriculation</div>
                <input class="input" type="text" id="new-license">
              </div>
            </div>
            <div class="level">
              <button class="button is-danger" @click="hide('new-contract-modal')">
                <span>Annuler</span>
                <span class="icon"><i class="fas fa-times-circle"></i></span>
              </button>
              <button class="button is-info" @click="newContract()">
                <span>Soumettre</span>
                <span class="icon"><i class="fas fa-check-circle"></i></span>
              </button>
            </div>
          </div>
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
    ...mapGetters(['identity', 'network', 'contracts', 'testnet', 'CADforEOS'])
  },
  methods: {
    ...mapActions(['login', 'setContracts'])
  }
})
export default class Profil extends Vue {
  accountName = null
  firstname = null
  lastname = null

  scatterInstalled () {
    return this.scatter
  }

  scatterPaired () {
    let paired = false
    if (this.identity) {
      paired = true
      this.firstname = this.identity.personal.firstname
      this.lastname = this.identity.personal.lastname
      this.accountName = this.identity.accounts[0].name
      setInterval(this.setCADforEOS, 5000)
      this.getContracts()
    }
    return paired
  }

  async getContracts () {
    const httpEndpoint = 'http://' + this.network.host + ':' + this.network.port
    const eos = Eos({ httpEndpoint, chainId: this.network.chainId })

    if (!this.contracts) {
      eos.getTableRows({
        json: true,
        code: 'lacapcarinsu',
        scope: this.accountName,
        table: 'insurance'
      }).then(function (data) {
        store.dispatch('setContracts', data.rows)
      })
    }
  }

  async setCADforEOS () {
    fetch('https://api.coinmarketcap.com/v2/ticker/?convert=CAD&limit=10')
      .then(function (res) {
        return res.json()
      })
      .then(function (json) {
        store.dispatch('setCADforEOS', json.data['1765'].quotes.CAD.price)
      })
  }

  async resignContract (id) {
    const auth = this.getAuthorization()
    const contract = await this.getContract()

    await contract.resign(this.accountName, id, auth.permission).then(function () {
      store.dispatch('resetContracts')
    })
  }

  async newContract () {
    const auth = this.getAuthorization()
    const contract = await this.getContract()
    const make = document.getElementById('new-make').value
    const model = document.getElementById('new-model').value
    const year = document.getElementById('new-year').value
    const license = document.getElementById('new-license').value
    const data = make + ';' + model + ';' + year + ';' + license

    await contract.insure(this.accountName, data, auth.permission).then(function () {
      store.dispatch('resetContracts')
    })
    this.hide('new-contract-modal')
  }

  getAuthorization () {
    if (!this.scatter || !this.scatter.identity || !this.scatter.identity.accounts) {
      return null
    }

    const account = this.scatter.identity.accounts.find(account => account.blockchain === 'eos')

    return {
      permission: {
        authorization: [ this.accountName + '@active' ]
      },
      account
    }
  }

  getEos () {
    return this.scatter.eos(this.network, Eos, { chainId: this.network.chainId })
  }

  async getContract () {
    return this.getEos().contract('lacapcarinsu')
  }

  show (id) {
    document.getElementById(id).classList.add('is-active')
  }

  hide (id) {
    document.getElementById(id).classList.remove('is-active')
  }

  toggle (id) {
    if (document.getElementById(id).classList.contains('is-active')) {
      this.hide(id)
    } else {
      this.show(id)
    }
  }
}
</script>

<style scoped>
  .hero {
    margin: 3% 0 3% 0;
    text-align: left;
  }

  .bold {
    font-weight: bold;
  }
</style>
