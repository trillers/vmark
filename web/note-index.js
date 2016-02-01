/**
 * Created by Allen on 2015/10/18.
 */
var proOrdev = true;

seajs.config({
    alias: {
        'jquery':'/public/components/cmd-jquery/jquery.min.js',
        'util':'/web/js/app/util.js',
        'seedriot':'/public/components/cmd-riot/riot+compiler.js'
    },
    vars: {
        'mainpath':'/web/js/app/note-index'
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