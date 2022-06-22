const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports={
  //指定入口文件
  entry:'./src/index.ts',
  mode:"production",
  //指定打包文件的所在目录
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:"bundle.js",
    environment:{
      //打包环境不支持箭头函数
      arrowFunction:false
    }
  },
  //指定webpack打包时要用的模块
  module:{
    rules:[{
      test:/\.ts$/,
      use:[
        {
          //指定加载器
          loader: 'babel-loader',
          //设置babel
          options:{
            //设置预定义的环境
            presets:[
              [
                //指定环境的插件
                "@babel/preset-env",
                //配置信息
                {
                  //要兼容的目标浏览器
                  targets:{
                    "chrome":"88",
                    "ie":"11"
                  },
                  //指定corejs的版本
                  "corejs":"3",
                  //使用corejs的方式，“useage”表示按需加载
                  "useBuiltIns":"usage"
                }
              ]
            ]

          }
        },
        'ts-loader'
      ],
      exclude:/node_modules/
    }]
  },
  plugins:[
    new CleanWebpackPlugin(),//dist目录清除旧文件
    new HtmlWebpackPlugin({//添加新文件
      title:"自定义title",
      template:"./src/index.html"
    })
  ],
  //用来设置引用模块
  resolve:{
    extensions:['.ts','.js']
  }
}