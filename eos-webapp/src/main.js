import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// eslint-disable-next-line
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store,
  render: h => h(App)
})

document.addEventListener('scatterLoaded', () => {
  store.dispatch('setScatter', window.scatter)
  window.scatter = null
})
