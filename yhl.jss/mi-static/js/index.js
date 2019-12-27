handleCarousel()
handleCate()
handleCountent()
handleFlashProductTab()
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
		var date=aCateListData[index];
		var html='<ul>'
		for(var i=0;i<date.length;i++){
			html += 	'<li>'
			html +=			'<a href="'+date[i].url+'">'						
			html +=			'<img src="'+date[i].img+' alt="">'
			html +=			'<span>'+date[i].name+'</span>'
			html +=			'</a>'
			html += 	'<li>'
		}
			html +=  '</ul>'
			aCatecontent.innerHTML=html
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
		
		var allSecound = overTime/1000
		if (allSecound < 0) {
			clearInterval(time)
			allSecound=0
		}
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
function handleFlashProductTab(){
	var aElecTab =document.querySelectorAll('.elec .tab-item');
	// var 
	for(var i = 0; i<aElecTab.length;i++){
		aElecTab[i].index=i
		aElecTab[i].onmoWuseenter=function(){
			for(var j=0;j<aElecTab.length;j++){
				aElecTab[j].className='tab-item'
			}
			this.className='tab-item tab-item-active'
			loadTab(this.index)
		}
	}
	function loadTab(index){
		var data =aElecListData[index]
		console.log(data)
	}
}