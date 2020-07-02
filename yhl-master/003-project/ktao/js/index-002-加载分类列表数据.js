/*
* @Author: Chen
* @Date:   2020-05-25 17:27:55
* @Last Modified by:   Chen
* @Last Modified time: 2020-05-28 17:12:18
*/
;(function($){
	//共通函数
	//只加载一次html结构函数
	function loadHtmlOnce($elem,callBack){
		var url = $elem.data('load');
		//获取数据
		$.getJSON(url,function(data){
			typeof callBack == 'function' && callBack($elem,data)
		})
	}











/*顶部导航逻辑--------------------开始*/
	var $dropdown = $('.top .dropdown');
	$dropdown.dropdown({
		js:true,
		mode:'slideDownUp'
	});
	//监听显示隐藏事件
	$dropdown.on('dropdown-show dropdown-shown dropdown-hide dropdown-hidden',function(ev){
		// console.log(ev.type);
		if (ev.type == 'dropdown-show') {
			// var $this =$(this);
			// var $dropdownLayer =$this.find('.dropdown-layer');
			// var url = $this.data('load');
			// //获取数据
			// $.getJSON(url,function(data){
			// 	var html =''
			// 	//动态加载数据
			// 	for(var i=0; i<data.length; i++){
			// 		// console.log(data[i])
			// 		// <li><a href="'+data[i].url+'">'+data[i].name+'</a></li>
			// 		html +='<li><a href="'+data[i].url+'">'+data[i].name+'</a></li>'
			// 	}
			// 	console.log($dropdownLayer)
			// 	//模拟网络延迟加载
			// 	setTimeout(function(){
			// 		$dropdownLayer.html(html)
			// 		//数据加载
			// 		$this.data('isLoaded',true)
			// 	},500)
			// })
			loadHtmlOnce($(this),buildTopLayer)
		}
		
			
	})
	//生成顶部下拉菜单
	function buildTopLayer($elem,data){
		var html =''
		//动态加载数据
		for(var i=0; i<data.length; i++){
			// console.log(data[i])
			// <li><a href="'+data[i].url+'">'+data[i].name+'</a></li>
			html +='<li><a href="'+data[i].url+'">'+data[i].name+'</a></li>'
		}
		// console.log($dropdownLayer)
		//模拟网络延迟加载
		setTimeout(function(){
			$elem.find('.dropdown-layer').html(html)
			//数据加载
			$elem.data('isLoaded',true)
		},500)
	}
/*顶部导航逻辑--------------------结束*/
/*搜索区域逻辑--------------------开始*/
	var $search = $('.header .search');
		$search.search({
			js:true,
			mode:'slideDownUp'
		});
		$search.on('getSearchData',function(ev,data){
			var $elem =$(this)
			//1.生成html
			var html=''
			for(var i=0;i<data.result.length;i++){
				html += '<li class="search-item">'+data.result[i][0]+'</li>'
			}
			//2.将html内容插入到下拉层
			// console.log(html)
			// this.$searchLayer.html(html)
			$elem.search('appendHtml',html);
			//3.显示下拉层
			// this.$searchLayer.showHide('show');
			if (html =='') {
				$elem.search('hideLayer');
				
			}else{
				$elem.search('showLayer');
			}
		});
		$search.on('getNoSearchData',function(){
			$elem.search('appendHtml','');
			$elem.search('hideLayer');
		});
		//生成下拉层
/*搜索区域逻辑--------------------结束*/
/*焦点区域分类列表逻辑-------------开始*/
	var $categoryDropdown = $('.focus .dropdown');
		$categoryDropdown.dropdown({
		js:true,
		mode:'slideLeftRight'
	});
		//加载分类列表数据
		$categoryDropdown.on('dropdown-show dropdown-shown dropdown-hide dropdown-hidden',function(ev){
			//加载数据显示下拉层
			if(ev.type == 'dropdown-show'){
				/*
				var $this =$(this);
				var $dropdownLayer =$this.find('.dropdown-layer');
				var url = $this.data('load');
				//获取数据
				$.getJSON(url,function(data){
					var html =''
					//动态加载数据
					for(var i=0; i<data.length; i++){
						// console.log(data[i])
						// <li><a href="'+data[i].url+'">'+data[i].name+'</a></li>
						html +='<dl class="category-details">'
						html +='		<dt class="category-details-title fl">'
						html +='			<a href="#" class="category-details-title-link">电视</a>'
						html +='		</dt>'
						html +='		<dd class="category-details-item fl">'
						for(var j=0;j<data[i].items.length;j++){
						html +='			<a href="#" class="link">'+data[i].items[j]+'</a>'
					}
						html +='		</dd>'
						html +='	</dl>'
					}
					console.log($dropdownLayer)
					//模拟网络延迟加载
					setTimeout(function(){
						$dropdownLayer.html(html)
						//数据加载
						$this.data('isLoaded',true)
					},500)
					
				})
			*/
				loadHtmlOnce($(this),buildCategoryLayer)
			}
			
		})
	//生成分类列表下拉菜单
	function buildCategoryLayer($elem,data){
		var html =''
		//动态加载数据
		for(var i=0; i<data.length; i++){
			// console.log(data[i])
			// <li><a href="'+data[i].url+'">'+data[i].name+'</a></li>
			html +='<dl class="category-details">'
			html +='		<dt class="category-details-title fl">'
			html +='			<a href="#" class="category-details-title-link">电视</a>'
			html +='		</dt>'
			html +='		<dd class="category-details-item fl">'
			for(var j=0;j<data[i].items.length;j++){
			html +='			<a href="#" class="link">'+data[i].items[j]+'</a>'
		}
			html +='		</dd>'
			html +='	</dl>'
		}
		//模拟网络延迟加载
		setTimeout(function(){
			$elem.find('.dropdown-layer').html(html)
			//数据加载
			$elem.data('isLoaded',true)
		},500)
	}
/*焦点区域分类列表逻辑-------------结束*/
 })(jQuery);
 