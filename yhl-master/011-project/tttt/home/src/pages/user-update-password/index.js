require('pages/common/nav')
require('pages/common/search')
var _side = require('pages/common/side')
require('pages/common/footer')
require('./index.css');

var _util = require('util');
var api = require('api');
var tpl = require('./index.tpl');


//错误提示封装
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
	init:function(){
		//侧边栏选中状态
		this.renderSide()
		//获取登录用户信息
		// this.loadUserInfo()

		this.bingdEvent();


		//获取登录用户信息判断用户是否登陆
		this.loadUserInfo()
	},
	renderSide:function(){
		_side.render('user-update-password')
	},
	bingdEvent:function(){
		//把this(page)存下来
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
	//发送获取用户信息
	loadUserInfo:function(){
		api.getUserInfo({
			
		})
	},
	submint:function(){
		//1.获取数据
		//存到一个对象里面
		var formData = {
			password:$.trim($('[name="password"]').val()),
			repassword:$.trim($('[name="repassword"]').val()),
		}
		//2.验证数据合法性
		var validateFormData = this.validate(formData)
		//3.验证通过发送请求
		if (validateFormData.status) {
			//隐藏错误提示
			formDataMsg.hide()
			
			//发送ajax请求
			api.updatePassword({
				data:{
					password:formData.password
				},
				success:function(data){
					// window.location.href ='/result.html?type=updatePassword'
					_util.goResult('updatePassword')
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
		result.status = true
		return result
	}
	/*
	loadUserInfo:function(){
		api.getUserInfo({
			success:function(data){
				var html = _util.render(tpl,data)
				console.log(tpl)
				$('.side-content').html(html)
			}
		})
	}
	*/
}

$(function(){
	page.init();
})