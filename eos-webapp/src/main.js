// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Accueil from './components/Accueil'
import Inscription from './components/Inscription'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: Accueil },
  { path: '/inscription', component: Inscription }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
