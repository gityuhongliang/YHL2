
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
            var detail = result.data.data
            detail.images = detail.images.split(',')
            // console.log(detail);
            commit(GET_PRODUCTS_DETAIL, detail)
        }
    },
    
}