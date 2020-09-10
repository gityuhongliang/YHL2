//唯一更改state的方法
//mutation必须是同步函数
import { GET_PRODUCTS_LIST } from './types.js'
export default {
    [GET_PRODUCTS_LIST](state, payload) {
        state.ads = payload.homeAds
    },
    
}