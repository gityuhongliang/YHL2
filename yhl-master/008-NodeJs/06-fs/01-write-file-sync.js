//同步读写文件
const fs =require('fs');
// //逐步操作
// //打开文件
const fd = fs.openSync('./001.txt','a');
// //写入数据
fs.writeSync(fd,'hellow');
// //保存文件
fs.closeSync(fd);

// 合并操作
// fs.writeFileSync(file, data[, options])
fs.writeFileSync('./001.txt','hellow1',{flag:'a'})