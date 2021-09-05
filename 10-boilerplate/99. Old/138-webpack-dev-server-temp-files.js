const path = require('path')

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public/scripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  },    
  // devServer: {
  //   contentBase: [
  //     path.resolve(__dirname, 'public'),
  //     path.resolve(__dirname, 'public/styles')
  //   ],
  //   publicPath: '/scripts/',
  //   watchContentBase: true
  // }
  
  devServer: {
    static: true
    // static: path.join(__dirname, 'public'),
    // historyApiFallback: true,
    // static: false
    // static: {
    //   directory: path.join(__dirname, 'public'),
    //   // directory: path.join(__dirname, 'scripts'),
    //   // publicPath: '/serve-public-path-url',
    // }
  }
}
