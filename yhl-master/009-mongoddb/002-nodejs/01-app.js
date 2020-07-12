//引入数据库
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017';


const client = new MongoClient(url,{useUnifiedTopology: true, useNewUrlParser: true });

client.connect(function(err) {
  if(err){
  	console.log(err)
  	throw err
  }else{
  	console.log('success')
  	//无论成功或失败都要关闭数据库
  	client.close();
  }
});
