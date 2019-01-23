import * as webpack from 'webpack'

import * as merge from 'webpack-merge'
import baseConfig from './webpack.base.conf'
import * as HtmlWebpackPlugin from 'html-webpack-plugin'
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin'
import * as BundleAnalyzerPlugin from 'webpack-bundle-analyzer'

Object.keys(baseConfig.entry).forEach(function (name) {
    baseConfig.entry[name] = ['webpack-hot-middleware/client?reload=true'].concat(baseConfig.entry[name])
})

export default merge(baseConfig, {
    devtool: 'eval-source-map',
    output: {
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html',
            filename: 'index.html',
            inject: false,
            chunks: ['browser', 'ieCompatible']
        }),
        new HtmlWebpackPlugin({
            template: 'app/index-h5.html',
            inject: false,
            filename: 'index-h5.html',
            chunks: ['mobile', 'flexible']
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new BundleAnalyzerPlugin.BundleAnalyzerPlugin()
    ],
    mode: 'development'
})
