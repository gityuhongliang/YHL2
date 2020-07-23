const express = require('express')

const route = express.Router()

const CategoryModel = require('../module/category.js')

const ArticleModel = require('../module/article.js')

async function getCommonData(){
	//获取顶部分类数据
	const getCategoriesDataPromise = CategoryModel.find({},'name').sort({_id:1})
	const categoriesData  = await getCategoriesDataPromise
	//获取点击排行数据
	const getTopArticlesDataPromise = ArticleModel.find({},'click title').sort({click:-1}).limit(10)
	const topArticles = await getTopArticlesDataPromise
	return {
		categoriesData,
		topArticles
	}
}
 
//显示首页路由
route.get('/', (req, res) => {
	//获取cookie信息进行验证
	/*
	let userInfo = {}
	if(req.cookies.get('userInfo')){
		userInfo = JSON.parse(req.cookies.get('userInfo'))
	}
	*/
	getCommonData()
	.then(result=>{
		const { categoriesData,topArticles } = result
		console.log(topArticles)
		res.render('main/index',{
			userInfo:req.userInfo,
			categoriesData,
			topArticles
		})
	})
	.catch(err=>{
		console.log(err)
	})
	
})


//显示列表页
route.get('/list', (req, res) => {
	//获取cookie信息进行验证
	/*
	let userInfo = {}
	if(req.cookies.get('userInfo')){
		userInfo = JSON.parse(req.cookies.get('userInfo'))
	}
	*/
	res.render('main/list',{
		userInfo:req.userInfo
	})
})
route.get('/detail', (req, res) => {
	//获取cookie信息进行验证
	/*
	let userInfo = {}
	if(req.cookies.get('userInfo')){
		userInfo = JSON.parse(req.cookies.get('userInfo'))
	}
	*/
	res.render('main/detail',{
		userInfo:req.userInfo
	})
})
// router.post('/', (req, res) => res.send(' user post t!'))
// router.put('/', (req, res) => res.send('user put t!'))
// router.delete('/', (req, res) => res.send('user delete t!'))

module.exports = route