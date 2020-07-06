const http = require('http')
const path = require('path')
const fs = require('fs')
const mime =require('./mime.json')
const server = http.createServer((req,res)=>{
	
	// console.log(req.url)
	//处理静态资源
	const filePath =req.url
	const filename = path.normalize(__dirname+'/static/'+filePath)
	// console.log(filename)
	fs.readFile(filename,{encoding:'utf-8'},(err,data)=>{
		if(err){
			// console.log(err)
			res.setHeader('Content-type','text/html;charset="utf-8"')
			res.statusCode = 404
			res.end('你请求的地址出错')
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
})
server.listen(3000,'127.0.0.1',()=>{
	console.log('running in http://127.0.0.1:3000')
})