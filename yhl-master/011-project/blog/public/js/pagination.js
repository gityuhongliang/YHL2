;(function($){

	$.fn.extend({
		pagination:function(options){
			var $elem = $(this);
			$elem.on('click','a',function(){
				var $this = $(this)
				//1.获取当前页
				var currentPage =$elem.find('.active a').html()
				console.log(currentPage)
				//2.根据当前页码计算出具体页码
				//3.发送ajax请求
			})
		}
	})
})(jQuery)