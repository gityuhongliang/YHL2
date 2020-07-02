
// 引用模块
// require('文件名'),执行对应的文件并且返回该文件对应的modeule.exports对象
const req = require('./m5.js');
console.log(req.str);
console.log(req.obj);
console.log(req.fn);
req.fn();