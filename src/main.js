import Vue from 'vue';
const App = () => import('./App.vue');
import vuetify  from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
