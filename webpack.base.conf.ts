import * as path from 'path'
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin'

function resolve(dir) {
    return path.join(__dirname, dir)
}

export default {
    entry: {
        browser: [
            resolve('app/App.tsx')
        ],
        mobile: [
            resolve('app/App-h5.tsx')
        ],
        flexible: [
            resolve('app/utils/flexible/flexible.js')
        ]
    },
    output: {
        path: resolve('dist'),
        filename: '[name].js',
        publicPath: './'
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
        rules: [
            {
                test: /\.json?$/,
                use: 'json-loader'
            },
            {
                test: /\.(tsx|ts)$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.pcss$/,
                use:
                    [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        'postcss-loader'
                    ]
            },
            {
                test: /\.css$/,
                use: 'css-loader!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
            },
            {
                test: /\.(woff(2)?|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'file-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: 'file-loader?name=i/[name].[ext]'
            }]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 3000,
            maxSize: 0,
            minChunks: 2,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                commons: {test: /[\\/]node_modules[\\/]/, name: "common", chunks: "all"}
            }
        }
    }
}
