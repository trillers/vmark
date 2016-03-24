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
            riot: '../../../../public/components/cmd-riot/riot+compiler.js',
            wx: '../../../../web/js/app/jssdk.js'
        }
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    },
    plugins: [commonsPlugin]
};