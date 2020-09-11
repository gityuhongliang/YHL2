//1.引入模块
import Vue from "vue"
import VueRouter from "vue-router"

//2.引入页面组件
import Home from 'pages/home'
import Cart from 'pages/cart'
import Me from 'pages/me'
import Sort from 'pages/sort'
import SearchSon from 'pages/searchson'
import List from 'pages/list'
import Detail from 'pages/detail'


//3.声明使用
Vue.use(VueRouter)


//4.导出路由对象
export default new VueRouter({
    routes: [
        {
            path: "/home", 
            component: Home,
            meta: {
                footShow: true, // true显示，false隐藏
            }
        },
        { 
            path: "/sort", 
            component: Sort,
            meta: {
                footShow: true, // true显示，false隐藏
            }
        },
        { 
            path: "/cart", 
            component: Cart,
            meta: {
                footShow: true, // true显示，false隐藏
            }
        },
        { 
            path: "/me", 
            component: Me,
            meta: {
                footShow: true, // true显示，false隐藏
            }
        },
        { path: "/list", component: List },
        { path: "/detail", component: Detail },
        { path: "/searchson", component: SearchSon },
        { path: "/", redirect: "/home" },
    ]
})