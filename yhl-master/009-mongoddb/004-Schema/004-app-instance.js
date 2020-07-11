//引入模块
const mongoose = require('mongoose');
const Schema =require('./models/blog.js')
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
	Schema.insertMany({name:"Tom",age:15,major:"LOL",_id:"5f09734877977a2484b453e6"})
	 .then(data=>{
	 	console.log(data)
	 })
	 .catch(err=>{
	 	console.log(err)
	 })
	 */
	 
	 Schema.findOne({name:'CC'})
	 .then(data=>{
	 	console.log(data)
	 	ModelUser.find({author:data.id},(err,data)=>{
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
