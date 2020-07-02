// function (exports, require, module, __filename, __dirname) { 
// 		console.log(arguments.callee+'')
// }


// exports module.exports对象,用来导出模块
console.log(exports);
console.log(module.exports);

// require() 引入模块
console.log(require);

// module 当前的模块信息
console.log(module);


// __dirname 当前模块的文件夹名

console.log(__dirname);
//C:\Users\Administrator\Desktop\YHL2\yhl-master\008-NodeJs\03-global


// __filename 当前模块文件的绝对路径
console.log(__filename);
// C:\Users\Administrator\Desktop\YHL2\yhl-master\008-NodeJs\03-global\01-global.js