/**
 * Created by Allen on 2015/10/18.
 */
var proOrdev = true;

seajs.config({
    alias: {
        'sockjs': '/public/components/sockjs-client/dist/sockjs.min.js',
        'jquery':'/public/components/cmd-jquery/jquery.min.js',
        'util':'/web/js/app/util.js',
        'seedriot':'/public/components/cmd-riot/riot+compiler.js',
        'bootstrap': '/public/components/bootstrap/dist/js/bootstrap.min.js',
        'summernote': '/public/components/summernote/dist/summernote.min.js'
    },
    vars: {
        'mainpath':'/web/js/app/boss-tenant-index'
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