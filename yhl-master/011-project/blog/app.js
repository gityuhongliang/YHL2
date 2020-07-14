const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = 3000
const swig =require('swig')

//处置静态资源
app.use(express.static('public'))

/*----------------------配置数据库开始-------------------------*/
// 连接到数据库
mongoose.connect('mongodb://127.0.0.1:27017/blog', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

//连接数据库失败
db.on("error",(err=>{
	console.log('connect mongodb err:',err)
	throw err;
}))
//连接数据库成功
db.once('open',function(){
	console.log('connect mongodb success')
})
/*----------------------配置数据库结束-------------------------*/


/*----------------------配置模板引擎开始-------------------------*/

// 设置缓存
	//开发阶段设置不走缓存
	swig.setDefaults({
	  cache: false
	})
// 配置应用模板
	app.engine('html', swig.renderFile);
		// 第一个参数是模板名称,同时也是模板文件的扩展名
		// 第二个参数是解析模板的方法
// 配置模板的存放目录
	app.set('views', './views')
		// 第一参数必须是views
		// 第二个参数是模板存放的目录
// 注册模板引擎
	app.set('view engine', 'html')
		// 第一个参数必须是view engine
		// 第二个参数是模板名称,也就是app.engine的第一个参数


/*----------------------配置模板引擎结束-------------------------*/
/*----------------------配置路由开始-------------------------*/

const BlogRouter = require('./route/index.js')


app.use('/', BlogRouter)




/*----------------------配置路由结束-------------------------*/

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
