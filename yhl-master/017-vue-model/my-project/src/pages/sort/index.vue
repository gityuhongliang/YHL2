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
                        <van-grid :column-num="3"  :icon-size="72"  :border="false" center default
                        v-for="(arr, index) in sortArr" :key="index"
                        >
                            <van-grid-item  :icon="arr.icon" :text="arr.name"
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
            activeKey: 0,
            
        }
    },
    components:{
       Search
    },
    mounted(){
        var _this = this
        this.$store.dispatch(GET_HOME_CATEGORIESARR)
        .then(()=>{
            // console.log(_this.$store.state.sort.hrr[0]._id)
            _this.$store.dispatch(GET_SORT_CATEGORIESARR,_this.$store.state.sort.hrr[0]._id)
        })
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
    },
   
    
}
</script>
<style lang="less" scoped>
    #Sort{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 2;
        background-color: #fff;
    }
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