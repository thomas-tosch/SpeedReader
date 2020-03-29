const Vue = () => import('vue');
const App = () => import('./App.vue');
const vuetify = import('./plugins/vuetify');

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
