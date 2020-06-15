;(function($){
	function init($elem){
		this.$elem = $elem;
		this.currentX = parseFloat(this.$elem.css('left'));
		this.currentY = parseFloat(this.$elem.css('top'));
	}
	function to(x,y,callback){
		x =(typeof x == 'number') ? x : this.currentX;
		y =(typeof y == 'number') ? y : this.currentX;
		//每次移动前判断是否到达目标坐标
		//防止多次运行
		if(this.currentX == x && this.currentY == y){
			return;
		}
		//移动前执行事件
		this.$elem.trigger('move')
		typeof callback == 'function' && callback()
		//更新坐标
		this.currentY= x;
		this.currentX= y;
	}
	function Slient($elem){
		init.call(this,$elem);
		console.log(this.currentX,this.currentY)
	}
	Slient.prototype ={
		constructor:Slient,
			to:function(x,y){
				to.call(this,x,y,function(){
					this.$elem.css({
						left:x,
						top:y
				})
				//移动后执行事件
				this.$elem.trigger('moved')
				}.bind(this))
				console.log(this.currentX,this.currentY)
			},
			x:function(x){
				this.to(x)
			},
			y:function(y){
				this.to(null,y) //因为直接修改x和y参数传参进来改变的都是x(left)轴的参数
								//无法判断是x的参数还是y的参数,做不到只移动x(left)轴或者y(top)轴
			}
	}
	function Js($elem){
		init.call(this,$elem);
		console.log(this.currentX,this.currentY)
	}
	Js.prototype ={
		constructor:Js,
			to:function(x,y){
				to.call(this,x,y,function(){
					this.$elem
					.stop()
					.animate({
						left:x,
						top:y
					},function(){
						//移动后执行事件
						this.$elem.trigger('moved')
					}.bind(this))
				}.bind(this))
				console.log(this.currentX,this.currentY)
			},
			x:function(x){
				this.to(x);
			},
			y:function(y){
				this.to(null,y) //因为直接修改x和y参数传参进来改变的都是x(left)轴的参数
								//无法判断是x的参数还是y的参数,做不到只移动x(left)轴或者y(top)轴
			}
	}


	//如果不传递配置信息则默认有配置信息
	var DEFAULT = {
		js:true,
	}

	//获取移动方法
	function getmove($elem,options){
		var move=null;
		if (options.js) {
			move = new Js($elem);//生成实例对象初始化
		}else{
			move = new Slient($elem);
		}
		return move;   //返回出去
	}

	$.fn.extend({
		move:function(options,n1,n2){
			//1.实现隐式迭代和链式调用
			return this.each(function(){
				var $elem = $(this);
				var moveObj = $elem.data('moveObj');
				//单例模式
				if(!moveObj){
					options = $.extend({},DEFAULT,options);
					//2.获取显示隐藏的方法
					moveObj = getmove($elem,options);
					//将显示隐藏方法存到当前dom节点上
					$elem.data('moveObj',moveObj);
				}
				//判断当传入的参数是方法时,则调用该方法
				if(typeof moveObj[options] == 'function'){
					//调用显示隐藏方法时必须传入jQuery对象
					moveObj[options]();
				}
			})
		}
	})
})(jQuery);