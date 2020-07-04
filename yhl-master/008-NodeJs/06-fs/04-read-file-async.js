// 异步读取文件
const fs = require('fs')
const util = require('util')
//逐步操作
//打开文件
//1.打开文件
	fs.open('./003.txt','r',(err,fd)=>{
		if(err){
			console.log('open err')
		}else{
			//2.读取文件内容
			let buf = Buffer.alloc(100)
			fs.read(fd,buf,0,50,0,(err)=>{
				if(err){
					console.log(err)
					console.log('read file err')
				}else{
					console.log(buf)
				}
				//3.关闭文件
				fs.close(fd,(err)=>{
					if(err){
						console.log(err)
						console.log('close file err')
					}else{
						console.log(buf.toString())
					}
				})
			})
		}
	})