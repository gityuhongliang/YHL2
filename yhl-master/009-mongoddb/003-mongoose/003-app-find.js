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
	// MyModel.find({ name: 'john', age: { $gte: 18 }});
	// MyModel.find({ name: 'john', age: { $gte: 18 }}, function (err, docs) {});
	Kitten.find({name:'tk'},(err,data)=>{
		if(err){
			console.log('find err:',err)
		}else{
			console.log('find success:',data)
		}
	})


	// Adventure.findById(id, function (err, adventure) {});
	Kitten.findById('5f082d685777fd25fcc7389c',(err,data)=>{
		if(err){
			console.log('findById err:',err)
		}else{
			console.log('findById success:',data)
		}
	})


	// Adventure.findOne({ type: 'iphone' }, function (err, adventure) {});
	Kitten.findOne({name:"tk"},(err,data)=>{
		if(err){
			console.log('findOne err:',err)
		}else{
			console.log('findOne success:',data)
		}
	})
});

