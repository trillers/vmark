var koa = require('koa');
var app = module.exports = koa();
var views = require('koa-views');
var logging = require('./logging');
var logger = require('./logging').logger;
var path = require('path');
var settings = require('vmark-settings');
var koaBody = require('koa-body');

app.env = process.env.NODE_ENV || settings.env.NODE_ENV;
app.proxy = true;
app.port =  process.env.PORT || settings.env.port;
app.bindip =  process.env.BINDIP || settings.env.bindIp;

app.use(logging.generatorFunc);
app.use(views(path.join(__dirname, '../views'), { map: { html: 'swig' }}));
app.use(koaBody({multipart:true, formidable:{keepExtensions: true, uploadDir: path.join(__dirname, '../../public/uploads')}}));

//router
require('../routes')(app);

//404
app.use(function *pageNotFound(next) {
    this.response.body = yield this.render('404');
});

//error
app.on('error', function(err){
    logger.error(err);
});

var system = require('./system');
system.addMember('application', app);
app.listen(app.port, app.bindip, function(){
    logger.info('The server is binding on '+ app.bindip +' and listening on port ' + app.port + ' in ' + app.env );
    system.memberUp(app);
});
