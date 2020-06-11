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
		$search.search({})
/*搜索区域逻辑--------------------结束*/
})(jQuery);