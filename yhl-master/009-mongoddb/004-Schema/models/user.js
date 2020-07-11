//引入模块
const mongoose = require('mongoose');


	// 生成文档模型
	const kittySchema = new mongoose.Schema({
		name:
		{
			type:String
		},
		age:
		{
			type:Number
		},
		major:
		{
			type:String
		},
		admin:
		{
			type:Boolean
		},
		fiends:
		{
			type:Array
		},
		author:
		{
			type:mongoose.Schema.Types.ObjectId
		}
	})

	//根据文档模型生成集合
	
const ModelUser = mongoose.model('ModelUser', kittySchema);

module.exports = ModelUser

