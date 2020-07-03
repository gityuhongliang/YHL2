const { Writable  } = require('stream');

// console.log(Writable);

/*
const write = new Writable()

write.write('hello') //The _write() method is not implemented 

*/
class CustomStream extends Writable{
	_write(chunk, encoding, callback){
		console.log('chunk:',chunk);
		console.log('encoding:',encoding);
		console.log('callback:',callback);
		callback()
	}
}


const write = new CustomStream();

write.on('h1',()=>{
	console.log('hahaha')
})
write.write('2',()=>{
	console.log('hello ')
})
write.write('a')
write.end()
/*
chunk: <Buffer 32>
encoding: buffer
callback: [Function: bound onwrite]
chunk: <Buffer 61>
encoding: buffer
callback: [Function: bound onwrite]
hello
*/
