//store 的计算属性
export default {
    // Getter 接受 state 作为其第一个参数：
    total(state){
        return state.todos.length
    },
    selectTodo(state){
        return state.todos.reduce((total, item) => {
            if (item.tag) {
                total = total + 1
            }
            return total
        }, 0)
    },
    // Getter 会暴露为 store.getters 对象，你可以以属性的形式访问这些值：
    // Getter 也可以接受其他 getter 作为第二个参数：
    allTodo(state,getters){
        return (getters.total == getters.selectTodo) && (getters.total !=0)
    }
}