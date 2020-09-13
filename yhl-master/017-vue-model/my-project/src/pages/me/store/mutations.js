//唯一更改state的方法
//mutation必须是同步函数
import { GET_CAPTCHA, LOGIN_START_ACTION} from './types.js'
export default {
    [GET_CAPTCHA](state, payload) {
        state.captcha = payload.captcha
    },
    [LOGIN_START_ACTION](state, payload) {
        // if (payload.status !== 200) {
        //     return payload
        // }
        state.login = payload
        console.log(payload)
    },

}