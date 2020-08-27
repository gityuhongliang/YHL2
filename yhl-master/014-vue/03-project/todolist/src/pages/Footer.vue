<template>
    <div id="Footer">
        <input type="checkbox" v-model="allTodo">
        <span>{{selectTodo}}/{{total}}</span>
        <button @click='handleSelectTodo()'>删除选中</button>
    </div>


</template>
<script>
export default {
    name:'Footer',
    
    computed:{//计算属性
        total:function(){
            return this.todos.length//根据app中的data数组数据
        },
        selectTodo:function(){//根据app中的data数据计算拥有选中状态
            return this.todos.reduce((total,item)=>{
                if(item.tag){
                    total = total + 1
                }
                return total
            },0)
        },
        allTodo:{
            get(){
                return (this.total == this.selectTodo) && (this.total !=0)
            },
            set(value){
                this.selectAllTodo(value)
            }
        } 
    },
    props:{
        todos:Array,
        selectAllTodo:Function,
        deleteSelectTodo:Function
    },
    methods:{
        handleSelectTodo(){
            if(window.confirm('您确定要删除选中的任务吗')){
                this.deleteSelectTodo()
            }
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