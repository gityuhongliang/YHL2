const fs = require('fs')


//1.打开可写流>2.写入流>3.结束可写流>4.关闭可写流

const stream = fs.createWriteStream('./005.txt')

stream.write('hellow');//调用write写入内容

stream.end() 

stream.on('finish',()=>{
	console.log('write stream')
})
stream.on('close',()=>{
	console.log('close end')
})