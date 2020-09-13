
//组件中用由this.$store.dispatch方法来派发action,
//action中用commit来提交mutation
//action中可以包含异步操作
import { GET_CAPTCHA,LOGIN_START_ACTION} from './types.js'
import api from 'api'
export default {
    async [GET_CAPTCHA]({ commit }) {
        const result = await api.getUserCaptcha({
            
        })
        console.log(result)

        if (result.data.code == 0) {
            commit(GET_CAPTCHA, { captcha: result.data.data})
        }
    },
    async [LOGIN_START_ACTION]({ commit }, values) {
        
        
        const username = values.username
        const password = values.password
        const captchaCode = values.captchaCode
        
        const result = await api.Login({
            
            captchaCode: captchaCode,
            password: password,
            username: username,
        })
        if (result.data.code == 0) {
            const status = result.status
            commit(LOGIN_START_ACTION, status)
        }
        // .then(result=>{
		// 	console.log(result)
		// 	//派发action
		// 	const data = result.data;
		// 	if(data.code == 0){
		// 		//1.将用户信息保存在前台
		// 		saveUsername(data.data.username)
		// 		//2.登录成功回到后台管理页面
		// 		window.location.href ='/'
		// 	}else{
		// 		message.error(data.message)
		// 	}
		// })
    },

}