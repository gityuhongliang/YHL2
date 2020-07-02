const obj ={
	name:'Tom',
	age:18
}
const str ='hahaha';

const fn =()=>{
	console.log('bbbbb');
}

//导出模块

// exports对象和module.exports对象是同一个对象
console.log(exports);
console.log(module.exports);
console.log(exports === module.exports);//true


// 可以在module.exports对象或者exports对象上添加属性来导出值
// 如果要添加属性来导出值,可以使用module.exports对象或者exports对象
/*
exports.obj =obj
exports.str =str
exports.fn  =fn
*/
/*
module.exports.obj =obj
module.exports.str =str
module.exports.fn  =fn
*/

// 如果要导出一个对象,只能使用module.exports对象,
/*
exports={ //此时exports对象的值就不会被导出
	obj,
	str,
	fn
}
*/
module.exports={ //如果要导出一个对象,只能使用module.exports对象
	obj,
	str,
	fn
}
