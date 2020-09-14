<template>
    <div id="Cart">
        <van-nav-bar
        title="购物车"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
    </div>
</template>
<script>
export default {
    name:'Cart',
    components:{
       
    },
     methods:{
        onClickLeft(){
            this.$router.back()
        }
    }
}
</script>
<style lang="less" scoped>
    .van-nav-bar{
        height: 50px;
    }
</style>
