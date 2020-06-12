;(function($){
	function Search($elem,options){
		//1.罗列属性
		this.$elem = $elem;
		this.options = options;
		// console.log(this)
		this.$searchForm =this.$elem.find('.search-form')
		this.$searchInput =this.$elem.find('.search-input')
		this.$searchButton =this.$elem.find('.search-button')
		// console.log(this.$searchButton)

		//2.初始化
		this.init()
		// console.log(this.options);
		if (this.options.autocomplete){
			console.log(11)
			this.autocomplete()
		};
	}
	Search.prototype = {
		constructor:Search,
		init:function(){
			//1.监听提交数据
			this.$searchButton.on('click',$.proxy(this.sumbit,this));
		},
		sumbit:function(){
			//如果输入框值为空则不提交数据
			if(!this.getInputval()){
				return false
			}
			//数据合法提交数据
			this.$searchForm.trigger('sumbit')
		},
		
		getInputval:function(){
			return $.trim(this.$searchInput.val())
		},
		autocomplete:function(){
		//监听输入框输入事件
			console.log(11)
			this.$searchInput.on('input',$.proxy(this.getData,this))
			
		},
		getData:function(){
			//发送jsonp请求
			////如果输入框值是空不发送请求
			if(this.getInputval() ==''){
					return;
				}
				// console.log(this.options.url+this.getInputval())
				//发送请求获取数据
			$.ajax({
				url:this.options.url+this.getInputval(),
				dataType:'jsonp',
				jsonp:'callback'
			})
			.done(function(data){
				console.log(data);
			})
			.fail(function(err){
				console.log(err);
			})
		}
		
	};
	//如果不传递参数则使用默认配置信息
	Search.DEFAULT = {
		autocomplete:true,
		url:'https://suggest.taobao.com/sug?q='
	}
// https://cread.jd.com/readask/canReadForJSONP.action?my=ebook3&bookIds=&callback=jQuery2272491&_=1591861086717

	// $.fn.extend({
	// 	search:function(options){
	// 		//1.实现隐式迭代和链式调用
	// 		return this.each(function(){
	// 			var $elem = $(this);
	// 			//利用面向对象完成下拉菜单功能
	// 			options = $.extend({},Search.DEFAULT,options);
	// 			search = new Search($elem,options)
	// 		})
	// 	}
	// })
	$.fn.extend({
		search:function(options){
			return this.each(function(){
				var $elem = $(this);
				var search = $elem.data('search');
				if(!search){//单例模式
					options  = $.extend({},Search.DEFAULT,options);
					search = new Search($(this),options);
					$elem.data('search',search);
				}
				if(typeof search[options] == 'function'){
					search[options](val);
				}
			});
		}
	})
})(jQuery);