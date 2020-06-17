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
	var $cousrsel = $('.focus .carousel-wrap');
	var item = {};  //{0下标:loaded,1下标:loaded} 每加载一个图片记录一次loaded
	      			//判断有没有loaded 如果有就不运行了
	var totalLoadedNum = 0; //
	var totalNum = $cousrsel.find('.carousel-img').length; //拿到图片
	var fnload =null //匿名函数不能移除所以赋值fnload等于匿名函数
	$cousrsel.on('coursel-show',fnload = function(ev,index,elem)/*下标，DOM节点*/{
		if (!item[index]) {  //判断下标有没有loaded 取非没有就运行 如果有就不运行了 
			console.log('will load img ...')
			var $elem = $(elem);
			var $img = $elem.find('.carousel-img');
			var imgUrl = $img.data('src');
			// console.log(imgUrl)
			// $img.attr('src',imgUrl)
			// 直接赋值图片地址缺点：
			// 1.网络波动容易出现卡顿
			// 2.错误图片地址不容易处理
			/*
			var img = new Image();
			img.onload = function(){
				$img.attr('src',imgUrl)
			}
			img.onerror = function(){
				$img.attr('src','img/focus-carousel/placeholder.png')
			}
			img.src =imgUrl
			*/
			loadImg(imgUrl,function(imgUrl){
				$img.attr('src',imgUrl)
			},function(){
				$img.attr('src','img/focus-carousel/placeholder.png')
			})
			//图片加载完毕
			item[index]='loaded';
			totalLoadedNum++;//运行完加1
			//判断是否所有图片加载完毕，如果加载完毕则移除监听事件
			if(totalLoadedNum == totalNum){
				$cousrsel.off('coursel-show',fnload)//移除监听事件
			}
		
		}
		
	})
		$cousrsel.coursel({})
/*焦点区域轮播图逻辑-------------结束*/
 })(jQuery);
 