const path = require('path');

// 自动生成HTML
const htmlWebpackPlugin = require('html-webpack-plugin')

// 清理输出文件夹
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

//css文件单独打包
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const getHtmlConfig = (name,title)=>({
  template:'./src/views/'+name+'.html',//模板文件
  title:title,
    filename:name+'.html',//输出的文件名
    hash:true,//给生成的js/css文件添加一个唯一的hash
    chunks:[name,'common']
})
module.exports = {
	//配置开发环境
  	mode:'development',// "productio(生产环境)" | "development" | "none"
  	//指定入口文件
  	// webpack 开始打包
  	//单入口写法一：entry: './src/index.js',
  	//多入口写法
  	entry: {
  	//chunk名称:入口文件路径
  		  index: "./src/pages/index/index.js",
        list: "./src/pages/list/index.js",
        common: "./src/pages/common/index.js",
        'user-login':"./src/pages/user-login/index.js",

  		
	},
  	output: { //指定出口文件

  		// [name] chunk名称
    	// filename: '[name].js',
		// [hash] 模块标识符的hash,每一次打包的模块hash值都不同
    	// filename: '[hash].js',
    	// 多出口写法
    	filename: 'js/[name]-[hash].bundle.js',
    	path: path.resolve(__dirname, 'dist'),
    	// 所有输出文件的目标路径
    	// 必须是绝对路径（使用 Node.js 的 path 模块）
      

      //静态资源路径配置
      publicPath:'/'
  	},
     //配置别名
      resolve:{
          alias:{
              pages:path.resolve(__dirname,'./src/pages'),
              node_modules:path.resolve(__dirname,'./node_modules'),

          }
      },
  	module: {
	    rules:[
	    //处理css
        /*
			{
    	    	test: /\.css$/,
    	    	use:[
    	      		'style-loader',
    	     		'css-loader'
    	    	]
			},
         */
        {
            test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                }
              },
              "css-loader"
            ]
          },

	    //处理图片 
				{
					test: /\.(png|jpg|gif|ttf|woff2|woff|eot|svg)\??.*$/i,
					use:[
			  			    {
			    			  loader: 'url-loader',
			    				 options: {
			      				 limit: 10,
                     name:'img/[name].[ext]'
			    			    }
			  			    }
					    ]
				},
        //配置react
               {
                test:/\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // presets: ['env', 'react'],
                        presets: ['env','es2015','stage-3'],
                    }
                }               
            },
         
        ]
    },
  		plugins:[
    		 new htmlWebpackPlugin(getHtmlConfig('index','首页')),
         new htmlWebpackPlugin(getHtmlConfig('list','列表页')),
         new htmlWebpackPlugin(getHtmlConfig('user-login','登录页')),
           
    		//清理输出文件夹
    		new CleanWebpackPlugin(),
            // css文件单独打包
            new MiniCssExtractPlugin({
                filename:'css/[name]-[hash]-bundle.css'
            })
		],
        devServer:{
            contentBase: './dist',//内容的目录
            port:3002,//服务运行的端口
            historyApiFallback:true,//h5路由刷新页面不向后台请求数据
        }
};

