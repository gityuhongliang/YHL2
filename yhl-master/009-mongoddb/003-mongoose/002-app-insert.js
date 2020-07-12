//引入模块
const mongoose = require('mongoose');
// 连接到数据库
mongoose.connect('mongodb://127.0.0.1:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on("error",(err=>{
	console.log('connect mongodb err:',err)
	throw err;
}))


db.once('open',function(){
	console.log('connect mongodb success')
	// 生成文档模型
	const kittySchema = new mongoose.Schema({
		name:String,
		age:Number,
		major:String
	})
	//根据文档模型生成集合
	//第一个参数是生成集合的名称（mongoose会将集合的名称变成负数）
	//第二个参数是传入定义的文档模型
	const Kitten = mongoose.model('Kitten', kittySchema);


	// 根据生成的集合进行数据库操作：CRUD
	// Model.prototype.save()
	// Model.insertMany()
	/*
	 Kitten.insertMany([{name:'zs',age:22,major:'LOL'},{name:'ls',age:21,major:'UZI'}])
	 .then(data=>{
	 	console.log("insertMany success :",data)
	 })
	 .catch(err=>{
	 	console.log("insertMany err",err)
	 })
	*/

	 // Model.create()
	 // create === insertMany 和insertMany一样
	 // 区别是insertMany是一下全部插入。create是一条条插入
	Kitten.create([{name:"tk",age:50},{name:'cz',age:66}])
	.then(data=>{
	 	console.log("create success :",data)
	})
	.catch(err=>{
	 	console.log("create err",err)
	})
	

})
