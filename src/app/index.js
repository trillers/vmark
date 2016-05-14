var koa = require('koa');
var app = module.exports = koa();
var views = require('koa-views');
var path = require('path');
var serve = require('koa-static');

app.use(views(path.join(__dirname, '../views'), { map: { html: 'swig' }}));

app.on('error', function(err){
    logger.error(err);
});

app.use(serve(path.join(__dirname, '../../node_modules')));
app.use(serve(path.join(__dirname, '../../web')));

app.use(function*(){
    yield this.render('todo');
})

app.listen(3000, '127.0.0.1');
