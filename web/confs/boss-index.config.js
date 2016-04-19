var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var path = require('path');
var entryFileName = "boss-index";

module.exports = {
    entry: {
        index: '../../web/' + entryFileName + '.js'
    },
    output: {
        path: path.join(__dirname , '/web/build/js'),
        filename: entryFileName + '.js'
    },
    resolve: {
        extensions: ['', '.js'],
        root: __dirname,
        alias: {
            'sockjs': '/public/components/sockjs-client/dist/sockjs.min.js',
            'jquery':'/public/components/cmd-jquery/jquery.js',
            'zepto': '/public/components/cmd-zepto/zepto',
            'isjs':'/web/js/app/is.js',
            'util':'/web/js/app/util.js',
            'seedriot':'/public/components/cmd-riot/riot+compiler.js'
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