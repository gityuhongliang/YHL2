<template>
    <div id="SearchSon">
        <div class="sort-top">
           <!-- 搜索框 -->
            <van-sticky>
                <van-row>
                    <van-search
                    v-model="value"
                    left="arrow-left"
                    show-action
                    placeholder="请输入搜索关键词"
                    @cancel="onCancel"
                />
                </van-row>
            </van-sticky>
        </div>
        <van-row type="flex" justify="space-between" >
            <van-col span="6" ><span>最近搜索</span></van-col>
            <van-col span="6" align="end"><span>清除</span></van-col>
        </van-row>
            
            
    </div>
</template>
<script>
export default {
    name:'SearchSon',
    data(){
        return{
            value:''
        }
    },
    components:{

    },
    methods: {
        onCancel() {
            this.$router.back()
        },
  },
}
</script>
<style  lang="less" scoped>
    #Search{
        .van-search{
            padding-left: 30px;
            
        }
        .icon-left{
            position: absolute;
            top: .53125rem;
            font-size: .5625rem;
            color: #1890ff;
        }
        
            
    }
    .van-col{
            margin-top: 10px;
            padding-left: 10px;
            padding-right: 10px;
            font-size: 15px;
    }
</style>