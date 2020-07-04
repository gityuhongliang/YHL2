const fs = require('fs')

//1.打开可读流=>2.读取流=>3.结束读取=>4.关闭可读流

const rs = fs.createReadStream('./005.txt')

rs.on('data',(chunk)=>{
	console.log(chunk)
})

rs.on('end',()=>{
	console.log('read stream done')
})
rs.on('close',()=>{
	console.log('close read stream')
})

