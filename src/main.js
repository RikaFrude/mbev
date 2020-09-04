import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueCarousel from 'vue-carousel'
import Footer from './components/footer.vue'
import ldbanner from './components/ldbanner.vue'

Vue.component('mbfooter', Footer)
Vue.component('ldbanner', ldbanner)
Vue.use(VueCarousel)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
