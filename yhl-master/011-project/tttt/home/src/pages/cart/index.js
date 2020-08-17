var _nav = require('pages/common/nav')
require('pages/common/search')
require('pages/common/footer')
require('./index.css');

var _util = require('util');
var api = require('api');
var tpl = require('./index.tpl');
var pagination =require('util/pagination')
var page = {

	init:function(){
		//事件代理
		this.$cartBox = $('.cart .cart-box')
		//1.加载购物车商品信息
		this.loadCarts()
		//2.绑定事件
		this.bindEvent()
		
	},
	showErrPage:function(){
		this.$cartBox.html('<p class="empty-message">请求出错稍后再试.....</p>')

	},
	bindEvent:function(){
		var _this= this
		//事件代理
		//1.单个选中/取消状态
		this.$cartBox.on('click','.select-one',function(){
			var $this = $(this)
			//更新选中状态需要获取当前商品的ID
			var productId = $this.parents('.product-item').data('product-id');
			//选中
			if ($this.is(':checked')) {
				api.updateCartsChoice({
					data:{
						productId:productId,
						checked:true
					},
					success:function(data){
						_this.renderCarts(data)
					},
					error:function(){
						// _this.$cartBox.html('<p class="empty-message">请求出错稍后再试.....</p>')
						 _this.showErrPage()
					}				
				})
			
			}
			//未选中
			else{
				api.updateCartsChoice({
					data:{
						productId:productId,
						checked:false
					},
					success:function(data){
						_this.renderCarts(data)
					},
					error:function(){
						// _this.$cartBox.html('<p class="empty-message">请求出错稍后再试.....</p>')
						 _this.showErrPage()
					}				
				})
			}
		})
		//2.全选/全不选
		this.$cartBox.on('click','.select-all',function(){
			var $this = $(this)
			//不传商品ID就是全选的接口
			//选中
			if ($this.is(':checked')) {
				api.updateCartsChoice({
					data:{
						checked:true
					},
					success:function(data){
						_this.renderCarts(data)
					},
					error:function(){
						// _this.$cartBox.html('<p class="empty-message">请求出错稍后再试.....</p>')
						 _this.showErrPage()
					}				
				})
			
			}
			//未选中
			else{
				api.updateCartsChoice({
					data:{
						checked:false
					},
					success:function(data){
						_this.renderCarts(data)
					},
					error:function(){
						// _this.$cartBox.html('<p class="empty-message">请求出错稍后再试.....</p>')
						 _this.showErrPage()
					}				
				})
			}
		})
		//3.删除单个选中商品
		this.$cartBox.on('click','.delete-one',function(){
			var $this = $(this)
			//删除商品需要获取当前商品的ID
			var productId = $this.parents('.product-item').data('product-id');
			if (_util.showConfirmMsg('您确定要删除该商品吗？？')) {
				api.deleteCarts({
					data:{
						productId:productId
					},
					success:function(data){
						_this.renderCarts(data)
					},
					error:function(){
						 _this.showErrPage()
					}				
				})
			}
			
		})
		//4.删除多个选中商品:由于商品选中状态已经存在后台，所以不需要传参
		this.$cartBox.on('click','.delete-selected',function(){
			var $this = $(this)
			//删除商品需要获取当前商品的ID
			var productId = $this.parents('.product-item').data('product-id');
			if (_util.showConfirmMsg('您确定要删除选中该商品吗？？')) {
				api.deleteCarts({
					
					success:function(data){
						_this.renderCarts(data)
					},
					error:function(){
						 _this.showErrPage()
					}				
				})
			}
			
		})
		//5.增加/减少商品数量
		this.$cartBox.on('click','.count-btn',function(){
			var $this=$(this)
			//购物车更新商品数量需要获取当前商品的ID
			var productId = $this.parents('.product-item').data('product-id');

			var $input = $this.siblings('.count-input')
			//获取当前商品数量
			var current = parseInt($input.val())
			//需要给后台传递的商品数量参数
			var count =current
			//获取商品库存
			var stock = $input.data('stock')
			//增加
			if ($this.hasClass('plus')) {//选中有plus属性的
				if (current >= stock) {
					_util.showErrMsg('商品数量不能大于库存数量')
					return
				}
				$input.val(current + 1)
				count =current + 1
			}
			//减少
			else if ($this.hasClass('minus')) {//选中有minus属性的
				if (current <= 1) {
					_util.showErrMsg('商品数量不能小于1件')
					return
				}
				$input.val(current - 1)
				 count =current - 1
			}
			//发送请求更新商品数量
			api.updateCartsCounts({
					data:{
						productId:productId,
						count:count
					},
					success:function(data){
						_this.renderCarts(data)
					},
					error:function(){
						 _this.showErrPage()
					}				
				})
		})
		//6.去结算
		this.$cartBox.on('click','.btn-submit',function(){
			if (_this.totalCartPrice <= 0) {
				_util.showErrMsg('请添加商品再结算')
			}else{
				window.location.href = './order-confirm.html'
			}
		
			
		})
	},
	//封装的生成html模板数据方法
	renderCarts:function(data){
		//为了跟上面购物车数量数据同步需要实时请求关于购物车数量的路由
		//调用nav中的js方法
		_nav.loadCarts()

		//结算时需要获取总价格，把data里面的总价格存下来 需要用
		this.totalCartPrice = data.totalCartPrice
		if (data.cartList.length > 0) {
			var html = _util.render(tpl,data)
			this.$cartBox.html(html)
		}else{
			this.$cartBox.html('<p class="empty-message">您的购物车空空如也.....</p>')
		}
	},
	loadCarts:function(){
		var _this= this
		api.getCarts({
			//不用携带参数
			success:function(data){
				// if (data.cartList.length > 0) {
				// 	var html = _util.render(tpl,data)
				// 	_this.$cartBox.html(html)
				// }else{
				// 	_this.$cartBox.html('<p class="empty-message">您的购物车空空如也.....</p>')
				// }
				console.log(data)
				_this.renderCarts(data)
			},
			error:function(){
					// _this.$cartBox.html('<p class="empty-message">请求出错稍后再试.....</p>')
					 _this.showErrPage()
				
			}
		})
	}
	
}

$(function(){
	page.init();
})