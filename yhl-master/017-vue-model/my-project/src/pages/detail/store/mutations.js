//唯一更改state的方法
//mutation必须是同步函数
import { GET_PRODUCTS_DETAIL } from './types.js'
export default {
    [GET_PRODUCTS_DETAIL](state, payload) {
        state.item = payload
    },
    
}