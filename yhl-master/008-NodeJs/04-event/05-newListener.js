const EventEmitter = require('events');

// 继承
class Myemitter extends EventEmitter{};

// 生成实例
const emitter = new Myemitter();

// 监听事件
// 'newListener'事件,当有新的监听被添加时触发
// 回调函数接受两个参数分别是新添加的事件名和其中的函数
emitter.on('newListener',(eventName,callback)=>{
	console.log('y1');
	console.log('eventName:',eventName)
	console.log('callback:',callback+"")
	callback()
})

// 触发事件
emitter.on('show',()=>{
	console.log('y2.....')
})