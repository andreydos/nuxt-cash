const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['file-loader']
      },
      {
        test: /\.s?css$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../')
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.dirname(path.resolve(__dirname))
    }
  }
}
