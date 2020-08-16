require('pages/common/nav')
require('pages/common/search')
require('pages/common/footer')
require('./index.css');

var _util = require('util');
var api = require('api');
var tpl = require('./index.tpl');
var pagination =require('util/pagination')
var page = {

	init:function(){
		//1.加载购物车商品信息
		this.loadCarts()
		//2.绑定事件
		this.bindEvent()
		
	},

	bindEvent:function(){
		var _this= this
		//事件代理
	},
	loadCarts:function(){
		api.getCarts({
			//不用携带参数
			success:function(data){
				console.log(data)
				if (data.cartList.length > 0) {
					var html = _util.render(tpl,data)
					$('.cart .cart-box').html(html)
				}else{
					$('.cart .cart-box').html('<p class="empty-message">您的购物车空空如也.....</p>')
				}
			},
			error:function(){

			}
		})
	}
	
}

$(function(){
	page.init();
})