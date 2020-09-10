//组件中用由this.$store.dispatch方法来派发action,
//action中用commit来提交mutation
//action中可以包含异步操作
import { GET_CATEGORIESARR,GET_SORT_CATEGORIESARR } from './types.js'
import api from 'api'
export default {
    async [GET_CATEGORIESARR]({ commit }) {
        const result = await api.getHomeCategories()
        if (result.data.code == 0) {
            commit(GET_CATEGORIESARR, { sorthomeArr: result.data.data })
        }
    },
    async [GET_SORT_CATEGORIESARR]({ commit } ) {
        const result = await api.getSortCategories()
        if (result.data.code == 0) {
            commit(GET_SORT_CATEGORIESARR, { sortArr: result.data.data })
        }
    },
    
}