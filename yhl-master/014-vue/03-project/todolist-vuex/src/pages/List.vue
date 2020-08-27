<template>
    <div id="List">
        <Item
            v-for="(todo,index) in this.$store.state.todos"
            :key="index"
            :todo='todo'
            :index='index'
            :delTodo='delTodo'
         />
    </div>
</template>
<script>
import Item from './Item'
export default {
    name:'List',
    components:{
        Item
    },
    props:{
        todos:Array,
        delTodo:Function
    }
}
</script>
<style scoped>
    #List{
        text-align: left;
    }
</style>