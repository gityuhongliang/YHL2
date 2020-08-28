<template>
    <div 
    id="Footer"
    v-show="isShow"
    @total-count='totalCounts()'
    >
        <input type="checkbox" v-model="allTodo">
        <span>{{selectTodo}}/{{total}}</span>
        <button 
        @click='handleSelectTodo()' 
        >删除选中</button>
        <button @click='add()'>
            ttt
        </button>
    </div>


</template>
<script>
// mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性
import { mapGetters } from 'vuex'

import { SELECT_ALL_TODO,DELETE_ALL_TODO } from "../store/types.js";

export default {
    name:'Footer',
    data(){
        return{
            isShow:true
        }
    },
    
    computed:{//计算属性
    /*
        total:function(){
            // return this.todos.length//根据app中的data数组数据
            return this.$store.getters.total
        },
        selectTodo:function(){//根据app中的data数据计算拥有选中状态
            
            // return this.todos.reduce((total,item)=>{
            //     if(item.tag){
            //         total = total + 1
            //     }
            //     return total
            // },0)
            
            return this.$store.getters.selectTodo
        },
    */  
    // 使用对象展开运算符将 getter 混入 computed 对象中
        ...mapGetters([
            'total',
            'selectTodo'
         ]),
        allTodo:{
            get(){
                
                // return (this.total == this.selectTodo) && (this.total !=0)
                return this.$store.getters.allTodo
            },
            set(value){
                // this.selectAllTodo(value)
                this.$store.dispatch(SELECT_ALL_TODO,value)
            }
        } 
    },
    /*
    props:{
        todos:Array,
        selectAllTodo:Function,
        deleteSelectTodo:Function
    },
    */
    methods:{
        add(){
            if (this.$store.getters.total == 0) {
                console.log(122)
                this.$emit('total-count')
            }
        },
        handleSelectTodo(){
            if(window.confirm('您确定要删除选中的任务吗')){
                console.log(33)
                // this.deleteSelectTodo()
                this.$store.dispatch(DELETE_ALL_TODO)
            }
            
        },
        totalCounts(isShow){
            console.log(111)
            this.isShow = !isShow
        }
    }
}
</script>
<style scoped>
    #Footer {
        width: 100%;
        margin-top: 10px;
    }
    #Footer button{
        float: right
    }
</style>