<template>
    <div id="Me">
        <div class="Login">
        <van-tabs @click="onClick">
            <van-tab title="密码登录"   name="a">
                <van-row>
                    <van-form @submit="onSubmit">
                    <van-field
                        v-model="username"
                        name="用户名"
                        label="用户名"
                        placeholder="请输入用户名"
                        :rules="[{ required: true, message: '请填写用户名' }]"
                    />
                    <van-field
                        v-model="password"
                        type="password"
                        name="密码"
                        label="密码"
                        placeholder="请输入密码"
                        :rules="[{ required: true, message: '请填写密码' }]"
                    />
                    <!-- 允许输入正整数，调起纯数字键盘 -->
                    <van-field v-model="digit"  label="验证码" placeholder="请输入验证码"/>
                    <div style="margin: 16px;">
                        <van-button round block type="info" native-type="submit">
                        提交
                        </van-button>
                    </div>
                    <div class="goback" @click="handleBack()">返回首页</div>

                    </van-form>
                </van-row>
            </van-tab>
            <van-tab title="验证码登录" name="b">内容 2</van-tab>
            <van-tab title="免费注册"   name="c">内容 3</van-tab>
        </van-tabs>
    </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { Tab, Tabs,Form,Field,Button } from 'vant';

Vue.use(Form);
Vue.use(Button);
Vue.use(Field);
Vue.use(Tab);
Vue.use(Tabs);
export default {
    name:'Me',
    components:{
       
    },
    data() {
        return {
            username: '',
            password: '',
            activeName: 'c',
        };
    },
    methods: {
        onClick(){

        },
        onSubmit(values) {
            console.log('submit', values);
        },
        handleBack(){
            this.$router.back()
        }
    },

}
</script>
<style lang="less" scoped>
    .Login{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 200;
        background-color: #fff;
        .van-tabs{
            margin-top: 20%;
        }
    }
    .van-tab__pane{
    }
    .van-form{
        padding: 80px 10px 0px 0px;
        width: 100%;
        height: 300px;
        .van-button{
            margin-top: 50px;
        }
    }
    .goback{
        padding-top: 10px;
        padding-left: 15px;
        font-size: 18px;
        color:#1989fa;
    }
</style>
<style lang="less">
    .van-tabs__wrap{
        font-weight: 800;
        span{
            font-size: 18px;
        }
        .van-tab--active{
            font-weight:900;
        }
    }
</style>