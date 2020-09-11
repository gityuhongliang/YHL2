<template>
  <div id="app">
      
      <!-- 路由出口 -->
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>
      <TabBar v-if="$route.meta.footShow"/>
  </div>
</template>

<script>
//1.引入组件
  import TabBar from './components/tab-bar'

export default {
  name: 'App',
  //2.注册组件
  components: {
    TabBar,
  }
}
</script>

<style>
  
</style>
