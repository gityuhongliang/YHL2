//引入模块
const mongoose = require('mongoose');
// 生成文档模型
const kittySchema = new mongoose.Schema({
	name:String,
	age:Number,
	major:String
})

//根据文档模型生成集合
//第一个参数是生成集合的名称（mongoose会将集合的名称变成负数）
//第二个参数是传入定义的文档模型
const Kitten = mongoose.model('Kitten', kittySchema);

module.exports = Kitten

