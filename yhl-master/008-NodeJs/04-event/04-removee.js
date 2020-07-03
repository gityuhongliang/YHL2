
const EventEmitter = require('events');

// 继承
class Myemitter extends EventEmitter{};

// 生成实例
const emitter = new Myemitter();

// 监听事件
emitter.on('show',show1 =()=>{
	console.log('y1');
})
emitter.on('show',show2 =()=>{
	console.log('y2');
})


//移除事件
emitter.off('show',show1)
emitter.removeListener('show',show2)

emitter.emit('show');

console.log(emitter.off === emitter.removeListener)//true
// emitter.removeListener和emitter.off是同一个方法

