<template>
    <div id="Home">
        <div id='header'>
            <!-- LOGO -->
            <van-row type="flex" justify="center">
                <div>
                    <h1>爱跨淘</h1>
                </div>
            </van-row>
            <!-- 搜索框 -->
            <van-sticky>
                <van-row id="top">
                    <Search/>
                </van-row>
            </van-sticky>
                
        </div>
        <!-- 轮播图 -->
        <van-row>
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img v-lazy="image" />
                </van-swipe-item>
                </van-swipe>
        </van-row>
        <!-- 宫格 -->
        <van-grid 
        :column-num="5"
        :gutter="10" 
        square
        :icon-size="43"
        >
            <van-grid-item icon="https://api.mall.kuazhu.com/category-icons/1595243404358.jpg" text="手机通讯" />
            <van-grid-item icon="https://api.mall.kuazhu.com/category-icons/1595243379743.jpg" text="食品生鲜" />
            <van-grid-item icon="https://api.mall.kuazhu.com/category-icons/1595243323048.jpg" text="汽车保养" />
            <van-grid-item icon="https://api.mall.kuazhu.com/category-icons/1595243298132.jpg" text="内衣配饰" />
            <van-grid-item icon="https://api.mall.kuazhu.com/category-icons/1595243270185.jpg" text="母婴童装" />
            <van-grid-item icon="https://api.mall.kuazhu.com/category-icons/1595243232631.jpg" text="美妆护肤" />
            <van-grid-item icon="https://api.mall.kuazhu.com/category-icons/1595243206088.jpg" text="酒水饮料" />
            <van-grid-item icon="https://api.mall.kuazhu.com/category-icons/1595243130830.jpg" text="个护清洁" />
            <van-grid-item icon="https://api.mall.kuazhu.com/category-icons/1595244144843.jpg" text="家用电器" />
            <van-grid-item icon="https://api.mall.kuazhu.com/category-icons/1587973628877.png" text="电脑耗材" />
        </van-grid>
        <!-- 商品内容展示 -->
        <van-row type="flex" justify="center">
            <div class="Secondary-title">
                <h2>手机通讯</h2>
            </div>
        </van-row>
        <van-row class="van-top-row" type="flex" justify="center" align="center">
            <van-col span="12">
                <div class="content">
                    
                </div>
            </van-col>
            <van-col span="12">
                <div class="content">

                </div>
            </van-col>
            <van-col span="12">
                <div class="content">

                </div>
            </van-col>
            <van-col span="12">
                <div class="content">

                </div>
            </van-col>
            
        </van-row>
                
    </div>
</template>
<script>
import Vue from 'vue';
import { Swipe, SwipeItem ,Lazyload,Sticky,Grid, GridItem} from 'vant';
Vue.use(Lazyload);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Sticky);
Vue.use(Grid);
Vue.use(GridItem);
import Search from '../../components/search/index.vue'
export default {
    name:'Home',
    data(){
        return{
            images: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://imgcps.jd.com/ling4/1218491/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5bd8253082acdd181d02fa6d/e286f91f/cr/s/q.jpg',
                    'https://img30.360buyimg.com/pop/s590x470_jfs/t1/123670/36/11084/51362/5f486e93E66691b8b/ab9103d80c3a598d.jpg.webp',
                ],
        }
    },
    components:{
       Search
    },
    methods:{
    },
    props:{
        
    }
}
</script>
<style lang="less" >

    #header{
        background-color: #fff;
        #top{
            height: 40px;
            width: 100%;
            z-index: 99
        }
    }
    h1{
        color:red;
        margin-top: 10px;
        font-size: 25px;
    }
    .Secondary-title{
        padding-bottom: 15px;
    
        h2{
            color:#323233;
            margin-top: 10px;
            font-size: 20px;
        }
    }
    .van-swipe-item {
        margin-top: 14px;
        img{
            max-width: 100%;  
            max-height: 100%;  
        }
    }
    .van-top-row{
        flex-wrap: wrap;
    
    .van-col{
        margin-bottom: 10px;
        .content{
            margin:auto;
            width: 200px;
            height: 250px;
            background-color: #ee0a24;
        }
    }
  }
</style>
    
