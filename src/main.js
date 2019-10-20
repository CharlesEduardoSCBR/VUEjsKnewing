import VeeValidate from 'vee-validate';
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './router';

import './directives/Transform';

Vue.config.productionTip = false
Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';

Vue.use(VueRouter);

const router = new VueRouter({ routes, mode: "history" });

Vue.use(VeeValidate);

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
