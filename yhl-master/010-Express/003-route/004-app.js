const express = require('express')
const app = express()
const port = 3000
const url =require('url')

app.use(express.static('public'))
// app.use('/static', express.static('public'))

app.all('/',(req,res,next)=>{
	console.log('alway something')
	next()
})

// /?name=Tom&age=19
app.get('/', (req, res) =>{ 
	/*
	const query = url.parse(req.url,true)
	*/
	console.log(req.query)
	res.send('get t!')
})
// /users/:userId/books/:bookId
app.get('/users/:userId/books/:bookId', (req, res) =>{ 
	console.log(req.params)
	res.send('get t!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))