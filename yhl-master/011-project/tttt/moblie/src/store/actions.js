//组件中用this.$store.dispatch方法来派发action
//action中用commit来提交mutation
// action中可以包含异步操作
import { ADD_TODO, DEL_TODO, SELECT_ALL_TODO, DELETE_ALL_TODO } from "./types.js";

export default {
    [ADD_TODO ](store,todo){
        store.commit(ADD_TODO, todo)
    },
    [DEL_TODO](store, index) {
        store.commit(DEL_TODO, index)
    },
    [SELECT_ALL_TODO](store, value) {
        store.commit(SELECT_ALL_TODO, value)

    },
    [DELETE_ALL_TODO](store) {
        store.commit(DELETE_ALL_TODO)
    },
}