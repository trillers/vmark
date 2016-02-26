/**
 * Created by Allen on 2015/10/18.
 */
var proOrdev = true;

seajs.config({
    alias: {
        'jquery':'/public/components/cmd-jquery/jquery.min.js',
        'util':'/web/js/app/util.js',
        'seedriot':'/public/components/cmd-riot/riot+compiler.js',
        'tocca': '/web/spm/spm_modules/tocca/0.2.1/Tocca.min.js'
    },
    vars: {
        'mainpath':'/web/js/app/index'
    },
    map: [
        ['','']
    ],
    preload: [
        'jquery','util','riot', 'tocca'
    ],
    debug: true,
    base: proOrdev?'/web':'/public',
    charset: 'utf-8'
});
seajs.use('{mainpath}',function(){
    console.info("resource loaded");
});