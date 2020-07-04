/*
const http = require('http')
const server = http.createServer((req,res)=>{
	//req  request =>可读流
	//res  response => 可写流
	res.end('aaaa')
})

server.listen(3000,'127.0.0.1',()=>{
	console.log('running in http://127.0.0.1:3000')
})

*/

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});