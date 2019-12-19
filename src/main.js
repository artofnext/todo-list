import Vue from 'vue'
import App from './App.vue'
import Storage from 'vue-web-storage';  


Vue.use(Storage, {
    prefix: 'todo_list_',// default `app_`
    drivers: 'local', // default 'local'
  });

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
