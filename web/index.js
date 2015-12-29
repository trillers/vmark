/**
 * Created by Allen on 2015/10/18.
 */
var proOrdev = true;

seajs.config({
    alias: {
        'sockjs': '/public/components/sockjs-client/dist/sockjs.min.js',
        'uuid': '/public/components/node-uuid/uuid.js',
        'jquery':'/public/components/cmd-jquery/jquery.js',
        'zepto': '/public/components/cmd-zepto/zepto',
        'isjs':'/web/js/app/is.js',
        'util':'/web/js/app/util.js',
        'seedriot':'/public/components/cmd-riot/riot+compiler.js'
    },
    vars: {
        'mainpath':'/web/js/app/index'
    },
    map: [
        ['','']
    ],
    preload: [
        'jquery','util','riot'
    ],
    debug: true,
    base: proOrdev?'/web':'/public',
    charset: 'utf-8'
});
seajs.use('{mainpath}',function(){
    console.info("resource loaded");
});