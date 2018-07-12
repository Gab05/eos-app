<template>
  <div id="app">
    <Header/>
    <transition name="fade" mode="out-in" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}

</script>

<style>
  @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

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

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  body {
    margin: 0;
  }

</style>
