;(function($){

	$('.del').on('click',function(){
		if (!window.confirm('是否确定删除该记录')) {
			return false
		}
	})
})(jQuery)