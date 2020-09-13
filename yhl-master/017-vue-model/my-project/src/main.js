import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//加载公共css样式
import './assets/css/common.css'
//加载全局image组件
import './plugins/image'
//加载全局vant组件
import './plugins/vant'
//加载全局grid宫格组件
import './plugins/gird'
//加载全局tag标签组件
import './plugins/tag'
//加载全局sticky粘性布局组件
import './plugins/sticky'
//加载全局icon组件
import './plugins/icon'
//加载全局Collapse组件
import './plugins/collapse'
//加载全局Search组件
import './plugins/search'
//加载全局swipe组件
import './plugins/swipe'
//加载全局goodsaction组件
import './plugins/goodsaction'
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