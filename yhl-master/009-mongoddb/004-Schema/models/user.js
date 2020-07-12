//引入模块
const mongoose = require('mongoose');


// 生成文档模型
const kittySchema = new mongoose.Schema({
	name:
	{
		type:String,
		required:[true,'用户名不能为空'],
		maxlength:[10,'用户名长度不能大于10个字符'],
		minlength:[5,'用户名长度不能小于5个字符']
	},
	age:
	{
		type:Number,
		required:[true,'年龄不能为空'],
		min:[20,'年龄不能小于20'],
		max:[100,'年龄不能大于100']
	},
	major:
	{
		type:String,
		required:[true],
		enum:['UZI','MLXG','KOROL']
	},
	phone:
	{
		type:Number,
		validate:{
			validator:(val)=>{
				return /1[35789]\d{9}/.test(val)
			},
			message:'手机号码不合法'
		}
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


	//自定义实例方法
	kittySchema.methods.getBlogs =function(callback){
		// console.log('this')
		// console.log(this.model('ModelBlog'))
		this.model('ModelBlog').find({author:this.id},callback)
	}








//根据文档模型生成集合
//第一个参数是生成集合的名称（mongoose会将集合的名称变成负数）
//第二个参数是传入定义的文档模型
const ModelUser = mongoose.model('ModelUser', kittySchema);

module.exports = ModelUser

