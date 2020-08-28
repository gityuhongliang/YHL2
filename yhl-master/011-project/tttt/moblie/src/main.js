import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//加载全局css样式
import './assets/css/common.css'
import store from './store'

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
