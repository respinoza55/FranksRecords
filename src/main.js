import Vue from 'vue'
import App from './App.vue'
import { router } from './routes'
import { store } from './store'
import { BootstrapVue } from "bootstrap-vue"
// import vSelect from 'vue-select'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
  // vSelect,
  BootstrapVue,
  store,
  router,
  render: h => h(App),
}).$mount('#app')
