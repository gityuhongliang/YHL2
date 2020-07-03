console.log(process);
console.log(global.process);

//process 和 global.process是同一个对象
console.log(process === global.process)//true

console.log(process.env) //属性返回包含用户环境的对象