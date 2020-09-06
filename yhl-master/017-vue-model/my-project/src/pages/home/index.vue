<template>
    <div id="Home">
        <van-row type="flex" justify="center">
            <div>
                <h1>爱跨淘</h1>
            </div>
        </van-row>
        <van-row>
            <van-search 
            class="search" 
            v-model="value" 
            placeholder="T恤"
            shape="round"
             />
        </van-row>
      
    </div>
</template>
<script>
export default {
    name:'Home',
    data(){
        return{
            value:''

        }
    },
    components:{
       
    },
    methods:{
    },
    props:{
        
    }
}
</script>
<style lang="less" >
    #Home{
        background-color: #fff;
    }
    h1{
        font-size: 25px;
    }
    .search{
        margin-top: 20px;
        height: 40px;
    }
</style>
    
