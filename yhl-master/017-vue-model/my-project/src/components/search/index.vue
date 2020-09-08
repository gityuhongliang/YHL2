<template>
    <div id="Search">
    <van-search
        class="search"
        v-model="value"
        placeholder="T恤"
        shape="round"
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

    }
</script>
<style scoped>

</style>