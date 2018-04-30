import * as webpack from 'webpack'
import * as path from 'path'
import * as merge from 'webpack-merge'
import baseConfig from './webpack.base.conf'

import * as clean from 'clean-webpack-plugin'
import * as InlineManifestWebpackPlugin from 'inline-manifest-webpack-plugin'
import * as autoprefixer from 'autoprefixer'
import * as HtmlWebpackPlugin from 'html-webpack-plugin'
import * as ExtractTextPlugin from 'extract-text-webpack-plugin'

export default merge(baseConfig, {
  entry: {
    common: ['react', 'react-router']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[chunkhash].min.js'
  },
  plugins: [
    new clean(['./dist']),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common-[chunkhash].min.js',
      chunks: ['browser', 'mobile']
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      filename: 'manifest-[chunkhash].min.js',
      chunks: ['common']
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: 'app/entry/index.html',
      filename: 'index.html',
      chunks: ['common', 'browser', 'ieCompatible'],
      chunksSortMode: function (chunk1, chunk2) {
        return chunk2.id - chunk1.id
      },
      minify: {
        collapseWhitespace: true,
        processConditionalComments: true
      }
    }),
    new HtmlWebpackPlugin({
      template: 'app/entry/index-h5.html',
      filename: 'index-h5.html',
      chunks: ['common', 'mobile', 'flexible'],
      chunksSortMode: function (chunk1, chunk2) {
        return chunk2.id - chunk1.id
      },
      minify: {
        collapseWhitespace: true
      }
    }),
    new InlineManifestWebpackPlugin(),
    new ExtractTextPlugin('[name]-[contenthash].min.css'),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer(),
        ]
      }
    })
  ]
})
