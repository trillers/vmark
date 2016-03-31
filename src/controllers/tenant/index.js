var router = require('koa-router');
module.exports = function(app){
    //wechat
    app.use(require('./wechat-message')());

    app.use(require('./test')());

}