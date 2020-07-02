;(function($){
	//缓存
	cache = {
		data:{},
		count:0,
		addData:function(key,val){
			this.data[key] = val;
			this.count++;
		},
		getData:function(key){
			return this.data[key]
		}
	}





	function Search($elem,options){
		//1.罗列属性
		this.$elem = $elem;
		this.options = options;
		// console.log(this)
		this.$searchForm =this.$elem.find('.search-form')
		this.$searchInput =this.$elem.find('.search-input')
		this.$searchButton =this.$elem.find('.search-button')
		this.$searchLayer =this.$elem.find('.search-layer')
		this.$isLoadeHtml= false;
		this.time=null;
		this.jqXHR=null;
		// console.log(this.$searchButton)

		//2.初始化
		this.init()
		// console.log(this.options);
		if (this.options.autocomplete){
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
			//初始化显示隐藏插件
			this.$searchLayer.showHide(this.options)
			//1.监听输入框输入事件
			//快速划过延时获取数据
			this.$searchInput.on('input',function(){
				if(this.options.delayGetData){
					clearTimeout(this.time);
					this.time =setTimeout(function(){
						this.getData()
					}.bind(this),this.options.delayGetData)
				}else{
					this.getData()
				}
			}.bind(this))
			//2.监听点击页面其他部分，隐藏搜索下拉层事件
			$(document).on('click',function(){
				3//调用hide方法隐藏下拉层
				this.hideLayer();
			}.bind(this))
			//4.点击搜索框阻止事件冒泡
			this.$searchInput.on('click',function(ev){
				ev.stopPropagation();
			})
			//5.监听获取焦点显示下拉事件
			this.$searchInput.on('focus',function(ev){
				if (this.getInputval()){
					this.showLayer();
				}
			}.bind(this))
			//6.事件代理形式监听事件，点击每一项提交数据
			var _this =this;
			this.$elem.on('click','.search-item',function(){
				//1.获取当前点击项的值
				var val =$(this).html();
				//2.把数据赋给输入框
				_this.setInputVal(val)
				//3.提交数据
				_this.sumbit()
			})
		},
		getData:function(){
			//发送jsonp请求
			console.log(1)
			////如果输入框值是空不发送请求
			if(this.getInputval() ==''){
				this.hideLayer();
					return;
				}
				// console.log(this.options.url+this.getInputval())
				//终止之前的请求，获取最新数据
			if (this.jqXHR) {
				this.jqXHR.abort()
			}
			//判断是否有缓存 
			if(cache.getData(this.getInputval())){
				var cacheData = cache.getData(this.getInputval())
				return;
			}
			console.log(2222);
			//发送请求获取数据
			this.jqXHR = $.ajax({
				url:this.options.url+this.getInputval(),
				dataType:'jsonp',
				jsonp:'callback'
			})

			.done(function(data){
				this.$elem.trigger('getSearchData',[data])
				//将获取的数据缓存下来
				cache.addData(this.getInputval(),data)
			}.bind(this))

			.fail(function(err){
				// console.log(err);
				this.$elem.trigger('getNoSearchData')
			})

			.always(function(){
				this.jqXHR=null;
			})
		},
		appendHtml:function(html){
			//将html内容插入到下拉层
			this.$searchLayer.html(html)
			this.isLoadeHtml =!!html;
		},
		showLayer:function(){
			if (!this.isLoadeHtml) return
			//显示下拉层
			this.$searchLayer.showHide('show');
		},
		hideLayer:function(){
			this.$searchLayer.showHide('hide');

		},
		setInputVal:function(val){
			this.$searchInput.val(val);
		}
	};
	//如果不传递参数则使用默认配置信息
	Search.DEFAULT = {
		autocomplete:true,//是否显示下拉层
		url:'https://suggest.taobao.com/sug?code=utf-8&q=',
		delayGetData:200
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
		search:function(options,val){
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