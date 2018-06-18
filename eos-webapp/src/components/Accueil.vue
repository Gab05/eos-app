<template>
  <div class="main-body">
    <div class="intro">
      <div class="intro-text">
        <p>
          L'assurance de votre voiture:
        </p>
        <p>
          Automatisée par des contrats intelligents
        </p>
        <p>
          Sécurisée sur une blockchain
        </p>
        <p class="eosio">
          Powered by
          <a href="https://eos.io/">EOS.IO
            <img class="eosio-logo" src="/static/eosio-logo.png">
          </a>
        </p>
      </div>
      <div class="learn-more">
        <a class="button is-info">
            <span class="icon">
              <i class="fas fa-info-circle"></i>
            </span>
          <span>En savoir plus</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accueil'
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

  .main-body {
    padding-top: 61px;
    font-family: Metropolis sans-serif;
  }

  .intro {
    background-image: url('/static/network-background-less-opaque.png');
    background-size: cover;
    font-size: 42px;
    font-weight: bold;
    color: #222222;
  }

  .intro p {
    padding: 1rem;
  }

  .intro-text {
    padding: 120px 0 100px 0;
  }

  .eosio-logo {
    max-height: 35px;
  }

  .eosio {
    font-size: 20px;
    font-weight: bold;
    display: block;
    float: right;
  }

  a {
    color: mediumblue;
  }

  a:hover {
    color: deepskyblue;
  }

  .learn-more {
    padding-bottom: 5%;
  }

</style>
