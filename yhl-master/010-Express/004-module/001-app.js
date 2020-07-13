const express = require('express')
const app = express()
const port = 3000
const UserRouter = require('./route/user.js')
const BlogRouter = require('./route/blog.js')

app.use(express.static('public'))
// app.use('/static', express.static('public'))


app.use('/user', UserRouter)
app.use('/blog', BlogRouter)
// app.get('user', (req, res) => res.send('get t!'))
// app.post('user', (req, res) => res.send('post t!'))
// app.put('user', (req, res) => res.send('put t!'))
// app.delete('user', (req, res) => res.send('delete t!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))