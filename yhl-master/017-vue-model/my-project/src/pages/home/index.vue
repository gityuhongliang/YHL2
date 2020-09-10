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
                <van-swipe-item v-for="(image, index) in homeAds" :key="index">
                    <img v-lazy="image.image" />
                </van-swipe-item>
                </van-swipe>
        </van-row>
        <!-- 宫格 -->
        <div class="grid-father">
            <van-grid 
            :column-num="5"
            :gutter="3" 
            :icon-size="60"
            center
            v-for="(arr, index) in homeArr" :key="index"
            >
                <van-grid-item :icon="arr.icon" :text="arr.name" :to="'/list/'+arr._id"/>
            </van-grid>
        </div>
        <!-- 商品内容展示 -->
        <ul class="Secondary">
            <li v-for="(floor,floorIndex) in homeFloors" :key="floorIndex">
                <van-row type="flex" justify="center">
                    <div class="Secondary-title">
                        <h2>{{floor.title}}</h2>
                    </div>
                </van-row>
                <ul>
                    <van-row 
                        class="van-top-row"
                        type="flex"
                        justify="space-between"
                        align="center"
                        gutter="15"
                    >
                    <li class="Secondary-list"  v-for="(product,productIndex) in floor.products" :key="productIndex">
                        <div class="content">
                            <a href="">
                                <img :src="product.mainImage" alt="">
                                <div class="content-title">
                                   {{product.name}}
                                </div>
                                <div class="price">
                                    <span class="flag">￥</span>
                                    <span class="show-price">{{product.price}}</span>
                                    <van-tag plain type="danger">满减</van-tag>
                                </div>
                            </a>
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
import { mapGetters } from 'vuex'
import { Swipe, SwipeItem ,Lazyload} from 'vant';
Vue.use(Lazyload);
Vue.use(Swipe);
Vue.use(SwipeItem);
import { GET_ADS,GET_FLOORS,GET_CATEGORIESARR } from './store/types.js'
import Search from '../../components/search/index.vue'
export default {
    name:'Home',
    data(){
        return{
        }
    },
    mounted(){
        //获取广告数据
        this.$store.dispatch(GET_ADS)
        //获取分类数据
        this.$store.dispatch(GET_CATEGORIESARR)
        //获取楼层数据
        this.$store.dispatch(GET_FLOORS)
    },
    components:{
        Search,
    },
    computed:{
        
        // 使用对象展开运算符将 getter 混入 computed 对象中
        ...mapGetters([
            'homeAds',
            'homeFloors',
            'homeArr'
        ])
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
    //轮播图
    .van-swipe-item {
        margin-top: 14px;
        img{
            max-width: 100%;  
            max-height: 100%;  
        }
    }
    
    //宫格
    .grid-father{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        .van-grid-item{
            height: 90px;
            margin-bottom: 5px;
            margin-top: 5px;
        }
        
    }
    //商品内容
    .Secondary{
        display: block;
        
        padding-left: 12px;
        padding-right: 12px;
        padding-bottom: 50px;
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
    .van-top-row{
        flex-wrap: wrap;
    
        .content{
            margin:auto;
            width: 190px;
            height: 270px;
            background-color: #fff;
            position: relative;
            
            img{
                width: 100%;
                height: 200px;
            }
            .content-title{
                position: absolute;
                font-size: 15px;
                color: black;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                top: 205px;
                font-weight: 700;
            }
            .price{
                position: absolute;
                top: 228px;
                left: 5px;
                width: 100%;
                height: 20px;
                
                .flag{
                    font-size: 15px;
                    height: 20px;
                    color: red;
                    font-weight:700;
                }
                .show-price{
                    color: red;
                    font-size: 15px;
                    font-weight: 700;
                }
                .van-tag{
                    position: absolute;
                    top: 22px;
                    left: 56px;
                    line-height: 18px;
                }
            } 
        }
    }
</style>
    
