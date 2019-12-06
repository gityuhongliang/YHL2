/*
	obj 要改变的是那个元素
	attr 要改变的是那个属性
	target 要将该属性的值改到多少
*/
function animate(obj,attr,target){  //匀速
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var iSpeed = 0;
		var current = parseFloat(getComputedStyle(obj,false)[attr]);
		if(attr == 'opacity'){
			current = Math.round(current * 100);
		}
		if(current < target){
			iSpeed = 8;
		}else{
			iSpeed = -8;
		}
		if( Math.abs(target - current) < Math.abs(iSpeed)){
			if(attr == 'opacity'){
				obj.style[attr] = target/100;
			}else{
				obj.style[attr] = target + 'px';
			}
			clearInterval(obj.timer);
		}else{
			if(attr == 'opacity'){
				obj.style[attr] = (current + iSpeed)/100;
			}else{
				obj.style[attr] = current + iSpeed + 'px';
			}
			
		}
	},30);
} 
function animate2(obj,attr,target){   //减速
		clearInterval(obj.time)
		obj.time=setInterval(function(){
		var ispeed =0;
			var current=parseFloat(getComputedStyle(obj,false)[attr])
			// console.log(current);
			if (attr == 'opacity') {
				current=Math.round(current*100);
			}
			
			ispeed=(target-current)/10
			// if(ispeed>0){
			// 	ispeed=Math.ceil(ispeed)
			// }else{
			// 	ispeed=Math.floor(ispeed)
			// }
			ispeed>0 ? ispeed=Math.ceil(ispeed) : ispeed=Math.floor(ispeed);
			if(!ispeed){  //结束条件 因为速度的值总会为0所以用速度值来当作if判断关闭定时器条件 
						  //因为0布尔值为false 所以用！改变它的布尔值 让它进入
				clearInterval(obj.time)
			}else{
				if (attr == 'opacity') {
					obj.style[attr]=(current+ispeed)/100
				}else{
					obj.style[attr]=current+ispeed+'px';
				}
			}
			
		},30)
	}


function animate3(obj,attr,target,islinear){   //综合：匀速true/减速false
		//判断如果不传第四个参数的话，默认执行匀速动画
		if(islinear==undefined){ 
			islinear=true
		}
		clearInterval(obj.time)
		obj.time=setInterval(function(){
			var iSstop =false//此变量是为了减速动画判断中止条件		
			var iSpeed =0;
			var current=parseFloat(getComputedStyle(obj,false)[attr])
			// console.log(current);
			if (attr=='opacity') {
				current=Math.round(current*100);
			}
			//通过if判断isLinear的值，决定执行什么动画
			if(islinear){
				//匀速动画
				if(current<target){//决定匀速动画的速度
					iSpeed=6;
				}else{
					iSpeed=-6;
				}
				if (Math.abs(target-current) < Math.abs(iSpeed)) {  //匀速动画的中止条件
					if (attr == 'opacity') {
						obj.style[attr]=target/100;
					} else{

						obj.style[attr]=target+'px';
					}
					iSstop=true
				}
			}else{ 
				//减速动画
				iSpeed=(target-current)/10
				//决定减速动画的速度
				iSpeed>0 ? iSpeed=Math.ceil(iSpeed) : iSpeed=Math.floor(iSpeed);
				if(!iSpeed){   //匀速动画的中止条件 
					iSstop=true
				}
			}
			if (iSstop) { //判断是否中止动画
				clearInterval(obj.time)
			}else{
			
				if (attr == 'opacity') {
					obj.style[attr]=(current+iSpeed)/100
				}else{
					obj.style[attr]=current + iSpeed + 'px';
				}
			}
		},30)
	}

	function animate4(obj,attr,target,islinear,endFn){ //链式和多值 
		//判断如果不传第四个参数的话，默认执行匀速动画
		if(islinear==undefined){ 
			islinear=true
		}
		clearInterval(obj.time)
		obj.time=setInterval(function(){
			var iSstop =false//此变量是为了减速动画判断中止条件		
			var iSpeed =0;
			var current=parseFloat(getComputedStyle(obj,false)[attr])
			// console.log(current);
			if (attr=='opacity') {
				current=Math.round(current*100);
			}
			//通过if判断isLinear的值，决定执行什么动画
			if(islinear){
				//匀速动画
				if(current<target){//决定匀速动画的速度
					iSpeed=6;
				}else{
					iSpeed=-6;
				}
				if (Math.abs(target-current) < Math.abs(iSpeed)) {  //匀速动画的中止条件
					if (attr == 'opacity') {
						obj.style[attr]=target/100;
					} else{

						obj.style[attr]=target+'px';
					}
					iSstop=true
				}
			}else{ 
				//减速动画
				iSpeed=(target-current)/10
				//决定减速动画的速度
				iSpeed>0 ? iSpeed=Math.ceil(iSpeed) : iSpeed=Math.floor(iSpeed);
				if(!iSpeed){   //匀速动画的中止条件 
					iSstop=true
				}
			}
			if (iSstop) { //判断是否中止动画
				clearInterval(obj.time)
				if (typeof endFn == 'function') {
					endFn();
				}
		
			}else{
			
				if (attr == 'opacity') {
					obj.style[attr]=(current+iSpeed)/100
				}else{
					obj.style[attr]=current + iSpeed + 'px';
				}
			}
		},30)
	}


function getScrollTop(){
	return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
}
function getScrollLeft(){
	return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
}