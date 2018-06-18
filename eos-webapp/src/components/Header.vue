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
          <router-link to="/connexion" class="button is-link is-inverted is-rounded">
            <span class="icon">
              <i class="fas fa-sign-in-alt"></i>
            </span>
            <span>Se connecter</span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
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
