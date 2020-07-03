
// Node中的event没有默认行为和事件冒泡
// 通常我们需要继承EventEmitter类来实现事件
// 大多数 Node.js 核心对象都继承事件类
const EventEmitter = require('events');//返回的是一个类

/*
//生成实例
const emitter = new EventEmitter

// 添加监听事件
emitter.on('test',()=>{
	console.log('aaa');
})

//触发事件
emitter.emit('test');


*/


// 通常我们需要继承EventEmitter类来实现事件
class MyEmitter extends EventEmitter{};

//生成实例
const emitter = new MyEmitter()

// 添加监听事件
emitter.on('test',()=>{
	console.log('aaa');
})

//触发事件
emitter.emit('test');