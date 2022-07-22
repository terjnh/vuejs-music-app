import Vue from 'vue'
import App from './App.vue'

// global register
// Vue.use(Embed);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


