const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = 3000
const swig =require('swig')
const bodyParser =require('body-parser')
const Cookies =require('cookies')
const session = require('express-session');
const MongoStore = require("connect-mongo")(session);

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

/*----------------------中间件配置开始-------------------------*/

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// 配置中间件信息后post的参数会被存在req.body

/*----------------------中间件配置结束-------------------------*/
/*----------------------利用cookies保存用户状态开始-------------------------*/

/*
app.use('/',(req,res,next)=>{
	//生成cookies实例并保存在req上，这样所有的路由都可以通过req来操作cookies
	req.cookies =new Cookies(req,res);
	let userInfo ={}
	if(req.cookies.get('userInfo')){
		userInfo = JSON.parse(req.cookies.get('userInfo'))
	}
	//把cookie信息保存在req.userInfo上，后面所有的路由可以通过req.userInfo拿到用户状态信息
	req.userInfo =userInfo
	next()
})

*/
app.use(session({
    //设置cookie名称
    name:'kzid',
    //用它来对session cookie签名，防止篡改
    secret:'abc',
    //强制保存session即使它并没有变化
    resave: true,
    //强制将未初始化的session存储
    saveUninitialized: true, 
    //如果为true,则每次请求都更新cookie的过期时间
    rolling:true,
    //cookie过期时间 1天
    cookie:{maxAge:1000*60*60*24},
 	//设置session存储在数据库中
    store:new MongoStore({ mongooseConnection: mongoose.connection })  
}))
app.use('/',(req,res,next)=>{
	
	req.userInfo =req.session.userInfo  || {}
	next()
})
/*----------------------利用cookies保存用户状态结束-------------------------*/

/*----------------------配置路由开始-------------------------*/

const BlogRouter = require('./route/index.js')
const UserRouter = require('./route/user.js')
const AdminRouter = require('./route/admin.js')
const CategoryRouter = require('./route/category.js')
const ArticleRouter = require('./route/article.js')



app.use('/', BlogRouter)
app.use('/user', UserRouter)
app.use('/admin', AdminRouter)
app.use('/category', CategoryRouter)
app.use('/article', ArticleRouter)





/*----------------------配置路由结束-------------------------*/

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
