<template>
    <div id="Search">
    <van-search
        class="search"
        v-model="value"
        placeholder="T恤"
        shape="round"
        @focus="handleFocus()"
        />
    </div>
</template>
<script>
export default {
    name:'Search',
    data() {
        return {
            value:''
            };
    },
    methods:{
        handleFocus(){
           this.$router.push({ path: 'searchson' })
        }
    },
    }
</script>
<style scoped>

</style>