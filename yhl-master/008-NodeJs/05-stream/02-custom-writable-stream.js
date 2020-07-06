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
write.write('a1',()=>{
	console.log('hello ')
})
write.write('a2')
write.end()//把流写完了 然后结束
/*
chunk: <Buffer 32>
encoding: buffer
callback: [Function: bound onwrite]
chunk: <Buffer 61>
encoding: buffer
callback: [Function: bound onwrite]
hello
*/
