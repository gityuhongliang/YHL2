//唯一更改state的方法
//mutation必须是同步函数
import { GET_HOME_CATEGORIESARR,GET_SORT_CATEGORIESARR } from './types.js'
export default {
    [GET_HOME_CATEGORIESARR](state, payload) {
        state.hrr = payload.sorthomeArr
    },
    [GET_SORT_CATEGORIESARR](state, payload) {
        console.log(state)
        state.arr = payload.sortArr
    },

}