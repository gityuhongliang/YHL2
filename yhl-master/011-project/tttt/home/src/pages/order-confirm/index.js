var _nav = require('pages/common/nav')
require('pages/common/search')
require('pages/common/footer')
require('./index.css');

var _util = require('util');
var api = require('api');
// var modalTpl = require('./modal.tpl');
var shippingTpl = require('./shipping.tpl');
var productTpl = require('./product.tpl');
var _modal = require('./modal.js')
var page = {

	init:function(){
		//事件代理
		this.shippingBox = $('.shipping-box')
		this.productBox = $('.product-box');
		//1.加载地址列表
		this.loadShippingList()
		//2.加载商品列表
		this.loadProductList()
		//3.绑定事件
		this.bindEvent()
	},
	bindEvent:function(){
		//1.点击新增地址弹出新增地址输入框
		this.shippingBox.on('click','.shipping-add',function(){
			_modal.show()
		})
	},
	loadShippingList:function(){
		var html = _util.render(shippingTpl)
		this.shippingBox.html(html)

	},
	loadProductList:function(){
		var _this = this
		api.getOrdersList({
			success:function(data){
				console.log(data)
				if (data.cartList.length > 0) {
					var html = _util.render(productTpl,data)
					_this.productBox.html(html)
				}else{
					_this.productBox.html('<p class="empty-message">您没有添加商品,请去添加商品再结算!!!</p>')
				}
				
				
			},
			error:function(err){
				 _this.productBox.html('<p class="empty-message">获取商品列表失败,请重试!!!</p>')
			}				
		})
	}
}

$(function(){
	page.init();
})