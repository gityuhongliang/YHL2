handleCarousel()
handleCate()
handleCountent()
function handleCarousel(){
	new Carousel({
		id:'carousel',
		aImg:['images/b1.jpg','images/b2.jpg','images/b3.jpg'],
		width:1226,
		height:460,
		playDuration:5000
	})
}
function handleCate(){
	//获取元素
	var oCatebox = document.querySelector('.cate-box');
	var aCateitem = oCatebox.querySelectorAll('.cate-item');
	var aCatecontent = document.querySelector('.cate-content');
	// console.log(aCatecontent)
	for(var i=0;i<aCateitem.length;i++){
		aCateitem[i].index=i
		aCateitem[i].onmouseenter=function(){

			for(var j=0;j<aCateitem.length;j++){
				aCateitem[j].className='cate-item'
			}
			this.className='cate-item active'
			aCatecontent.style.display='block'
			loadDate(this.index)
		}
	}
	//
	oCatebox.onmouseleave=function(){
		aCatecontent.style.display='none'
		for(var j=0;j<aCateitem.length;j++){
			aCateitem[j].className='cate-item'
		}
	}
	function loadDate(index){
		// console.log(index)
		var date=aLoadCadeList[index];
		for(var i=0;i<date.length;i++){
			var html='<ul>'
			html += 	'<li>'
			html +=			'<a href="'+date[i].url+'">'						
			html +=			'<img src="'+date[i].img+' alt="">'
			html +=			'<span>'+date[i].name+'</span>'
			html +=			'</a>'
			html += 	'<li>'
		}
			html +=  '</ul>'
			aCatecontent.innerHTML=index
	}
}
function handleCountent(){
	var time =0
	var aTime =document.querySelectorAll('.timer-num');
	var today =new Date('2019-12-26 21:05:00');
	var endTimer = today.getTime();
	function fn(){
		var oTime = Date.now()
		var overTime =endTimer-oTime;
		if (oTime = 0) {
			clearInterval(time)
		}
		var allSecound = overTime/1000
		var iHour=parseInt(allSecound/3600);
		var iMinute =parseInt((allSecound % 3600)/60)
		var iSecond =parseInt((allSecound % 3600)%60)
		function to2str(num){
					if (num<10) {
						return '0'+num
					}else{
						return ''+num
					}
				}
		aTime[0].innerHTML=to2str(iHour)
		aTime[1].innerHTML=to2str(iMinute)
		aTime[2].innerHTML=to2str(iSecond)
	}
	setInterval(fn,1000)
	fn()
}
