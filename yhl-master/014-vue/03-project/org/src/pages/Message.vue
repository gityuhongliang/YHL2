<template>
    <div id="Message">
        <span> this is Message {{task}}</span>
    </div>
</template>
<script>
export default {
    name:'Message',
    props:{
        task:String
    }
}
</script>
<!-- 在style标签中添加scoped属性，可以使样式只在当前的组件中生效，样式私有化 -->
<style scoped>
    span{
        color:red
    }
</style>