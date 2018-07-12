import Vue from 'vue'
import Router from 'vue-router'

import Accueil from './components/Accueil'
import Inscription from './components/Inscription'
import Profil from './components/Profil'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Accueil },
    { path: '/inscription', component: Inscription },
    { path: '/monprofil', component: Profil }
  ],
  mode: 'history'
})
