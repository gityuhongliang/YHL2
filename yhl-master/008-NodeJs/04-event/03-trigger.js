const EventEmitter = require('events');

class MyEmitter extends EventEmitter{};

const emitter = new MyEmitter();

emitter.on('test',(arg1,arg2)=>{
	console.log(arg1,arg2);
})

// 和浏览器端的事件不同,传入参数不用数组而是参数列表
// 当 EventEmitter 对象触发一个事件时，所有绑定在该事件上的函数都会被同步地调用。
// emitter.emit('test','tom','18');

const arr =[1,2];

emitter.emit('test',...arr);