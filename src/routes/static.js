var staticServer = require('koa-static');
var mount = require('koa-mount');
var path = require('path');

module.exports = function(app){
    //app.use(staticServer(path.join(__dirname, '../../public')));
    //app.use(staticServer(path.join(__dirname, '../../web')));
    app.use(mount('/public', staticServer(path.join(__dirname, '../../public'))));
    app.use(mount('/web', staticServer(path.join(__dirname, '../../web'))));

}