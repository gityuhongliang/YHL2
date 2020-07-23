const path = require('path');

module.exports = {
	//配置开发环境
  	mode:'development',// "productio(生产环境)" | "development" | "none"
  	//指定入口文件
  	// webpack 开始打包
  	//单入口写法一：entry: './src/index.js',
  	//多入口写法
  	entry: {
  	//chunk名称:入口文件路径
  		index: "./src/index.js",
  		about: "./src/about.js",
  		contact:"./src/contact.js"
	},
  	output: { //指定出口文件

  		// [name] chunk名称
    	// filename: '[name].js',
		// [hash] 模块标识符的hash,每一次打包的模块hash值都不同
    	// filename: '[hash].js',

    	// 多出口写法
    	filename: '[name]-[hash].bundle.js',
    	path: path.resolve(__dirname, 'dist')
    	// 所有输出文件的目标路径
    	// 必须是绝对路径（使用 Node.js 的 path 模块）
  	},
  	module: {
	    rules:[
	    //处理css
				{
			    	test: /\.css$/,
			    	use:[
			      		'style-loader',
			     		'css-loader'
			    	]
				},
	    //处理图片 
				{
					test: /\.(png|jpg|gif)$/i,
					use:[
			  			{
			  				// url-loader默认使用file-loader处理图片文件,所以需要额外安装file-loader
			    			loader: 'url-loader',
			    				options: {
			    				// 当图片大小超过limit值后,会生成一个文件
			      				limit: 10
			    			}
			  			}
					]
				}		   
	    	]
  		} 
};

