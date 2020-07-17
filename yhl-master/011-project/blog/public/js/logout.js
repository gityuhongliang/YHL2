//退出登录
	$('#logout').on('click',function(){
		$.ajax({
			url:'/user/logout',
			type:'get'
		})
		.done(function(data){
			console.log(data)
			if(data.code == 0){ 
				window.location.href='/' //window上面的方法回到根地址
			}
		})
		.fail(function(err){
			alert('退出失败')
		})
	})