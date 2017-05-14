const path = require('path')
const fs = require('fs')

const commonConfig = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
}

const serverConfig = Object.assign({
  entry: './src/server.js',
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'server.js'
  },
  target: 'node',
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
    'react-dom/server', 'react/addons'
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {}),
  node: {
    __filename: true,
    __dirname: true
  }
}, commonConfig)

const clientConfig = Object.assign({
  entry: './src/client.js',
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'client.js'
  },
  devtool: 'inline-source-map'
}, commonConfig)

module.exports = [serverConfig, clientConfig]
