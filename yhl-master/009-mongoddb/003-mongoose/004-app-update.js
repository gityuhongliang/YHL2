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
	const Kitten = mongoose.model('Kitten', kittySchema);
	// 根据生成的集合进行数据库操作：CRUD
	/*
	Kitten.updateMany({name:"tk",age:66},(err,data)=>{
		if(err){
			console.log('updateMany err:',err)
		}else{
			console.log('updateMany success:',data)
		}
	})
	*/
	Kitten.updateOne({name:'tk'},{age:20},(err,data)=>{
		if(err){
			console.log('updateOne err:',err)
		}else{
			console.log('updateOne success:',data)
		}
	})
});

