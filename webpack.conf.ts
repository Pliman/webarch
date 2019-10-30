import * as path from 'path'
import * as webpack from 'webpack'

import * as HtmlWebpackPlugin from 'html-webpack-plugin'
import * as ExtractTextPlugin from 'extract-text-webpack-plugin'


function resolve(dir) {
  return path.join(__dirname, dir)
}

export default {
  entry: {
    browser: [
      resolve('app/entry/App.tsx')
    ]
  },
  devtool: 'eval-source-map',
  output: {
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: [
      resolve('app'),
      resolve('node_modules')
    ],
    alias: {
      app: resolve('app'),
      components: resolve('app/components'),
      utils: resolve('app/utils'),
      constants: resolve('app/config'),
    }
  },
  module: {
    loaders: [
      {
        test: /\.json?$/,
        loader: 'json-loader'
      },
      {
        test: /\.(tsx|ts)$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.pcss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader', options: {importLoaders: 1}},
            'postcss-loader'
          ],
        }),
      },
      {
        test: /\.css$/,
        loader: 'css-loader!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
      },
      {
        test: /\.(woff(2)?|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'file-loader?name=i/[name].[ext]'
      }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/entry/index.html',
      filename: 'index.html',
      inject: false,
      chunks: ['browser', 'ieCompatible']
    }),
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
}
