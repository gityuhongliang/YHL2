<template>
    <div id="Sort">
        <div class="sort-top">
           <!-- 搜索框 -->
            <van-sticky>
                <van-row>
                    <Search/>
                </van-row>
            </van-sticky>
        </div>
        <van-row type="flex" justify="space-between">
            <div>
                <van-sidebar v-model="activeKey">
                    <van-sidebar-item title="标签名称" />
                    <van-sidebar-item title="标签名称" />
                    <van-sidebar-item title="标签名称" />
                    <van-sidebar-item title="标签名称" />
                    <van-sidebar-item title="标签名称" />
                    <van-sidebar-item title="标签名称" />
                    <van-sidebar-item title="标签名称" />
                    <van-sidebar-item title="标签名称" />
                    <van-sidebar-item title="标签名称" />
                    <van-sidebar-item title="标签名称" />
                    <van-sidebar-item title="标签名称" />
                </van-sidebar>
            </div>
            
                    <van-col span="24">
                        <van-grid :column-num="3"  :icon-size="72"  :border="false" center default>
                            <van-grid-item icon="https://api.mall.kuazhu.com/category-icons/1595386719634.jpg" text="华为Mate" />
                        </van-grid>
                    </van-col>
                    
            
        </van-row>
       
    </div>
</template>
<script>
import Vue from 'vue';
import { Sidebar, SidebarItem,} from 'vant';
Vue.use(Sidebar);
Vue.use(SidebarItem);
import Search from '../../components/search/index.vue'
export default {
    name:'Sort',
    data(){
        return{
            activeKey: 0,
            
        }
    },
    components:{
       Search
    },
    props:{
        
    }
}
</script>
<style lang="less" scoped>
    .van-sidebar{
        width: 100px;
        text-align: center;
        
        .van-sidebar-item--select::before{
                height:100%;
                color: red;
            }
    }
    .van-sidebar-item--select {
        color: red;
        font-weight: 500;
    }
    .van-col{
        background-color: #fff;
    }
    .van-grid-item{
        span{
            font-size: 20px;
        }
    }
    
</style>