const express = require('express')
const route = express.Router()  
const UserModel = require('../module/user.js')
const CategoryModel = require('../module/category.js')
const hmac = require('../util/hmac.js')
const pagination = require('../util/pagination.js')

//管理员权限验证
route.use('/',(req,res,next)=>{
	if(req.userInfo.isAdmin){
		next()
	}else{
		res.send('<h1>请使用管理员账号登录!</h1>')
	}
})


//显示分类管理页面
route.get('/',(req,res)=>{
	const options ={
		page:req.query.page / 1 ,
		model:CategoryModel,
		query:{},
		projection:'-__v',
		sort:{order:1}
	}
	pagination(options)
	.then(result=>{
		console.log(result.pages);
		res.render('admin/category_list',{
			userInfo:req.userInfo,
			categories:result.docs,
			page:result.page,
			list:result.list,
			pages:result.pages,
			url:'/category'
		})
	})
	.catch(err=>{
		console.log(err);
	})
	
})
//显示新增分类页面
route.get('/add',(req,res)=>{
	res.render('admin/category_add',{
		userInfo:req.userInfo
	})
})


// 处理新增分类路由

route.post('/add',(req,res)=>{
	//获取参数
	let { name,order } = req.body
	//给order设置默认值
	console.log(name,order)
	if(!order){
		order = 0
	}
	//查询集合进行同名验证
	CategoryModel.findOne({name:name})
	.then(category=>{
		if (category) {//同名不能插入分类
			res.render('admin/err',{
				userInfo:req.userInfo,
				message:'该分类已经存在',
				url:'/category/add'
			})
		}else{//没有同名可以插入分类
			CategoryModel.insertMany({
				name,
				order
			})
			.then(data=>{
				res.render('admin/ok',{
					userInfo:req.userInfo,
					message:'添加分类成功',
					url:'/category'
				})
			})
			.catch(err=>{
				res.render('admin/err',{
					userInfo:req.userInfo,
					message:'操作数据库失败，请稍后再试'
				})
			})
		}
	})
	.catch(err=>{
		res.render('admin/err',{
			userInfo:req.userInfo,
			message:'操作数据库失败，请稍后再试'
		})
	})

})



module.exports = route