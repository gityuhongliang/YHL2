//引入模块
const mongoose = require('mongoose');
const ModelBlog =require('./models/blog.js')
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
	ModelBlog.insertMany({name:"lz",age:18,major:"LOL",author:'5f0b1bfffc54c122102d3bd6'})
	.then(data=>{
	 	console.log(data)
	})
	.catch(err=>{
	 	console.log(err)
	})

})

