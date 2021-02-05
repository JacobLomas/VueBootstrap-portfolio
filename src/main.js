import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
import 'jquery';
import 'popper.js';
import 'bootstrap';
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/app.css'
Vue.config.productionTip = false
import VueSmoothScroll from 'vue2-smooth-scroll'
 
Vue.use(VueSmoothScroll, {
  duration: 400,
  updateHistory: false,
})
new Vue({
  render: h => h(App),
}).$mount('#app')
