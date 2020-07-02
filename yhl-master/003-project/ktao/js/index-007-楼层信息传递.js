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

	//加载图片
	function loadImg(imgUrl,success,error){
		var img = new Image();
		img.onload = function(){
			typeof success == 'function' && success(imgUrl)
		}
		img.onerror = function(){
			typeof error == 'function' && error()

		}
		//模拟网络延迟
		setTimeout(function(){
			img.src =imgUrl
		},500)
		
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

/*焦点区域轮播图逻辑-------------开始*/
	function carouselLazyLoad($elem){
		$elem.item = {};//{0下标:loaded,1下标:loaded} 每加载一个图片记录一次loaded
	      				//判断有没有loaded 如果有就不运行了
		$elem.totalLoadedNum = 0; 
		$elem.totalNum = $coursel.find('.carousel-img').length; //拿到图片
		$elem.fnload =null //匿名函数不能移除所以赋值fnload等于匿名函数
		//1.开始加载
		$elem.on('coursel-show',$elem.fnload = function(ev,index,elem)/*下标，DOM节点*/{
			if (!$elem.item[index]) {
				$elem.trigger('coursel-load',[index,elem])
			}
		})
		//2.执行加载
		$elem.on('coursel-load',function(ev,index,elem){
			var $this = $(elem);
			var $img = $this.find('.carousel-img');
			$img.each(function(){
				var $img =$(this)  //利用each方法拿到每一张图片
				var imgUrl = $img.data('src');	
				loadImg(imgUrl,function(imgUrl){
					$img.attr('src',imgUrl)
				},function(){
					$img.attr('src','img/todays-carousel/placeholder.png')
				})

				//图片加载完毕
				$elem.item[index]='loaded';
				$elem.totalLoadedNum++;//运行完加1
				//判断是否所有图片加载完毕，如果加载完毕则移除监听事件
				if($elem.totalLoadedNum == $elem.totalNum){
				// $elem.off('coursel-show',fnload)//移除监听事件
				$elem.trigger('coursel-loaded')//自定义事件
				}
			})
			
		})
		//3.加载完毕
		$elem.on('coursel-loaded',function(){ //监听上面的自定义事件 调用方法移除coursel-show监听事件
			$coursel.off('coursel-show',$elem.fnload)//移除监听事件
		})
	}
	var $coursel = $('.focus .carousel-wrap');
		carouselLazyLoad($coursel)
		$coursel.coursel({})
/*焦点区域轮播图逻辑-------------结束*/

/*今日热销区域逻辑-------------开始*/
	var $todaysCoursel = $('.todays .carousel-wrap');
	carouselLazyLoad($todaysCoursel)
	$todaysCoursel.coursel({})
/*今日热销区域逻辑-------------结束*/
/*楼层区域区域逻辑-------------开始*/
	//楼层图片懒加载
	
	var $floor = $('.floor');
	//监听面板显示事件
	$floor.on('tab-show',function(ev,index,elem){
		console.log(index,elem)
	})
	$floor.tab({})
/*楼层区域区域逻辑-------------结束*/
 })(jQuery);