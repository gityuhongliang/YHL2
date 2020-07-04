const EventEmitter = require('events');
//继承父类
class MyEmitter extends EventEmitter{};
//生成实例
const emitter = new MyEmitter();
//监听事件
emitter.on('test',()=>{
	console.log('y1');
})
emitter.on('test',()=>{
	console.log('y2');
})

// emitter.addListener和emitter.on(eventName, listener)是同一个方法
// console.log(emitter.addListener === emitter.on)

emitter.addListener('test',()=>{
	console.log('y3');
})
emitter.addListener('test',()=>{
	console.log('y4');
})
emitter.once('test',()=>{ // 同时多次调用只执行一次
	console.log('y5');
})
emitter.once('test',()=>{
	console.log('y6');
})
//触发事件
 //当 EventEmitter 对象触发一个事件时
// 所有绑定在该事件上的函数都会被同步地调用。
// 和浏览器端的事件不同,传入参数不用数组而是参数列表
emitter.emit('test');

//测试上面的emitter.once()同时多次调用只执行一次
emitter.emit('test'); 



/*
// 一个EventEmitter对象默认最大可以有10个监听,可以通过emitter.setMaxListeners(n)来设置最大监听数
emitter.on('test1',()=>{
	console.log('默认十个监听事件');
})
emitter.on('test1',()=>{
	console.log('默认十个监听事件');
})
emitter.on('test1',()=>{
	console.log('默认十个监听事件');
})
emitter.on('test1',()=>{
	console.log('默认十个监听事件');
})
emitter.on('test1',()=>{
	console.log('默认十个监听事件');
})
emitter.on('test1',()=>{
	console.log('默认十个监听事件');
})
emitter.on('test1',()=>{
	console.log('默认十个监听事件');
})
emitter.on('test1',()=>{
	console.log('默认十个监听事件');
})
emitter.on('test1',()=>{
	console.log('默认十个监听事件');
})
emitter.on('test1',()=>{
	console.log('默认十个监听事件');
})
emitter.on('test1',()=>{
	console.log('默认十个监听事件');
})
emitter.emit('test1');
*/