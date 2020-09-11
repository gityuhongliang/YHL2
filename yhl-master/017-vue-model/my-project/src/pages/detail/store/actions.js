
//组件中用由this.$store.dispatch方法来派发action,
//action中用commit来提交mutation
//action中可以包含异步操作
import { GET_PRODUCTS_DETAIL } from './types.js'
import api from 'api'
export default {
    async [GET_PRODUCTS_DETAIL]({ commit },id) {
        const result = await api.getProductsDetail({
            id:id
        })
        if (result.data.code == 0) {
            commit(GET_PRODUCTS_DETAIL, { detail: result.data.data,id })
        }
    },
    
}