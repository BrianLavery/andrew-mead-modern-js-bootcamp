// We create a configuration object using node

// We are accessing a node library
const path = require('path')

module.exports = {
  // Can be an absolute or relative path
  entry: './src/index.js',
  output: {
    // Path must be an absolute path
    // We want a flexible path - can use node.js 
    path: path.resolve(__dirname, 'public/scripts'),
    filename: 'bundle.js'
  },
  // We create module to run rules
  module: {
    rules: [{
      // We want to include any files ending in .js
      test: /\.js$/,
      // Tell which files to apply this to. We exclude any code in node_modules files
      exclude: /node_modules/,
      // Tells loaders what tools to use
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  }
}
