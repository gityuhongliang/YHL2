const express = require('express')
const route = express.Router()  
const UserModel = require('../module/user.js')
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
	res.render('admin/index',{
		userInfo:req.userInfo
	})
})
//显示用户列表
route.get('/users',(req,res)=>{
	// 分页：具体显示哪一页page从前天发送
	//每一页显示几条数据limit = 4
	// 第一页显示1-4 skip (1-1)*4
	// 第二页显示5-8 skip (2-1)*4
	// 第三页显示9-12  skip (3-1)*4
	/*
	let page =req.query.page / 1
	const limit = 4
	if(isNaN(page)){
		page = 1
	}
	// 边界控制
	if(page == 0){
		page = 1
	}
	//跳过几条
	let skip =(page - 1)*limit

	
	//拿到数据库有多少条数据
	UserModel.countDocuments((err,counts)=>{
		let pages = Math.ceil(counts/limit)		
		//生成页码
		let list = []
		for(let  i = 1; i<=pages;i++){
			list.push(i)
		}
		//下一页边界控制
		if (page > pages) {
			page = pages
		}
		//查询数据库获取用户信息
		UserModel.find({},'-password -__v')
		.skip(skip)
		.limit(limit)
		.sort({_id:1})
		.then(users=>{
			// console.log(users)
			res.render('admin/user_list',{
				userInfo:req.userInfo,
				users:users,
				page:page,
				list:list,
				pages:pages
			})
		})
		.catch(err=>{
			console.log(err)
		})
	})
	*/
	const options ={
		page:req.query.page / 1 ,
		model:UserModel,
		query:{},
		projection:'-password -__v',
		sort:{_id:1}
	}
	pagination(options)
	.then(result=>{
		res.render('admin/user_list',{
			userInfo:req.userInfo,
			users:result.docs,
			page:result.page,
			list:result.list,
			pages:result.pages,
			url:'/admin/users'
		})
	})
	.catch(err=>{
		console.log(err);
	})
})





module.exports = route