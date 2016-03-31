var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var path = require('path');

module.exports = {
    entry: {
        index: './web/marketing/sd/js/index.js'
    },
    output: {
        path: path.join(__dirname , '/web/build/js'),
        filename: 'build.js'
    },
    resolve: {
        extensions: ['', '.js'],
        root: __dirname,
        alias: {
            fetch: '../../../../public/components/fetch/fetch.js',
            jQuery: '../../../../web/marketing/sd/framework/jQueryLean.js',
            wx: '../../../../web/js/app/jssdk.js',
            h2: '../../../../web/js/h2/index.js'
        }
    },
    module: {
        preLoaders: [
            {
                test: /\.html$/,
                loader: 'riotjs-loader',
                query: {
                    type: 'none'
                }
            }
        ],
        loaders: [{
            test: /\.js$/,
            exclude: path.resolve(__dirname, '../../../../public'),
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    },
    plugins: [commonsPlugin,
        new webpack.ProvidePlugin({
            riot: 'riot'
        })
    ],
    //devServer: {
    //    contentBase: './public'
    //}
    //webpack-dev-server --inline --hot
};