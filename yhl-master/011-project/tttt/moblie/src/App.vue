<!-- 结构 -->
<template>
    <div id="App">
        <Home/>
    </div>
</template>
<!-- 样式 -->
<script>
  //1.引入组件
    import Home from 'pages/home/index.vue'
   
    export default {
        name:'App',
        //2.注册组件
        components:{
            Home
        },
        
    }
</script>
<!-- 逻辑 -->
<style scoped>
    #App{
        width: 500px;
        margin: 0 auto;
    }

</style>

