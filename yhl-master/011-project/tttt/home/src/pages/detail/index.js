require('pages/common/nav')
require('pages/common/search')
require('pages/common/footer')
require('./index.css');

var _util = require('util');
var api = require('api');
var tpl = require('./index.tpl');
var pagination =require('util/pagination')
var page = {
	//把多个参数集合在一个对象中
	productsListParams:{
		//通过地址参数中分类ID获取数据
		id:_util.getParamsFromUrl('productId'),
		
	},
	init:function(){
		this.detailBox = $('.detail-box')
		//1.加载详情页数据
		this.loadProductsDetail()
		//2.绑定事件
		this.bindEvent()
		
	},
	loadProductsDetail:function(){
		var _this= this
		if(this.productsListParams.id){
			api.getProductsDetail({
				data:this.productsListParams,
				success:function(productDetail){
					console.log(productDetail)
					//绑定库存
					_this.stock = productDetail.stock
					//分割成数组
					productDetail.images = productDetail.images.split(',')
					//默认第一张
					productDetail.activeImage = productDetail.images[0]
					var html = _util.render(tpl,productDetail)
					_this.detailBox.html(html)
				}
			})
		}
		
	},
	bindEvent:function(){
		var _this= this
		//事件代理
		//1.商品图片切换
		this.detailBox.on('mouseenter','.product-small-img-item',function(){
			var $this=$(this)
			//选中状态取消兄弟元素状态
			$this.addClass('active')
			.siblings('.product-small-img-item')
			.removeClass('active')
			//获取图片地址
			var src = $this.find('img').attr('src');
			_this.detailBox.find('.product-main-img')
			.find('img').attr('src',src)
		})
		//2.点击增加或者减少商品数量
		this.detailBox.on('click','.count-btn',function(){
			var $this=$(this)
			
			var $input = $('.count-input')
			var current = parseInt($input.val())
			//增加
			if ($this.hasClass('plus')) {//选中有plus属性的
				$input.val(current >= _this.stock ? _this.stock : current + 1)
			}
			//减少
			else if ($this.hasClass('minus')) {//选中有minus属性的
				$input.val(current > 1 ? current -1 : 1)
			}
		})
		//3.添加购物车
		this.detailBox.on('click','.add-cart-btn',function(){
			var count = $('.count-input').val()
			console.log(count)
			api.addCarts({
				data:{
					productId:_this.productsListParams.id,
					count:count
				},
				success:function(productDetail){
					_util.goResult('addCart')
				}
			})
		})
	}
	
}

$(function(){
	page.init();
})