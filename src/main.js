import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import storage from './storage'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  storage,
  render: h => h(App)
}).$mount('#app')
