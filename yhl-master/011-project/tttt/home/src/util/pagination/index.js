;(function($){
	function Pagination($elem){
		this.$elem = $elem;
	}
	Pagination.prototype = {
		constructor:Pagination,
		
		render:function(options){
			
		}
	}

	Pagination.DEFAULT = {
		range:3
	}
	$.fn.extend({
		pagination:function(fn,options){
			// console.log(this) this 是一个jquery对象
			return this.each(function(){
				// console.log(this) this 是一个DOM节点
				var $this = $(this);
				var pagination = $this.data('pagination')
				//单例模式
				if(!pagination){
					var pagination = new Pagination($this);
					$this.data('pagination',pagination)
				}
				//合并参数
				options = $.extend({},Pagination.DEFAULT,options)
				if(typeof pagination[fn] == 'function'){
					pagination[fn](options)
				}
			})
		}
	})
})(jQuery)