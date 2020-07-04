// Buffer是用来存放二进制数据的容器
// 控制台中输出的buffer,一个数字或者字母代表两个十六进制数
/*
const buf1 = Buffer.from('a'); //<Buffer 61>

console.log(buf1);
// 一个二进制的0 或者 1 代表了 1bit(位)
// 8bit(位) = 1B(字节) = 2个16进制数
	// 1个英文字符 = 1B
	// 1个汉字 = 3B
// 1kb = 1024B
// 1MB = 1024kb
// 1GB = 1024MB
// 1TB = 1024GB

const buf2 =Buffer.alloc(10);
console.log(buf2);



const buf3 =Buffer.alloc(10); 
buf3[0] = 0xfa   //通过下标修改
buf3[1] = 99
console.log(buf3);
*/

const buf4 =Buffer.alloc(1);
buf4[0]=0x61  //a的十六进制是61 
console.log(buf4.toString()); //转换后为a

