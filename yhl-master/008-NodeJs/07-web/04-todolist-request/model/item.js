const fs = require('fs');
const path = require('path')
const util =require('util')


//异步处理获取json数据
const readFile = util.promisify(fs.readFile);
//异步处理写入json数据
const writeFile = util.promisify(fs.writeFile);

//获取json文件地址
const filepath = path.normalize(__dirname+'/../data/item.json');

// 异步处理获取json数据
async function get(){
	// 异步合并操作读取json文件数据
	const data =await readFile(filepath,{flag:'r',encoding:'utf-8'})
	//返回数据
	console.log(data)
	const arr = JSON.parse(data)
	return arr
}

//添加数据
async function add(task){
	// console.log(task)
	// 因为直接添加会覆盖掉之前的数据
	// 所以需要读取原来的json数据将字符串数据转换成数组
	// 再把生成的任务对象添加到数组中
	// 然后将最新的数据覆盖写入json文件里
	// 1.读取数据
	const data = await readFile(filepath,{flag:'r',encoding:'utf-8'})
	// 2.将字符串数据转换成数组
	const arr =JSON.path(data)
	// 3.生成任务对象并添加到数组中
	const obj = { 
		id:Data.now().toString(),
		task:task
	}
	arr.push(obj);
	// 4.将最新的数据覆盖写入json文件里
	await writeFile(filepath,JSON.stringify(arr));
	//5.返回任务对象更新前台数据
	return obj
}
//删除数据






module.exports= {
	get,
	add,
}
