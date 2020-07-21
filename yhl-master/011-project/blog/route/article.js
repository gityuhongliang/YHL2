const express = require('express')
const route = express.Router()  
const UserModel = require('../module/user.js')
const CategoryModel = require('../module/category.js')
const ArticleModel = require('../module/article.js')
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
	res.render('admin/category_add_edit',{
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

//显示编辑分类页面
route.get('/edit/:id',(req,res)=>{
	//获取当前点击哪个数据的id
	const id = req.params.id
	CategoryModel.findById(id)
	.then(category=>{
		// console.log(category);
		res.render('admin/category_add_edit',{
			userInfo:req.userInfo,
			category
		})
	})
	.catch(err=>{
		res.render('admin/err',{
			userInfo:req.userInfo,
			message:'操作数据库失败，请稍后再试'
		})
	})
})

//处理编辑分类逻辑
route.post('/edit',(req,res)=>{
	//1.获取参数
	let { name,order,id } = req.body;
	if(!order){
		order = 0
	}
	//2.查询集合获取该条数据
	CategoryModel.findOne({_id:id})
	.then(category=>{//有相同的name和order不能更改
		console.log(category)
		if (category.name == name && category.order == order) {
			res.render('admin/err',{
				userInfo:req.userInfo,
				message:'数据没有更改,请改动之后再提交'
			})
		}else{//有相同的name同名不能更改
			CategoryModel.findOne({name:name,_id:{$ne:id}})
			.then(result=>{
				if(result){
					res.render('admin/err',{
						userInfo:req.userInfo,
						message:'已有该分类，请改动后再提交'
					})
				}else{
					//可以更新数据
					CategoryModel.updateOne({_id:id},{name,order})
					.then(data=>{
						res.render('admin/ok',{
							userInfo:req.userInfo,
							message:'更新分类成功',
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
		}
	

	})
	.catch(err=>{
		res.render('admin/err',{
			userInfo:req.userInfo,
			message:'操作数据库失败，请稍后再试'
		})
	})

})

//处理删除分类路由
route.get('/detele/:id',(req,res)=>{
	//获取参数
	const id = req.params.id
	console.log(id);
	//通过id查找数据库并删除该记录  
	CategoryModel.deleteOne({_id:id})
	.then(data=>{
		console.log(data)
		res.render('admin/ok',{
			userInfo:req.userInfo,
			message:'删除分类成功',
			url:'/category'
		})
	})
	.catch(err=>{
		console.log(err)
		res.render('admin/err',{
			userInfo:req.userInfo,
			message:'操作数据库失败，请稍后再试'
		})
	})
})

module.exports = route