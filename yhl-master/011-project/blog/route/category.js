const express = require('express')
const route = express.Router()  
const UserModel = require('../module/user.js')
const hmac = require('../util/hmac.js')

//管理员权限验证
route.use('/',(req,res,next)=>{
	if(req.userInfo.isAdmin){
		next()
	}else{
		res.send('<h1>请使用管理员账号登录!</h1>')
	}
})


//显示后台管理员首页
route.get('/',(req,res)=>{
	res.render('admin/category_list',{
		userInfo:req.userInfo
	})
})
//显示新增分类页面
route.get('/add',(req,res)=>{
	res.render('admin/category_add',{
		userInfo:req.userInfo
	})
})




module.exports = route