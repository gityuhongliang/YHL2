<template>
    <div id="Me">
        <van-row type="flex" justify="center" >
            <van-col class="top" span="24" >
                <van-image
                round
                width="2rem"
                height="2rem"
                src="https://api.mall.kuazhu.com/avatar/default.jpg"
                />
                <span>{{name}}</span>
            </van-col>
        </van-row>
        
        <van-row type="flex" justify="center" class="nav">
            <!-- 待付款 -->
            <van-col  span="6"  @click="show1 = true">
                <van-icon name="pending-payment" size="35"/>
                <p>待付款</p>
            </van-col>
            <!-- 遮罩层页面 -->
            <van-overlay :show="show1" >
                <div class="wrapper" @click.stop>
                    <div class="block" @click.stop>
                        <div class="goback" >
                            <div class="not-paying" @click="show1 = false">
                                <van-icon name="arrow-left" />返回
                            </div>
                            <span>待付款</span>
                        </div>
                    
                    </div>
                </div>
            </van-overlay>

            <!-- 待发货 -->
            <van-col  span="6" @click="show2 = true">
                <van-icon name="peer-pay" size="35"/>
                <p>待发货</p>
            </van-col>
            <!-- 遮罩层页面 -->
            <van-overlay :show="show2" >
                <div class="wrapper" @click.stop>
                    <div class="block" @click.stop>
                        <div class="goback" >
                            <div class="not-paying" @click="show2 = false">
                                <van-icon name="arrow-left" />返回
                            </div>
                            <span>待发货</span>
                        </div>
                    
                    </div>
                </div>
            </van-overlay>

            <!-- 已发货 -->
            <van-col  span="6" @click="show3 = true">
                <van-icon name="logistics" size="35"/>
                <p>已发货</p>
            </van-col>
            <!-- 遮罩层页面 -->
            <van-overlay :show="show3" >
                <div class="wrapper" @click.stop>
                    <div class="block" @click.stop>
                        <div class="goback" >
                            <div class="not-paying" @click="show3 = false">
                                <van-icon name="arrow-left" />返回
                            </div>
                            <span>已发货</span>
                        </div>
                    
                    </div>
                </div>
            </van-overlay>

            <!-- 已完成 -->
            <van-col  span="6" @click="show4 = true">
                <van-icon name="certificate" size="35"/>
                <p>已完成</p>
            </van-col>
            <!-- 遮罩层页面 -->
            <van-overlay :show="show4" >
                <div class="wrapper" @click.stop>
                    <div class="block" @click.stop>
                        <div class="goback" >
                            <div class="not-paying" @click="show4 = false">
                                <van-icon name="arrow-left" />返回
                            </div>
                            <span>已完成</span>
                        </div>
                    
                    </div>
                </div>
            </van-overlay>
        </van-row>
        
        <van-row type="flex"  justify="center" >
            <van-col class="foot" span="24" >
                <span class="order">全部订单</span>
                <van-icon name="arrow" />
            </van-col>
        </van-row>
        <van-divider
            :style="{ color: '#837e7e', borderColor: '#837e7e', padding: '0 0px' }"
        >
        </van-divider>
        
    </div>
</template>
<script>
export default {
    name:'Me',
    components:{
       
    },
    data(){
        return{
            show1: false,
            show2: false,
            show3: false,
            show4: false,
            name:''
        }
    },
    mounted(){
        //获取用户名
        var username = localStorage.getItem('username')
        this.$data.name = username
    }
}
</script>
<style lang="less" scoped>
    #Me{
       position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 2;
        background-color: #fff;
    }
    
    .top{
        background-color: #1989fa;
        width: 100%;
        height: 100px;
        padding-top: 10px;
        padding-left: 10px;
        position: relative;
        span{
            font-size: 20px;
            position: absolute;
            bottom: 35px;
            left:105px;
        }
    }
    .nav{
        background-color: #fff;
        width: 100%;
        height: 100px;
        text-align: center;
        align-items: center;
        p{
            font-size: 12px;
            font-weight: 700;

        }
    }
    .foot{
        align-items: center;
        .van-icon{
            font-size: 15px;
            font-weight: 700;
            left: 70%;
        }

        .order{
            margin-left: 20px;
            font-size: 17px;
            font-weight: 700;
        }
    }
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    .block {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 2;
        background-color: #f5f5f5;
        .goback{
            height: 50px;
            background-color: #fff;
            .not-paying{
                position: absolute;
                display: inline-block;
                width: 80px;
                font-size: 18px;
                color: #1989fa;
                left: 5px;
                top: 13px;
                .van-icon{
                    vertical-align:text-bottom;
                    line-height: 20px;
                }
            }
            span{
                display: block;
                font-size: 18px;
                padding-top: 12px;
            }
        }
        
        
  }
</style>
<style lang="less">
    .van-tabbar {
        z-index: 3;
    }
</style>