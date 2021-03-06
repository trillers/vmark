var koa = require('koa');
var app = module.exports = koa();
var views = require('koa-views');
var logging = require('./logging');
var logger = require('./logging').logger;
var path = require('path');
var settings = require('@private/vmark-settings');
var koaBody = require('koa-body');

app.env = process.env.NODE_ENV || settings.env.mode;
app.proxy = true;
app.port =  process.env.PORT || settings.env.port;
app.bindip =  process.env.BINDIP || settings.env.bindIp;

app.use(logging.generatorFunc);
app.use(views(path.join(__dirname, '../views'), { map: { html: 'swig' }}));
app.use(koaBody({jsonLimit: '50mb', formLimit: '10mb', textLimit: '10mb', multipart:true, formidable:{keepExtensions: true, uploadDir: path.join(__dirname, '../../public/uploads')}}));

//router
require('../routes')(app);

//ws
var server = require('./ws')(app).server;

//404
app.use(function *pageNotFound(next) {
    this.response.body = yield this.render('404');
});

//error
app.on('error', function(err){
    logger.error(err);
});

server.listen(app.port, app.bindip, function(){
    logger.info('Http server is binding on '+ app.bindip +' and listening on port ' + app.port + ' in ' + app.env );
});

//process.on('uncaughtException', function(err){
//    console.log(`Caught exception: ${err}`);
//});

