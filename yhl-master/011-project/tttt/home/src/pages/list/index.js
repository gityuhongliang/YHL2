require('pages/common/nav')
require('pages/common/search')
require('pages/common/footer')
require('./index.css');

var _util = require('util');
var api = require('api');
var tpl = require('./index.tpl');

var page = {
	//把多个参数集合在一个对象中
	productsListParams:{
		//通过地址参数中分类ID获取数据
		category:_util.getParamsFromUrl('categoryId'),
		//通过地址参数中携带的搜索值获取数据
		keyword:_util.getParamsFromUrl('keyword'),
		//通过地址参数中page获取数据没有携带默认是1
		page:_util.getParamsFromUrl('page') || 1,
		//价格排序参数
		ordeBy:_util.getParamsFromUrl('ordeBy') || 'default'
	},
	init:function(){
		//1.加载列表页商品数据
		this.loadProductsList()
	},
	loadProductsList:function(){
		api.getProductsList({
			data:this.productsListParams,
			success:function(products){
				console.log(products)
				if (products.list.length>0) {
					var html =_util.render(tpl,products)
					$('.product-list-box').html(html)
				}else{
					$('.product-list-box').html('<p class= "empty-message">您查看的商品不存在</p>')
				}
				
					
			}
		})
	}
	
}

$(function(){
	page.init();
})