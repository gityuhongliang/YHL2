<template>
    <div id="Me">
        <div class="Login">
        <van-tabs @click="onClick">

            <van-tab title="密码登录" name="a">
                <van-row>
                    <van-form @submit="onSubmit">
                    <van-field
                        v-model="username"
                        name="用户名"
                        label="用户名"
                        placeholder="请输入用户名"
                        :rules="[{ usernameRegular,required: true, message: '请输入正确的用户名' }]"
                    />
                    <van-field
                        v-model="password"
                        type="password"
                        name="密码"
                        label="密码"
                        placeholder="请输入密码"
                        :rules="[{ passwordRegular,required: true,message: '请输入正确的密码' }]"
                    />
                    <!-- 允许输入正整数，调起纯数字键盘 -->
                    <van-field v-model="digit"  name="验证码" label="验证码" placeholder="请输入验证码"/>
                    
                    <div style="margin: 16px;">
                        <van-button round block type="info" native-type="submit">
                        提交
                        </van-button>
                    </div>
                    <div class="goback" @click="handleBack()">返回首页</div>

                    </van-form>
                </van-row>
            </van-tab>

            <van-tab title="验证码登录" id="Tel" name="b">
                <van-row>
                    <van-form @submit="onSubmit">
                        <!-- 输入手机号，调起手机号键盘 -->
                        <van-field 
                        type="tel" 
                        placeholder="请输入手机号"
                        name="手机号"
                        label="手机号"
                        :value="valueOne"
                        @touchstart.native.stop="show = true"
                        :rules="[{ phoneRegular,required: true,message: '请输入正确的手机号' }]"
                        />
                        <van-field
                        v-model="sms"
                        center
                        clearable
                        name="短信验证码"
                        label="短信验证码"
                        placeholder="请输入收到的验证码"
                        class="short-term"
                        >
                        <template #button>
                            <van-button size="small" type="primary">发送验证码</van-button>
                        </template>
                        </van-field>
                        
                    <div style="margin: 16px;">
                        <van-button round block type="info" native-type="submit">
                        提交
                        </van-button>
                    </div>
                    </van-form>
                </van-row>
            </van-tab>

            <van-tab title="免费注册"  id="registerTel" name="c">
                <van-row>
                    <van-form @submit="onSubmit">
                        <!-- 输入手机号，调起手机号键盘 -->
                        <van-field 
                        type="tel"
                        name="手机号"
                        label="手机号"
                        placeholder="请输入手机号"
                        :value="valueTwo"
                        @touchstart.native.stop="show = true"
                         />
                        <van-field
                        v-model="registersms"
                        center
                        name="短信验证码"
                        clearable
                        label="短信验证码"
                        placeholder="请输入收到的验证码"
                        class="short-term"
                        >
                        <template #button>
                            <van-button size="small" type="primary">发送验证码</van-button>
                        </template>
                        </van-field>
                        <!-- 输入密码 -->
                        <van-field 
                        v-model="registerPasswordOne" 
                        type="password"
                        label="密码" 
                        placeholder="请输入密码"
                        :rules="[{ passwordRegular,required: true,message: '请填写密码' }]"
                        />
                        <!-- 输入密码 -->
                        <van-field 
                        v-model="registerPasswordTwo" 
                        type="password"
                        label="密码" 
                        name="密码"
                        placeholder="请输入密码"
                        :rules="[{ repeatRegular,required: true,message: '请填写一致的密码' }]"
                        />
                        <div style="margin: 16px;">
                            <van-button round block type="info" native-type="submit">
                                提交
                            </van-button>
                        </div>
                   
                    </van-form>
                </van-row>
            </van-tab>
        <!-- 移动端数字键盘 -->
            <van-number-keyboard
           :get-container="getContainer"
            v-model="valueOne"
            :show="show"
            @blur="show = false"
            @delete="onDelete"
            />
            <van-number-keyboard
            :get-container="getContainerTwo"
            v-model="valueTwo"
            :show="show"
            @blur="show = false"
            @delete="onDelete"
            />
           
        </van-tabs>
    </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { Tab, Tabs,Form,Field,Button,NumberKeyboard,Toast } from 'vant';
Vue.use(Form);
Vue.use(Button);
Vue.use(Field);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(NumberKeyboard);
export default {
    name:'Me',
    components:{
       
    },
    data() {
        return {
            activeName: 'c',
            username: '',
            password: '',
            digit: '',
            sms:"",
            registersms:"",
            registerPasswordOne:"",
            registerPasswordTwo:"",
            show: false,
            valueOne:"",
            valueTwo:"",
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
        },
        
        onDelete() {
            Toast('删除');
        },
         // 返回一个特定的 DOM 节点，作为挂载的父节点
        getContainer() {
            return document.querySelector('#Tel');
        },
        getContainerTwo() {
            return document.querySelector('#registerTel');
        },
        // 正则校验
        usernameRegular(val) {
            // 帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)
            return /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/.test(val);
        },
        passwordRegular(val) {
            //密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)
            return /^[a-zA-Z]\w{5,17}$/.test(val);
        },
        phoneRegular(val) {
            //手机号码
            return /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(val);
        },
        repeatRegular(val) {
            console.log(val)
            if(this.registerPasswordOne == this.registerPasswordTwo){
               return  val 
            }
            //密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)
           
        },
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
    
    .van-form{
        padding: 80px 10px 0px 0px;
        width: 100%;
        height: 300px;
        .van-button{
            margin-top: 50px;
        }
        .van-field{
            margin-top: 15px;
        }
    }
    .short-term{
        height: 100px;
        line-height: 100px;
        .van-field__control{
            padding-top: 20px;
        }
        button{
            height: 50px;
            border-radius: 20px;
            background-color: #1989fa;
            margin-bottom: 42px;
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