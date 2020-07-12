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

	//根据生成的集合进行数据库操作：CRUD
	const silence = new Kitten({ name: 'Silence',age:18,major:'LOL' });
	// console.log(silence.name);
	// 保存的意思save
	/*
	silence.save((err,data)=>{
		if(err){
			console.log('insert err:',err)
		}else{
			console.log('insert success:',data)
		}
	})
	*/
	//查找
	/*
	Kitten.findOne({name:'Silence'},(err,data)=>{//异常优先
		if(err){
			console.log('findOne err:',err)
		}else{
			console.log('findOne success:',data)
		}
	})
	*/
	//更新
	/*
	Kitten.updateOne({name:'Silence'},(err,data)=>{
		if(err){
			console.log('updateOne err:',err)
		}else{
			console.log('updateOne success:',data)
		}
	})
	*/
	//删除
	/*
	Kitten.deleteOne({name:'Silence'},(err,data)=>{
		if(err){
			console.log('deleteOne err:',err)
		}else{
			console.log('deleteOne success:',data)
		}
	})
	*/
})
