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
		phone:
		{
			type:Number
		},
		admin:
		{
			type:Boolean
		},
		friends:
		{
			type:Array
		},
		createdAt:
		{
			type:Date,
			default:Date.now//default:指定默认值

		},
		author:
		{
			type:mongoose.Schema.Types.ObjectId
		}
	})

	//根据文档模型生成集合
	
const ModelBlog = mongoose.model('ModelBlog', kittySchema);

module.exports = ModelBlog

