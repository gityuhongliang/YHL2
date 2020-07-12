
//引入数据库
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017';

// Database Name定义数据库名称
const dbName = 'kuazhu';

const client = new MongoClient(url,{useUnifiedTopology: true, useNewUrlParser: true });

client.connect(function(err) {
  if(err){
  	console.log(err)
  	throw err
  }else{
  	console.log('success')
  
  	//1.切换数据库 ，没有则新建并切换
  	const db = client.db(dbName)
  	//2.生成集合
  	const collection =db.collection('user')
  }
	//3.根据生成的集合进行数据库操作
  	//3.1新增
  	/*
	collection.insertMany([{name:"Tom",age:10},{name:'leo',age:22}],(err,data)=>{
  		if(err){
 			console.log("insert err :",err)
  		}else{
 			console.log("insert success :",data)
 			//无论成功或失败都要关闭数据库
  			client.close();	
  		}
  	})
  	*/
  	//3.2查找
  	/*
  	collection.find({}).toArray((err,data)=>{
  		if(err){
 			console.log("find err :",err)
  		}else{
 			console.log("find success :",data)
 			//无论成功或失败都要关闭数据库
  			client.close();	
  		}
  	})
  	*/
  	//3.3更新
  	/*
  	collection.updateOne({name:"Tom"},{$set:{age:55}},(err,data)=>{
  		if(err){
 			console.log("updateOne err :",err)
  		}else{
 			console.log("updateOne success :",data)
 			//无论成功或失败都要关闭数据库
  			client.close();	
  		}
  	})
  	*/
  	//3.4删除
  	collection.deleteOne({name:"Tom"},(err,data)=>{
  		if(err){
 			console.log("deleteOne err :",err)
  		}else{
 			console.log("deleteOne success :",data)
 			//无论成功或失败都要关闭数据库
  			client.close();	
  		}
  	})
});



