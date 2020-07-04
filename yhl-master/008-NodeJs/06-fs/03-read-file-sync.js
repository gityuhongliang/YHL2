// 同步读取文件
const fs = require('fs')
const util = require('util')
	//逐步操作
		//1.打开文件
		const fd = fs.openSync('./003.txt','r')
		//2.读取文件内容
		let buf = Buffer.alloc(100)
		fs.readSync(fd,buf,0,50,0)
		console.log(buf)
		//3.关闭文件
		fs.closeSync(fd)
		
	//合并操作
	
		const buf = fs.readFileSync('./003.txt',{flag:'r',encoding:'utf-8'})
		console.log(buf)
	