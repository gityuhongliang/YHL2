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
                    <van-sidebar-item 
                    v-for="(arr,arrindex) in sorthomeArr" :key="arrindex"
                    :title="arr.name"

                    :pid="arr._id"
                    @click="handleShow(arr._id)"
                     />
                </van-sidebar>
            </div>
            
                    <van-col span="24">
                        <van-grid :column-num="3"  :icon-size="72"  :border="false" center default>
                            <van-grid-item 
                             />
                        </van-grid>
                    </van-col>
                    
            
        </van-row>
       
    </div>
</template>
<script>
import Vue from 'vue';
import { mapGetters } from 'vuex'
import { Sidebar, SidebarItem,} from 'vant';
Vue.use(Sidebar);
Vue.use(SidebarItem);
import { GET_HOME_CATEGORIESARR,GET_SORT_CATEGORIESARR } from './store/types.js'
import Search from '../../components/search/index.vue'
export default {
    name:'Sort',
    data(){
        return{
            activeKey: 1,
        }
    },
    components:{
       Search
    },
    mounted(){
        //获取数据
        this.$store.dispatch(GET_HOME_CATEGORIESARR)
    },
    methods:{
      handleShow(pid){
          this.$store.dispatch(GET_SORT_CATEGORIESARR,pid)
      }
    },
    computed:{
        // 使用对象展开运算符将 getter 混入 computed 对象中
        ...mapGetters([
            'sorthomeArr',
            'sortArr'
        ])
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