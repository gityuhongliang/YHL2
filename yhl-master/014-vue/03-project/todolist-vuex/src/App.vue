<!-- 结构 -->
<template>
    <div id="App">
        <Header/>
         <!-- :addTodo ='addTodo' -->
        <List />
        <!-- :todos='todos' :delTodo='delTodo' -->
        <Footer 
        
        />
        <!-- :todos ='todos' 
        :selectAllTodo='selectAllTodo'
        :deleteSelectTodo='deleteSelectTodo' -->
    </div>
</template>
<!-- 样式 -->
<script>
  //1.引入组件
    import Header from './pages/Header.vue'
    import List from './pages/List.vue'
    import Footer from './pages/Footer.vue'
    export default {
        name:'App',
        //2.注册组件
        components:{
        Header,
        List,
        Footer
        },
        data(){
            return{
                /*
                todos:[
                    {
                        task:'吃饭',
                        tag:false
                    },
                    {
                        task:'睡觉',
                        tag:true
                    }
                ]
                */
            }
      
        },
       /*
        methods:{
            addTodo(todo){//插入前面
                this.todos.unshift(todo)
            },
            delTodo(index){//根据下标截取
                this.todos.splice(index,1)
            },
            selectAllTodo(value){//循环数组然后根据传过来的value改变数组中tag的状态
                this.todos.forEach((item)=>{
                    item.tag = value
                })
            },
            deleteSelectTodo(){//筛选数组中tag状态为true的
                this.todos = this.todos.filter((item)=>
                    item.tag != true
                )
            }
        }
        */
    }
</script>
<!-- 逻辑 -->
<style scoped>
    #App{
        width: 500px;
        margin: 0 auto;
    }

</style>

