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
            jquery: path.join(__dirname, '../../public/components/cmd-jquery/jquery.min.js'),
            seedriot:path.join(__dirname, '../../public/components/cmd-riot/riot.min.js'),
            bootstrap: path.join(__dirname, '../../public/components/bootstrap/dist/js/bootstrap.min.js'),
            summernote: path.join(__dirname, '../../node_modules/summernote/dist/summernote.min.js')
        }
    },
    plugins: [commonsPlugin,
        new webpack.DefinePlugin({
            "require.specified": "require.resolve"
        }),
        //new webpack.DefinePlugin({
        //    "CodeMirror": 'codemirror'
        //})
    ],
    //devServer: {
    //    contentBase: './public'
    //}
    //webpack-dev-server --inline --hot
};