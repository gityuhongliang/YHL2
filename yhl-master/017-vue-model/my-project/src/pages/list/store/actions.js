
//组件中用由this.$store.dispatch方法来派发action,
//action中用commit来提交mutation
//action中可以包含异步操作
import { GET_PRODUCTS_LIST } from './types.js'
import api from 'api'
export default {
    async [GET_PRODUCTS_LIST]({ commit }) {
        const result = await api.getProductsList()
        console.log(result)
        if (result.data.code == 0) {
            commit(GET_PRODUCTS_LIST, { homeList: result.data.data})
            
        }
    }
}