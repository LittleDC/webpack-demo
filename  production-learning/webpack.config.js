const {
  resolve
} = require('path')
// css兼容性处理
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// css压缩
// const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin')

process.env.NODE_ENV = 'production';

// 复用loader
const commonCssLoader = [
  // 'style-loader',
  MiniCssExtractPlugin.loader,
  'css-loader',
  {
    // package.json中定义browsers list
    loader: 'post-loader',
    options: {
      ident: 'postcss',
      plugins: () => [
        require('postcss-preset-env')()
      ]
    }
  }
]

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/build.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [...commonCssLoader]
      },
      // {
      //   test: /\.less$/,
      //   use: [...commonCssLoader, 'less-loader']
      // },
      // {
      //   // package.json配置
      //   // 已经out？
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre', // 该loader限制性
      //   options: {
      //     fix: true
      //   }
      // },
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: 'babel-loader',
      //   options: {
      //     presets: [
      //       [
      //         '@babel/preset-env',
      //         {
      //           useBuiltIns: 'usage',
      //           corejs: {
      //             version: 3
      //           },
      //           targets: {
      //             chrome: '60',
      //             firefox: '50'
      //           }
      //         }
      //       ]
      //     ]
      //   }
      // },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        exclude: /\.(js|css|less|html|jpg|png|gif)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/built.css'
    }),
    // new OptimizeCssAssetsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
  mode: 'production'
}