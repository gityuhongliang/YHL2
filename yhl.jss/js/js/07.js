// 函数
			function fnc() {
				var oBox= document.getElementById('box'); // 定义同时初始化，分开写就是var=oBox ，oBox=document.getElementById('box')
				oBox.style.width='200px';
				oBox.style.height='200px';
				oBox.style.backgroundColor='blue'
			}		
			function fpx() {
				var oBox= document.getElementById('box');
				oBox.style.width='100px';
				oBox.style.height='100px';
				oBox.style.backgroundColor='red'
			}
			function fn() {
				var oBox= document.getElementById('box2');
				oBox.style.width='200px';
				oBox.style.height='200px';
				oBox.style.backgroundColor='yellow'
			}
			fn();