<template>
	<div id="Detail">
		<van-sticky>
			<van-row>
			<van-nav-bar
				title="商品详情"
				left-text="返回"
				left-arrow
				@click-left="onClickLeft"
				/>
			</van-row>
		</van-sticky>
		<!-- 轮播图 -->
        <van-row>
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(image, index) in detail.images" :key="index">
                    <img v-lazy="image" />
                </van-swipe-item>
                </van-swipe>
        </van-row>
		<van-row>
			<van-grid :column-num="1" center :border="false" >
				<van-grid-item :text="detail.description" />
				<van-grid-item :text="detail.name" />
			</van-grid>
		</van-row>
		<van-row>
			<van-collapse v-model="activeNames">
			<van-collapse-item title="查看商品详情" name="1">
                <img :src="detail.mainImage" />
			</van-collapse-item>
			</van-collapse>
		</van-row>
		<van-row>
		<van-goods-action>
			<van-goods-action-icon icon="chat-o" text="客服" dot />
			<van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
			<van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
			<van-goods-action-button type="warning" text="加入购物车" />
			<van-goods-action-button type="danger" text="立即购买" />
		</van-goods-action>
		</van-row>
	</div>
</template>
<script>
import Vue from 'vue';
import { NavBar } from 'vant';
Vue.use(NavBar);
import { mapGetters } from 'vuex'

import { GET_PRODUCTS_DETAIL } from './store/types.js'
export default {
	name:'Detail',
	components:{
	},

	data() {
		return {
			id:this.$route.query.id,
			activeNames: ['1'],
		};
	},
	mounted(){
        this.$store.dispatch(GET_PRODUCTS_DETAIL,this.id)
       
    },
	methods: {
		
		onClickLeft(){
			// 后退一步记录，等同于 history.back()
			this.$router.go(-1)
		},
			
	},
	computed:{
		// 使用对象展开运算符将 getter 混入 computed 对象中
		...mapGetters([
			'detail'
		])
	}
}
</script>
<style lang="less" scoped>
	.van-grid-item{
		height: 50px;
		
	}
	#txt{
			color: red;
	}
	.van-goods-action{
		height: 60px;
	}
	#Detail .grid-item .van-grid-item__text{
		color: red !important;
	}
</style>
<style lang="less">
	.van-nav-bar__text{
		font-size: 16px;
	}
	

</style>