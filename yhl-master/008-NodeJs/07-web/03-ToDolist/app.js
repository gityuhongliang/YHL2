const http = require('http')
const path = require('path')
const fs = require('fs')
const mime =require('./mime.json')
const url =require('url')
const swig = require('swig')
const { get } = require('./model/item.js')
const server = http.createServer((req,res)=>{
	
	const filePath =req.url
	const parse =url.parse(req.url,true)
	const pathname = parse.pathname
	console.log(pathname)
	//:根据不同的路由(请求地址)处理不同的逻辑
	//1.请求首页处理
	if(pathname == '/' || pathname == '/index.html'){
		get()
		.then(data=>{
			// console.log(result)
			//引入模板处理数据
			const filename = path.normalize(__dirname+'/static/index.html')
			var template = swig.compileFile(filename)
			const html = template({
				data:data
			})
			res.setHeader('Content-type','text/html;charset="utf-8"')
			res.end(html)
		})	
		.catch(err=>{
			res.setHeader('Content-type','text/html;charset="utf-8"')
			res.statusCode = 404
			res.end('你请求的地址出错')
			console.log(111);

		})
	}else if(pathname == '/add'){//处理添加数据
		console.log('add ...')
		res.end('ok')
	}else{
		//处理静态资源
		const filename = path.normalize(__dirname+'/static/'+filePath)
		// console.log(filename)
		fs.readFile(filename,{encoding:'utf-8'},(err,data)=>{
			if(err){
				// console.log(err)
				res.setHeader('Content-type','text/html;charset="utf-8"')
				res.statusCode = 404
				res.end('你请求的地址出错<')
			console.log(222);

			}else{
				// console.log(data)
				//根据请求的文件决定不同的文档类型
				//根据文档的后缀名决定文档类型
				//.html   text/html
				//.css    text/css
				// console.log(mime)
				const extname = path.extname(req.url)
				const mimeType = mime[extname]
				// console.log(mimeType)
				res.setHeader('Content-type',mimeType+';charset="utf-8"')
				res.end(data)
			}
		})
	}

})
server.listen(3000,'127.0.0.1',()=>{
	console.log('running in http://127.0.0.1:3000')
})