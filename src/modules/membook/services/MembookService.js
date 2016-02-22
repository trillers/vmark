var co = require('co');
var settings = require('@private/vmark-settings');
var wechatApi = require('../../wechat/common/api').api;

var Service = function(context){
    this.context = context;
};

Service.prototype.handleOnSubscription = function(openid, callback){
    var logger = this.context.logger;
    var authenticationService = this.context.services.authenticationService;
    var notebookService = this.context.services.notebookService;
    var userBizKv = this.context.kvs.userBiz;

    co(function*(){
        try{
            var auth = yield authenticationService.signupOnSubscriptionAsync(openid);
            var userid = auth.user._id;
            var userBiz = yield userBizKv.loadByIdAsync(userid);
            if(userBiz){
                if(callback) callback(null, auth);
            }
            else{
                var notebook = yield notebookService.createAsync({title: '默认', initiator: userid});
                yield userBizKv.saveByIdAsync(userid, {latest: notebook._id});
            }
            var url = 'http://' + settings.app.domain + '/note';
            var logoUrl = 'http://' + settings.app.domain + '/public/images/logo_share_48x48.jpg';
            var articles = [{
                "title":"友趣笔记",
                "description": "点击访问",
                "url": url,
                "picurl": logoUrl
            }];
            wechatApi.sendNews(openid, articles, function (err) { if(err) console.error(err); });
            if(callback) callback(null, auth);
        }catch(err){
            logger.error('Fail to sign up on subscription: ' + err);
            if(callback) callback(err);
        }
    });
};

module.exports = Service;