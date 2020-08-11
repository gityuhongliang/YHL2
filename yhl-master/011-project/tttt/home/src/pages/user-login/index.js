require('pages/common/footer')
require('pages/common/logo')
require('./index.css')

var page = {
	//把this(page)存下来
	init:function(){
		var _this = this
		$('#btn-submit').on('click',function(){
			_this.submint()
		})
		//监听键盘事件提交表单

		$('input').on('keydown',function(ev){
			if(ev.keyCode == 13){ 
				_this.submint()
			}
		})
	},
	//把提交表单的方法抽取出去
	submint:function(){
		//1.获取数据
		//存到一个对象里面
		var formData = {
			username:$.trim($('[name= "username"]').val()),
			password:$.trim($('[name= "password"]').val())
		}
		//2.验证数据合法性
		var validateFormData = this.validate()
		//3.验证通过发送请求
		console.log(formData);
	},
	validate:function(formData){
		var result = {
			status:false,
			msg:''
		}


		return result
	}
}


//调用上面定义的方法 方便管理
$(function(){
	page.init();
})