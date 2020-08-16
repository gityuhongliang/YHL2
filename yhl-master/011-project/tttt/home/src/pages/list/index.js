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
		category:_util.getParamsFromUrl('categoryId'),
		//通过地址参数中携带的搜索值获取数据
		keyword:_util.getParamsFromUrl('keyword'),
		//通过地址参数中page获取数据没有携带默认是1
		page:_util.getParamsFromUrl('page') || 1,
		//价格排序参数
		orderBy:_util.getParamsFromUrl('orderBy') || 'default'
	},
	init:function(){
		this.paginationBox =$('.pagination-box')
		//1.加载列表页商品数据
		this.loadProductsList()
		//2.绑定事件
		this.bindEvent()
		//3.初始化分页器
		this.initPagination()
	},
	initPagination:function(){
		var _this = this
		console.log(this.productsListParams.page)
		//初始化
		this.paginationBox.pagination()
		//监听自定义事件获取最新页码
		this.paginationBox.on('page-change',function(ev,page){
			//让this本来获取的页码等于监听来的最新页码
			_this.productsListParams.page=page
			//调用方法构建页面和分页器
			_this.loadProductsList()

		})
	},
	loadProductsList:function(){
		var _this= this
		api.getProductsList({
			data:this.productsListParams,
			success:function(products){
				console.log(products)
				if (products.list.length>0) {//list是空的
					var html =_util.render(tpl,products)
					$('.product-list-box').html(html)
				}else{
					$('.product-list-box').html('<p class= "empty-message">您查看的商品不存在</p>')
				}
				//构建分页器结构
				_this.paginationBox.pagination('render',{
					current:products.current,
					pageSize:products.pageSize,
					total:products.total,
				});
					
			}
		})
	},
	bindEvent:function(){
		var _this= this

		$('.sort-item').on('click',function(){
			//默认排序
			var $this= $(this);
			
			if($this.hasClass('default')){//判断有default属性的
				//如果当前就是选中状态则不需要重新排序
				if($this.hasClass('active')){
						return 
				}
				//选中当前状态取消兄弟元素状态
				$this.addClass('active') //添加属性active
				.siblings('.sort-item') //找到它的兄弟元素
				.removeClass('active') //删除兄弟元素的状态
				//更新排序参数
				_this.productsListParams.orderBy ='default'
			}
			//按价格排序
			else if ($this.hasClass('price')) {//判断有price属性的
				//选中当前状态取消兄弟元素状态
				$this.addClass('active')  //添加属性active
				.siblings('.sort-item') //找到它的兄弟元素
				.removeClass('active')  //删除兄弟元素的状态
				//价格按降序排序
				if ($this.hasClass('asc')) {
					//选中价格降序状态
					$this.addClass('desc') //添加降序属性
					.removeClass('asc') //删除升序属性
					//更新排序参数
					_this.productsListParams.orderBy ='price_desc'
				}
				//价格按升序排序
				else if($this.hasClass('desc')){ //判断有desc属性的
					//选中价格升序降序状态
					$this.addClass('asc') //添加升序属性
					.removeClass('desc') //删除降序属性
					//更新排序参数
					_this.productsListParams.orderBy = 'price_asc'
				}
			}
				console.log(_this.productsListParams)
				//更新参数重新获取列表数据
				_this.productsListParams.page = 1
				_this.loadProductsList() //调用上面方法获取更新后的数据
		})
	}
	
}

$(function(){
	page.init();
})