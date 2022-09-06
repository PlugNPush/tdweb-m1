// updated webpack.config.js that integrates babel to assets pipeline.
const path = require('path')

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  target: ['web', 'es5'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            targets: 'ie >= 11',
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}