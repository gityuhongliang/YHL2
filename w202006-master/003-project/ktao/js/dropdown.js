/*
* @Author: Chen
* @Date:   2020-05-28 15:51:57
* @Last Modified by:   Chen
* @Last Modified time: 2020-05-28 17:14:18
*/
;(function($){
	function Dropdown($elem,options){
		//1.罗列属性
		this.$elem = $elem;
		this.options = options;
		this.$layer = this.$elem.find('.dropdown-layer');
		this.active = this.$elem.data('active') + '-active';
		this.time=null;
		//2.初始化
		this.init()
	}
	Dropdown.prototype = {
		constructor:Dropdown,
		init:function(){
			//1.初始化显示隐藏插件
			this.$layer.showHide(this.options);
			//2.监听显示隐藏事件
			this.$layer.on('show shown hide hidden',function(ev){
				this.$elem.trigger('dropdown-'+ev.type)
			}.bind(this));
			//点击事件显示隐藏
			if (this.options.eventName =='click') {
				this.$elem.on('click',function(ev){
					ev.stopPropagation(); //阻止事件冒泡
					this.show()
				}.bind(this))
				$(document).on('click',function(){
					this.hide();
				}.bind(this))
			}else{
				//3.绑定事件
				this.$elem.hover($.proxy(this.show,this),$.proxy(this.hide,this));
			}

			
		},
		show:function(){
			//快速划过显示事件
			this.time=setTimeout(function(){
				this.$layer.showHide('show');
				//显示时添加类
				this.$elem.addClass(this.active);
			}.bind(this),this.options.delay)
		},
		hide:function(){
			clearTimeout(this.time)
			this.$layer.showHide('hide');
			//隐藏时删除类
			this.$elem.removeClass(this.active);
		}
	}

	Dropdown.DEFAULT = {
		js:true,
		mode:'fade',
		delay:200,
		eventName:''
	}


	$.fn.extend({
		dropdown:function(options){
			//1.实现隐士迭代和链式调用
			return this.each(function(){
				var $elem = $(this);
				//利用面向对象完成下拉菜单功能
				options = $.extend({},Dropdown.DEFAULT,options);
				new Dropdown($elem,options)
			})
		}
	})
})(jQuery);