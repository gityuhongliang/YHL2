import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//加载公共css样式
import './assets/css/common.css'
//加载全局image组件
import './plugins/image'
//加载全局vant组件
import './plugins/vant'

//加载全局icon组件
import './plugins/icon'

//加载全局Search组件
import './plugins/search'

//加载全局layout组件
import './plugins/layout'

//共享store组件信息
import store from './store/index.js'

//引入路由
import router from './router/index.js'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')