<template>
    <div id="TabBar">
        <van-tabbar v-model="active" route>
            <van-tabbar-item to="/home" icon="wap-home">首页</van-tabbar-item>
            <van-tabbar-item to="/sort" icon="bars">分类</van-tabbar-item>
            <van-tabbar-item badge=3 to="/cart" icon="cart">购物车</van-tabbar-item>
            <van-tabbar-item to="/me" icon="manager">个人中心</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    name:'TabBar',
    data() {
        return {
            active: 0,
        };
    },
    components:{
       
    },
    props:{
        
    }
}
</script>
<style scoped>
    
</style>