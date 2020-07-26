;(function($){

	$.fn.extend({
		pagination:function(options){
			var $elem = $(this);
			$elem.on('click','a',function(){
				var $this = $(this)
				//1.获取当前页
				
				var currentPage =$elem.find('.active a').html()/1
				//2.根据当前页码计算出具体页码
				var lebelText = $this.attr('aria-label')
				var page = 1;
				if(lebelText == 'Next'){
					page = currentPage + 1
				}else if(lebelText == 'Previous'){
					page = currentPage - 1
				}else{
					page = $this.html()/1
				}
				console.log(page)
				//3.发送ajax请求
				$.ajax({
					url:options.url+'?page='+page,
					type:'GET',
					dataType:'json'
				})
				.done(function(result){
					console.log(result)
					if (result.code == 0) {
						$elem.trigger('get-data',result.data)
					}
				})
				.fail(function(err){
					console.log(err)
				})
			})
		}
	})
})(jQuery)