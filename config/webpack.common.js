const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        use: [
          { loader: 'tslint-loader' }
        ]
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts' ]
  },
  plugins: [
    new CleanWebpackPlugin(['./dist'], {
      root: path.resolve(__dirname, '../')
    })
  ],
  output: {
    filename: 'micromouse.js',
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true
  }
}