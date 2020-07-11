//引入模块
const mongoose = require('mongoose');


	// 生成文档模型
	const kittySchema = new mongoose.Schema({
		name:
		{
			type:String,
			required: [true,'用户名不能为空']
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
		_id:
		{
			type:mongoose.Schema.Types.ObjectId
		}
	})

	//根据文档模型生成集合
	
const Schema = mongoose.model('Schema', kittySchema);

module.exports = Schema

