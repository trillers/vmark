var Router = require('koa-router');

module.exports = function(app){
    var router = new Router();

    router.get('/mock-login', function *(){
        yield this.render('mock-login');
    });

    app.use(router.routes());
};