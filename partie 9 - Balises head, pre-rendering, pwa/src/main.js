import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'
import VueMeta from 'vue-meta'
import './registerServiceWorker'

Vue.use(VueMeta)

Vue.use(VueAxios, axios)

Vue.config.productionTip = false



new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app')
