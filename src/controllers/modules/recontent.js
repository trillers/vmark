var util = require('../../app/util');
var Router = require('koa-router');
var context = require('../../context/context');
var recontentService = context.services.recontentService;
module.exports = function(){
    var router = new Router();
    require('../../app/routes-spa')(router);

    router.get('/tenant-recontent-:id', function *(){
        var tenant = {name: '包三哥', type: 'p'};
        yield this.render('tenant-recontent', {tenant: tenant});
    });

    router.get('/recontent-set', function *(){
        var url = this.query.url;
        var feedback = this.query.feedback;
        yield this.render('recontent-set', {url: url, feedback: feedback});
    });

    router.get('/recontent-gen', function *(){
        var url = this.query.url;
        //var url = 'http://mp.weixin.qq.com/s?__biz=MzAxNDAwNTUyMg==&mid=401738371&idx=5&sn=a4d7e72acd825d809130688f5b963763&3rd=MzA3MDU4NTYzMw==&scene=6#rd';
        //var url = 'http://mp.weixin.qq.com/s?__biz=MzA5Mzc3NTUwNw==&mid=402872868&idx=4&sn=a203d59bba7615ceed3ab40be6dd17c8&3rd=MzA3MDU4NTYzMw==&scene=6#rd';
        if(!url){
            this.redirect('/recontent-set');
            return;
        }
        else if(url.indexOf('mp.weixin.qq.com')==-1){
            this.redirect('/recontent-set?feedback=not_weixin&url=' + url);
            return;
        }

        var publishUri = yield recontentService.generateAsync(url);
        var contentUri = '/public/uploads/' + publishUri;
        var me = this;
        yield new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve();
            }, 1000);
        });
        me.redirect(contentUri);
    });
    return router.routes();
};