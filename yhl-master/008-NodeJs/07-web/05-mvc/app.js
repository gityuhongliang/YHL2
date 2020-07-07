const http = require('http');
const path = require('path');
const fs = require('fs');
const mime =require('./mime.json');
const url =require('url');
const swig = require('swig');
const querystring =require('querystring');
const {get,add} = require('./model/item.js');
const server = http.createServer((req,res)=>{
	
	const filePath =req.url
	const parse =url.parse(req.url,true)
	const pathname = parse.pathname
	console.log(pathname)
	//根据不同的路由(请求地址)处理不同的逻辑
	
		// 以/static/开始的路由请求静态资源
	if(pathname.startsWith('/static/')){
		const filename = path.normalize(__dirname+'/'+filePath)
		// console.log(filename)
		fs.readFile(filename,{encoding:'utf-8'},(err,data)=>{
			if(err){
				// console.log(err)
				res.setHeader('Content-type','text/html;charset="utf-8"')
				res.statusCode = 404
				res.end('你请求的地址出错')
				console.log(222);

			}else{
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
		}
	}




		// 具体路由规则:Controller/action/123/456


/*
	//1.请求首页处理
	if(pathname == '/' || pathname == '/index.html'){
		get()
		.then(data=>{
			// console.log(result)
			//获取请求地址
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
	}
	//处理添加请求
	else if(pathname == '/add'){//处理添加数据
		//获取参数
		//1.定义变量存数据
		let body = ''
		//2.监听data事件
		req.on('data',(chunk)=>{
			body += chunk
		})
		//3.监听end事件
		req.on('end',()=>{
			//将参数转换成对象
			const query = querystring.parse(body);
			// console.log(query);
			// 将任务添加到后台数据文件中
			add(query.task)
		})
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
				res.end('你请求的地址出错')
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
*/
})
server.listen(3000,'127.0.0.1',()=>{
	console.log('running in http://127.0.0.1:3000')
})