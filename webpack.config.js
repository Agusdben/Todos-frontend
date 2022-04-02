const HTML_WEBPACK_PLUGIN = require('html-webpack-plugin')

const htmlPlugin = new HTML_WEBPACK_PLUGIN({
  favicon: './public/favicon.ico',
  template: './public/index.html',
  filename: 'index.html'
})

module.exports = {
  output: {
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [htmlPlugin]
}
