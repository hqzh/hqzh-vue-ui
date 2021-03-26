import Vue from 'vue';
import { ShowOverflowTooltip } from 'hqzh-vue-ui';
import App from './App.vue';
import router from './router';
import store from './store';
// import hqzhUI from '../packages/index';
// Vue.use(hqzhUI);

Vue.config.productionTip = false;

Vue.use(ShowOverflowTooltip);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
