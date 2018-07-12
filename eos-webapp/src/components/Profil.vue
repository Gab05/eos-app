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
              Connecté en tant que {{ this.firstname }} {{ this.lastname }}
            </h2>
          </div>
        </div>
      </section>

      <div v-if="scatterPaired()" class="section">
        <div class="container">
          <h1 class="subtitle is-4 has-text-left">Vos contrats</h1>
        </div>
        <div class="container box">
          <ul id="listeContrats">

          </ul>
        </div>
        <button class="button is-info rounded">
          Ajouter un contrat
        </button>
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

@Component({
  computed: {
    ...mapState(['scatter']),
    ...mapGetters(['identity'])
  },
  methods: {
    ...mapActions(['login'])
  }
})
export default class Profil extends Vue {
  scatter
  identity
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
    }
    return paired
  }
}
</script>

<style scoped>
  .hero {
    margin: 3% 0 3% 0;
    text-align: left;
  }
</style>
