
const path = require('path')

module.exports = {
    //端口配置
    devServer: {
        // port: 3003,
        proxy: 'https://api.mall.kuazhu.com/',
    },
    //less配置
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, './src/assets/less/index.less')
            ]
        }
    },
  //别名配置
    chainWebpack:config =>{
        config.resolve.alias
        .set('pages',path.resolve(__dirname,'./src/pages'))
        .set('api',path.resolve(__dirname,'./src/api'))
    },
    css: {
        loaderOptions: {
          less: {
            // 若使用 less-loader@5，请移除 lessOptions 这一级，直接配置选项。
            lessOptions: {
              modifyVars: {
                // 直接覆盖变量
                'text-color': '#ee0a24',
                'search-action-text-color':'#ee0a24',
                'search-content-background-color':'#969799',
              },
            },
          },
        },
      },
}

