require('pages/common/footer')
require('pages/common/logo')
require('./index.css')


var _util = require('util')

var api = require('api');


var formDataMsg = {
	show:function(msg){
		$('.error-item')
		.show()
		.find('.error-msg')
		.text(msg)
	},
	hide:function(){
		$('.error-item')
		.hide()
		.find('.error-msg')
		.text('')
	}
}
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
		//监听用户名事件当失去焦点时验证用户名
		$('[name="username"]').on('blur',function(){
			var username = $.trim($(this).val())
			//用户名非空判断
			if (!_util.validate(username,'required')) {
				formDataMsg.show('请输入用户名');
				return 
			}
			//用户名合法性验证
			if (!_util.validate(username,'username')) {
				formDataMsg.show('用户名是以字母开始的3-6位字符');
				return 
			}
			api.checkUsername({
				data:{
					username:username
				},
				success:function(data){
					//隐藏错误提示
					formDataMsg.hide()
				},
				error:function(msg){
					formDataMsg.show(msg);
				}
			})
		})
	},
	//把提交表单的方法抽取出去
	submint:function(){
		//1.获取数据
		//存到一个对象里面
		var formData = {
			username:$.trim($('[name="username"]').val()),
			password:$.trim($('[name="password"]').val()),
			repassword:$.trim($('[name="repassword"]').val()),
			phone:$.trim($('[name="phone"]').val()),
			email:$.trim($('[name="email"]').val()),
		}
		//2.验证数据合法性
		var validateFormData = this.validate(formData)
		//3.验证通过发送请求
		if (validateFormData.status) {
			//隐藏错误提示
			formDataMsg.hide()
			
			//发送ajax请求
			api.register({
				data:formData,
				success:function(data){
					// window.location.href ='/result.html?type=register'
					_util.goResult('register')
				},
				error:function(msg){
					formDataMsg.show(msg);
				}
			})
			
		}else{
			formDataMsg.show(validateFormData.msg);
			
		}
	},
	validate:function(formData){
		var result = {
			status:false,
			msg:''
		}
		//用户名非空判断
		if (!_util.validate(formData.username,'required')) {
			result.msg = '请输入用户名'
			return result
		}
		//用户名合法性验证
		if (!_util.validate(formData.username,'username')) {
			result.msg = '用户名是以字母开始的3-6位字符'
			return result
		}
		//密码非空判断
		if (!_util.validate(formData.password,'required')) {
			result.msg = '请输入密码'
			return result
		}
		//密码合法性验证
		if (!_util.validate(formData.password,'password')) {
			result.msg = '密码是以字母开始的3-6位字符'
			return result
		}
		//两次密码输入一致验证
		if (formData.password != formData.repassword) {
			result.msg = '两次密码输入不一致'
			return result
		}
		//手机号非空判断
		if (!_util.validate(formData.phone,'required')) {
			result.msg = '请输入手机号'
			return result
		}
		//手机号合法性验证
		if (!_util.validate(formData.phone,'phone')) {
			result.msg = '手机号必须是11位数'
			return result
		}
		//邮箱非空判断
		if (!_util.validate(formData.email,'required')) {
			result.msg = '请输入邮箱'
			return result
		}
		//邮箱合法性验证
		if (!_util.validate(formData.email,'email')) {
			result.msg = '邮箱格式不正确'
			return result
		}
		result.status = true
		return result
	}
}


//调用上面定义的方法 方便管理
$(function(){
	page.init();
})