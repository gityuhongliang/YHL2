//唯一更改state的方法
//mutation必须是同步函数
import { GET_CAPTCHA } from './types.js'
export default {
    [GET_CAPTCHA](state, payload) {
        state.captcha = payload.captcha
    },
    
}