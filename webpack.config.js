const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const DEV_MODE = process.env.NODE_ENV === 'development';
console.log(`DEV_MODE:${DEV_MODE}`);

module.exports = {
      context: path.resolve('src'),
      mode:process.env.NODE_ENV,
      devtool: DEV_MODE?'inline-source-map':false,
      entry:{
          server:[DEV_MODE?'server.dev.js':'server.js']
      },
      output:{
          filename:DEV_MODE?'[name].js':'[name]-[chunkhash].js', //只自己開發的js
          chunkFilename: DEV_MODE ? '[name]-chunk.js' : '[name]-chunk-[chunkhash].js', //專門打包第三方的js 
          path: path.resolve('backend'), //生成儲存的位置
          publicPath: '/'
      },
      resolve:{
        modules:[ //優先搜尋這些地方
              path.resolve('src'),
              path.resolve('node_modules'),
          ],
        alias: {
          '@': path.resolve('src'),
        },
      },
      target:'node',
      externals: [nodeExternals()], 
      module: { //loader處理區
        rules: [
          {
            test: /\.(js|jsx)$/,
            use: { loader: 'babel-loader' },
            exclude: /node_modules/, //node_modules 除外 因為不太可能會改變
          }
        ]
      },
}


