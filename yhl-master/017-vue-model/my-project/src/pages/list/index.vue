<template>
    <div id="List">
          <!-- 搜索框 -->
            <van-sticky>
                <van-row id="top">
                    <Search/>
                </van-row>
            </van-sticky>
            <img 
            v-for="(image, index) in homeList" :key="index"
            src="image.list.mainImage"
             alt="">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
            >
            <van-cell v-for="item in list" :key="item" :title="item" />
            </van-list>
        </van-pull-refresh>
    </div>
</template>
<script>
import Vue from 'vue';
import { List } from 'vant';
import { PullRefresh } from 'vant';

Vue.use(PullRefresh);
Vue.use(List);
import { mapGetters } from 'vuex'
import { GET_PRODUCTS_LIST } from './store/types.js'
import Search from '../../components/search/index.vue'
export default {
    name:'List',
    components:{
       Search
    },
    data() {
    return {
        id:this.$route.params.id,
        list: [],
        loading: false,
        //数据加载完毕
        finished: false,
        refreshing: false,
    };
  },
  methods: {
    onLoad() {
        this.$store.dispatch(GET_PRODUCTS_LIST,this.id)
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        // 异步操作并更新数据，数据更新完毕后
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
  },
  computed:{
        
        // 使用对象展开运算符将 getter 混入 computed 对象中
        ...mapGetters([
            'homeList',
            
        ])
    }
}
</script>
<style scoped>
    
</style>