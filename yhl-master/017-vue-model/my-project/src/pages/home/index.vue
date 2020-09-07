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
        <!-- <van-grid-item>
            <van-image src="https://api.mall.kuazhu.com/category-icons/1595243404358.jpg" />
            <span>手机通讯</span>
        </van-grid-item>
        <van-grid-item>
            <van-image src="https://api.mall.kuazhu.com/category-icons/1595243404358.jpg" />
        </van-grid-item>
        <van-grid-item>
            <van-image src="https://api.mall.kuazhu.com/category-icons/1595243404358.jpg" />
        </van-grid-item>
        <van-grid-item>
            <van-image src="https://api.mall.kuazhu.com/category-icons/1595243404358.jpg" />
        </van-grid-item>
        <van-grid-item>
            <van-image src="https://api.mall.kuazhu.com/category-icons/1595243404358.jpg" />
        </van-grid-item> -->
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
        <ul class="Secondary">
            <li>
                <van-row type="flex" justify="center">
                    <div class="Secondary-title">
                        <h2>手机通讯</h2>
                    </div>
                </van-row>
                <ul>
                    <van-row 
                        class="van-top-row"
                        type="flex"
                        justify="space-between"
                        align="center"
                        gutter="10"
                    >
                    <li class="Secondary-list">
                        
                            <div class="content">
                                <a href="">
                                    <img src="https://api.mall.kuazhu.com/product-images/1587973772260.jpg" alt="">
                                    <div>
                                        <p>
                                             宏碁 (Acer) 极光 D606D 投影仪 投影机办公（普清 3500流明 标配HDMI 梯形校正 商用机皇新升级 白天直投）
                                        </p>
                                    </div>
                                    
                                </a>
                            </div>
                        
                    </li>
                    <li class="Secondary-list">
                        
                            <div class="content">
                            </div>
                        
                    </li>
                    <li class="Secondary-list">
                        
                            <div class="content">
                            </div>
                        
                    </li>
                    <li class="Secondary-list">
                        
                            <div class="content">
                            </div>
                        
                    </li>
                    </van-row>
                </ul>
            </li>
        </ul>
        
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
    .Secondary{
        display: block;
        
        padding-left: 5px;
        padding-right: 5px;
        .Secondary-list{
            box-sizing: border-box;
            margin-bottom: 10px;
        }
        .Secondary-title{
            padding-bottom: 15px;
    
            h2{
                color:#323233;
                margin-top: 10px;
                font-size: 20px;
            }
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
    

        .content{
            margin:auto;
            width: 200px;
            height: 250px;
            background-color: #fff;
            img{
                width: 100%;
                height: 200px;
            }
            div{
                width: 100%;
               
                p{  
                    height: 100%;
                    font-size: 14px;
                    color: black;
                    white-space:nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;  
                }
                
            }
        }
    
  }
</style>
    
