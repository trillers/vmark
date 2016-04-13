var context = require('../../../context/context');
var oauthTokenKv = context.kvs.tenantWechatOAuthToken;

var store = {
    getAccessTokenGenerator: function(wechatId){
        return function*(openid){
            return yield oauthTokenKv.getAccessTokenAsync(wechatId, openid);
        };
    },
    saveAccessTokenGenerator: function(wechatId){
        return function*(openid, token){
            return yield oauthTokenKv.saveAccessTokenAsync(wechatId, openid, token);
        };
    }
};

module.exports = store;