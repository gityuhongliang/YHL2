require('pages/common/nav')
require('pages/common/search')
var _side = require('pages/common/side')
require('pages/common/footer')
require('./index.css');

var _util = require('util');
var api = require('api');
var tpl = require('./index.tpl');

var page = {
	init:function(){
		//侧边栏选中状态
		this.renderSide()
		//获取登录用户信息
		this.loadUserInfo()
	},
	renderSide:function(){
		_side.render('user-center')
	},
	loadUserInfo:function(){
		api.getUserInfo({
			success:function(data){
				var html = _util.render(tpl,data)
				console.log(tpl)
				$('.side-content').html(html)
			}
		})
	}
}

$(function(){
	page.init();
})