//引入模块
const mongoose = require('mongoose');
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
	ModelUser.insertMany({name:'zs',age:22,author:'5f09736772efb637c874b08c'})
	 .then(data=>{
	 	console.log(data)
	 })
	 .catch(err=>{
	 	console.log(err)
	 })

})

