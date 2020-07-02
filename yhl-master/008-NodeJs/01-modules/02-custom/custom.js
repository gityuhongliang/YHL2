

// 在目录node_modules下的文件或者包,例如用npm安装的模块
// 自定义模块的加载路径可以通过module.paths查看 
// 在目录node_modules下的文件或者包,例如用npm安装的模块
//自定义模块
//自定义模块使用步骤
//1.安装对应模块的包
//2.引入自定义模块
const $ = require('jquery')
//3.使用自定义模块
console.log($+'')
console.log(module.paths)
