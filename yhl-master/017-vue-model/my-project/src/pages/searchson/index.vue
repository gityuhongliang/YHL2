<template>
    <div id="SearchSon">
        <div class="sort-top">
           <!-- 搜索框 -->
            <van-sticky>
                <van-row>
                    <van-col span="2">
                    <a href=""><van-icon  name="arrow-left" /></a>
                    </van-col>
                    <van-col span="22">
                        <Search />
                    </van-col>
                    
                </van-row>
            </van-sticky>
        </div>
    </div>
</template>
<script>
import Search from '../../components/search/index.vue'
export default {
    name:'SearchSon',
    data(){
        return{

        }
    },
    components:{
        Search
    },
    props:{

    }
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
</style>