/*

const t1 = setTimeout(()=>{
	console.log('t1......')
},200);
clearTimeout(t1);
console.log('after t1........');


const t2 = setInterval(()=>{
	console.log('t2......')
},200);
clearInterval(t2);
console.log('after t2........')



const t3 = setImmediate(()=>{
	console.log('t3......')
},200);
// clearImmediate(t3);
console.log('after t3 ........');

*/

/*
process.nextTick(callback) 
方法将 callback 添加到下一个时间点的队列。 
一旦当轮的事件循环全部完成，则调用下一个时间点的队列中的所有回调。
*/

const t5 = setImmediate(()=>{
	console.log('t5......')
},200);

const t6 = process.nextTick(()=>{
	console.log('t6')
})

console.log('after t6 ........');
