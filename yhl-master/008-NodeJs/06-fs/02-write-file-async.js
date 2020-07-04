// 异步写入文件
const fs = require('fs');
const util = require('util');

//逐步操作

	//1.打开文件
	fs.open('./001.txt','a',(err,fd)=>{
		if(err){
			console.log('open err')
		}else{
			//2.写入内容
			fs.write(fd,'hellow',(err)=>{
				if(err){
					console.log(err)
					console.log('write file err')
				}else{
					//3.保存并退出
					fs.close(fd,(err)=>{
						if(err){
							console.log('close file err')
						}
					})
				}
			})
		}
	})

//合并操作

	fs.writeFile('./001.txt','NodeJS',{flag:'a'},(err)=>{
		if(err){
			console.log(err)
		}
	})

//promise操作异步写入文件
const writefile = util.promisify(fs.writeFile)
writefile('./001.txt','yhl',{flag:'a'})
.then(()=>{
	console.log('write file success')
})
.catch(err=>{
	console.log('write file err')
})