/*
* @Author: Chen
* @Date:   2020-05-25 17:27:55
* @Last Modified by:   Chen
* @Last Modified time: 2020-05-28 17:12:18
*/
;(function($){
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
					html +='<li><a href="'+data[i].url+'">'+data[i].name+'</a></li>'
				}
				console.log($dropdownLayer)
				//模拟网络延迟加载
				setTimeout(function(){
					$dropdownLayer.html(html)
					//数据加载
					$this.data('isLoaded',true)
				},500)
				
			})
		}
	})
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
/*焦点区域分类列表逻辑-------------结束*/
 })(jQuery);