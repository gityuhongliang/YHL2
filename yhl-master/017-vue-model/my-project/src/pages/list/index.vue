<template>
    <div id="List">
          <!-- 搜索框 -->
            <van-sticky>
                <van-row>
                    <van-search
                    v-model="value"
                    left="arrow-left"
                    show-action
                    placeholder="请输入搜索关键词"
                    @cancel="onCancel"
                />
                </van-row>
            </van-sticky>
			<van-list
				v-model="loading"
				:finished="finished"
				finished-text="没有更多了"
				@load="onLoad"
				>
            <van-grid
			direction="horizontal"  
			:column-num="1"
			:icon-size="150"
			:key="index"
			v-for="(arr, index) in homeList"
			>
				<van-grid-item 
				:icon="arr.mainImage" 
				:text="arr.name"
				@click="handleDetail(arr._id)"
				/>
				<div class="price">
					<span class="flag">￥</span>
					<span class="show-price">{{arr.price}}</span>
					<van-tag plain type="danger">满减</van-tag>
				</div>
			</van-grid>
			
          </van-list>
    </div>
</template>
<script>
import Vue from 'vue';
import { List,Cell } from 'vant';
import { mapGetters } from 'vuex'
Vue.use(List);
Vue.use(Cell);
import { GET_PRODUCTS_LIST } from './store/types.js'
export default {
    name:'List',
    components:{

    },
	data() {
		return {
			id:this.$route.query.categoryId,
			list:this.$store.getters.homeList,
			value:'',
			loading: false,
			finished: false,
		};
	},
	methods: {
		onLoad() {
			// 异步更新数据
			// setTimeout 仅做示例，真实场景中一般为 ajax 请求
			this.$store.dispatch(GET_PRODUCTS_LIST,this.id)
			for (let i = 0; i < 10; i++) {
			this.list.push(this.list.length + 1);
			}

			// 加载状态结束
			this.loading = false;

			// 数据全部加载完成
			if (this.list.length >= 40) {
			this.finished = true;
			}
		},

		handleDetail(id){
			this.$router.push({ 
				path: '/detail',
				query: { id: id }
			})
		},
		onCancel() {
				this.$router.back()
		},
	},
    computed:{
        // 使用对象展开运算符将 getter 混入 computed 对象中
       ...mapGetters([
            'homeList',
        ])
    }
}
</script>
<style lang="less" scoped>
    .van-list{
		width: 100%;
		text-align: center;
		.van-hairline--top{
			position: relative;
			.van-grid-item{
				height: 150px;
			}
		}
    }
</style>
<style lang="less">
.price{
	position: absolute;
	bottom: 10px;
	right: 25px;
	.flag{
		font-size: 15px;
		height: 20px;
		color: red;
		font-weight:700;
	}
	.show-price{
		color: red;
		font-size: 15px;
		font-weight: 700;
		padding-right: 5px;
	}
	
} 
</style>