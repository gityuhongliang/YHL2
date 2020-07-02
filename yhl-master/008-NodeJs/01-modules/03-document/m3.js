// 利用全局对象global在模块间传值
	
// 在模块A中将需要传递的值添加在global对象上
// 在模块B中用require(模块A文件名)执行模块A
// 在模块B中使用模块A上添加的值
// 用全局对象global虽然可以传值,但是在大型复杂的项目中会使得global对象变得非常庞大
// global的作用是全局的命名空间对象
console.log(global);
global.str ='a';