const path = require('path');

// 自动生成HTML
const htmlWebpackPlugin = require('html-webpack-plugin')

// 清理输出文件夹
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

//css文件单独打包
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
  		
	},
  	output: { //指定出口文件

  		// [name] chunk名称
    	// filename: '[name].js',
		// [hash] 模块标识符的hash,每一次打包的模块hash值都不同
    	// filename: '[hash].js',
    	// 多出口写法
    	filename: '[name]-[hash].bundle.js',
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
              util:path.resolve(__dirname,'./src/util'),
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
					test: /\.(png|jpg|gif)$/i,
					use:[
			  			    {
			    			  loader: 'url-loader',
			    				 options: {
			      				 limit: 10
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
                        presets: ['env','es2015','react','stage-3'],
                        //antd实现css按需加载
                        plugins: [
                            ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": true }] 
                        ]
                    }
                }               
            },
        //自定义主题
         {
                test: /\.less$/,
                use: [{
                  loader: 'style-loader',
                }, {
                  loader: 'css-loader', // translates CSS into CommonJS
                }, {
                    loader: 'less-loader', // compiles Less to CSS
                    options: {
                    lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
                            modifyVars: {
                               'primary-color': 'rgb(0, 0, 0, 0.65)',
                               'link-color': 'rgb(0, 0, 0, 0.65)',
                               'border-radius-base': '2px',
                             },
                            javascriptEnabled: true,
                        },
                    },
                }],
            }
        ]
    },
  		plugins:[
    		new htmlWebpackPlugin({
        	template:'./src/index.html',//模板文件
       		filename:'index.html',//输出的文件名
       		inject:'true',//脚本写在那个标签里,默认是true(在body结束后)
        	hash:true//给生成的js/css文件添加一个唯一的hash
   		 }),
    		//清理输出文件夹
    		 new CleanWebpackPlugin(),
            // css文件单独打包
             new MiniCssExtractPlugin({})
		],
          devServer:{
            contentBase: './dist',//内容的目录
            port:3001,//服务运行的端口
            historyApiFallback:true,//h5路由刷新页面不向后台请求数据
        }
};

