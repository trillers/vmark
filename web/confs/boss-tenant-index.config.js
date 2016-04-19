var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var path = require('path');
var entryFileName = "boss-tenant-index";

module.exports = {
    entry: {
        index: path.join(__dirname, '../../web/build/js/app/' + entryFileName + '.js')
    },
    output: {
        path: path.join(__dirname , '/web/build/js'),
        filename: entryFileName + '.js'
    },
    resolve: {
        extensions: ['', '.js'],
        root: __dirname,
        alias: {
            sockjs: path.join(__dirname, '../../public/components/sockjs-client/dist/sockjs.min.js'),
            jquery: path.join(__dirname, '../../public/components/cmd-jquery/jquery.js'),
            zepto: path.join(__dirname, '../../public/components/cmd-zepto/zepto'),
            isjs:path.join(__dirname, '../../web/js/app/is.js'),
            util:path.join(__dirname, '../../web/js/app/util.js'),
            seedriot:path.join(__dirname, '../../public/components/cmd-riot/riot.min.js'),
            wx: path.join(__dirname, '../../web/js/app/jssdk.js')
        }
    },
    plugins: [commonsPlugin],
    //devServer: {
    //    contentBase: './public'
    //}
    //webpack-dev-server --inline --hot
};