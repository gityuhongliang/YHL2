

//注意多次引用模块只执行一次

// 写法一

/*
import { a } from './modules.js'

console.log(a)
*/


// 写法二

/*
import { b } from './modules.js'

console.log(b)
*/


// 写法三
// import命令可以使用as关键字将输入的变量重命名。

/*
import { c as b } from './modules.js'

console.log(b)

*/


// 写法四
// export时as关键字重命名变量a的名字为b,所以在引入时用b
/*
import{ d } from './modules.js'
console.log(d)
*/
// 写法五
// 一个模块只能有一个默认输出，因此export default命令只能使用一次。所以，import命令后面才不用加大括号，因为只可能唯一对应export default命令。
// 正是因为export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句。
// export default导出的模块,import时变量名可以用随意合法的名称
import{ f } from './modules.js'
console.log(f)