
//组件中用由this.$store.dispatch方法来派发action,
//action中用commit来提交mutation
//action中可以包含异步操作
import { GET_CAPTCHA } from './types.js'
import api from 'api'
export default {
    async [GET_CAPTCHA]({ commit }, ) {
        const result = await api.getUserCaptcha({
            
        })
        if (result.data.code == 0) {
            commit(GET_CAPTCHA, { captcha: result.data.data})
        }
    },

}