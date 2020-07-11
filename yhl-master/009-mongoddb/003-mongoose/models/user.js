//引入模块
const mongoose = require('mongoose');


	// 生成文档模型
	const kittySchema = new mongoose.Schema({
		name:String,
		age:Number,
		major:String
	})

	//根据文档模型生成集合
const Kitten = mongoose.model('Kitten', kittySchema);

module.exports = Kitten

