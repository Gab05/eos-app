<template>
  <nav class="navbar is-info is-fixed-top" role="navigation">
    <div class="navbar-brand">
      <a class="navbar-item logo-container" href="https://lacapitale.com/">
        <img src="/static/Logo_La_Capitale.png" class="logo">
      </a>
      <router-link to="/" class="navbar-item" href="/">
        <span class="icon is-medium large-icon">
          <i class="fas fa-file-code"></i>
        </span>
        <span class="app-title">SmartClaims</span>
      </router-link>
      <a role="button" class="navbar-burger navbar is-info" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <router-link to="/inscription" class="button is-link is-inverted is-rounded">
            <span class="icon">
              <i class="fas fa-user-plus"></i>
            </span>
            <span>S'inscrire</span>
          </router-link>
        </div>
        <div class="navbar-item">
          <router-link to="/monprofil" class="button is-link is-inverted is-rounded">
            <span class="icon">
              <i class="fas fa-user-circle"></i>
            </span>
            <span>Mon profil</span>
          </router-link>
        </div>
        <div class="navbar-item" v-if="canShowLogoutButton()">
          <router-link to="/">
            <button @click="logoutScatter()" class="button is-rounded is-danger">
              <span>Déconnexion</span>
              <span class="icon">
                <i class="fas fa-sign-out-alt"></i>
              </span>
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import { Component, Vue } from 'vue-property-decorator'
import store from '../store'

@Component({
  computed: {
    ...mapState(['scatter']),
    ...mapGetters(['identity']),
    ...mapActions(['resetContracts'])
  }
})
export default class Header extends Vue {
  scatter
  identity

  canShowLogoutButton () {
    let canShow = false
    if (this.identity) canShow = true
    return canShow
  }

  logoutScatter () {
    store.dispatch('resetContracts')
    this.scatter.forgetIdentity()
  }
}
</script>

<style scoped>
  @font-face {
    font-family: Metropolis sans-serif;
    src: url('/static/fonts/metropolis.otf');
  }

  @font-face {
    font-family: Metropolis sans-serif;
    src: url('/static/fonts/metropolis-bold.otf');
    font-weight: bold;
  }

  .navbar {
    height: auto;
  }

  .logo {
    max-height: none;
    height: 45px;
    width: 110px;
  }

  .large-icon {
    font-size: x-large;
  }

  .app-title {
    font-family: Metropolis sans-serif;
    font-size: x-large;
  }
</style>
