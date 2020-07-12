//引入模块
const mongoose = require('mongoose');
const ModelBlog =require('./models/blog.js')
const ModelUser =require('./models/user.js')

// 连接到数据库
mongoose.connect('mongodb://127.0.0.1:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;


db.on("error",(err=>{
	console.log('connect mongodb err:',err)
	throw err;
}))

db.once('open',function(){
	console.log('connect mongodb success')

	
	// 根据生成的集合进行数据库操作：CRUD
	/*
	ModelUser.insertMany({name:'zsssss',age:22,major:"UZI",author:'5f082d685777fd25fcc7389c'})
	 .then(data=>{
	 	console.log(data)
	 })
	 .catch(err=>{
	 	console.log(err)
	 })
	 */
	 //正常方法找到id为什么什么的 一对一
	 /*
	 ModelUser.findOne({name:'CCCCCC'})
	 .then(data=>{
	 	console.log(data)
	 	ModelBlog.find({author:data.id},(err,data)=>{
	 		if (err) {
	 			console.log(err)
	 		}else{
	 			console.log(data)
	 		}
	 	})
	 	
	 })
	 .catch(err=>{
	 	console.log(err)
	 })
	 */
	
	//自定义实例方法
	 ModelUser.findOne({name:'CCCCCC'})
	 .then(data=>{
	 	console.log(data)
		data.getBlogs((err,data)=>{
			if (err) {
	 			console.log(err)
	 		}else{
	 			console.log(data)
	 		}
		})
	 	
	 })
	 .catch(err=>{
	 	console.log(err)
	 })
})
