const express = require('express')

const route = express.Router()

route.get('/', (req, res) => {
	//获取cookie信息进行验证
	/*
	let userInfo = {}
	if(req.cookies.get('userInfo')){
		userInfo = JSON.parse(req.cookies.get('userInfo'))
	}
	*/
	res.render('main/index',{
		userInfo:req.userInfo
	})
})
// router.post('/', (req, res) => res.send(' user post t!'))
// router.put('/', (req, res) => res.send('user put t!'))
// router.delete('/', (req, res) => res.send('user delete t!'))

module.exports = route