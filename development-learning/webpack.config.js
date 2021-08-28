/*
  开发环境配置：能让代码运行起来

*/

const {
  resolve
} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      // loader的配置
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // { // 坑坑坑
      //   test: /\.(jpg|png|gif)$/,
      //   loader: 'url-loader',
      //   options: {
      //     limit: 8 * 1024,
      //     name: '[name]_[hash:10].[ext]',
      //     // 关闭es6模块化，开启commonJS模块化
      //     // esModule: false
      //   }
      // },
      {
        // 处理HTML中的img资源
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        // 处理其他资源
        exclude: /\.(html|js|css|less|jpg|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]'
        }
      }
    ]
  },
  plugins: [
    // plugins的配置
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    // contentBase: resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    open: true
  },
  mode: 'development'
}