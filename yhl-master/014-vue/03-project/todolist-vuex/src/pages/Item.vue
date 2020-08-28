<template>
    <div 
    id="Item"
    @mouseenter="handleShow(true)"
    @mouseleave="handleShow(false)"
    :style="{backgroundColor:bgColor}"
    >                               
                            <!-- 双向绑定data里面的tag状态 -->
      <input type="checkbox" v-model="todo.tag">
      <span>{{todo.task}}</span>
      <button v-show='isShow' @click="handleDel()">删除</button>
    </div>
</template>
<script>

import { DEL_TODO } from "../store/types.js";

export default {
    name:'Item',
    data(){
        return{
            bgColor:'#fff',
            isShow:false
        }
    },
    methods:{
        handleShow(flag){
            this.bgColor=flag ? '#ccc' : '#fff'
            this.isShow =flag 
        },
        handleDel(){
            if(window.confirm('您确定要删除该任务吗')){
                this.$store.dispatch(DEL_TODO,this.index)
            }
        }
    
    },
    props:{
        todo:Object,
        index:Number,
        delTodo:Function

    }
}
</script>
<style scoped>
    #Item{
        width: 100%;
        height: 35px;
        line-height: 35px;
        margin-top: 10px;
        border: 1px dashed red;
    }
    #Item button{
        margin-left: 400px;
    }
</style>