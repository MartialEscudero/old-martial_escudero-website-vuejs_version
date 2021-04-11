import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import VueMeta from 'vue-meta'
import VueMarkdown from 'vue-markdown';
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 1100,
})

Vue.component('vue-markdown', VueMarkdown);

Vue.use(VueMeta)

import{ init } from 'emailjs-com';

init("user_PFnEAgnCIgPitvseq0QYE");

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
