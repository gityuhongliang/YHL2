const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
// app.use('/static', express.static('public'))



app.get('/', (req, res) => res.send('get t!'))
app.post('/', (req, res) => res.send('post t!'))
app.put('/', (req, res) => res.send('put t!'))
app.delete('/', (req, res) => res.send('delete t!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))