const express = require('express')
const app = express()
const port = 3000
const url =require('url')

app.use(express.static('public'))
// app.use('/static', express.static('public'))

app.get('/', (req, res) =>{ 
	
	console.log(req.query)
	// res.end('get t!')  //字符串
	// res.end('<p>我是段落</>')  //标签  结束返回处理

	// res.end({name:'tom'}) //对象
	
	// res.json('get t!')  //字符串
	// res.json('<p>我是段落</>')  //标签

	// res.json({name:'tom'}) //对象  返回json
	// 
	// res.send('get t!')  //字符串
	// res.send('<p>我是段落</>')  //标签
	// res.send({name:'tom'}) //对象      返回多种类型数据
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))