var keyHelper = require('./keyHelper');
var helper = require('../../../common/kvs/tenantHelper');

var wechatIdAndOpenidToAt = function(wechatId, openid){
    return keyHelper.wechatBaseKey(wechatId) +  ':oauth:' + openid;
};

var Kv = function(context){ this.context = context; };

Kv.prototype.getAccessToken = helper.generateLoader({
    keyName: 'openid',
    valueName: 'oauth access token',
    keyGenerator: wechatIdAndOpenidToAt
});

Kv.prototype.saveAccessToken = helper.generateSaver({
    keyName: 'openid',
    valueName: 'oauth access token',
    keyGenerator: wechatIdAndOpenidToAt
});

Kv.prototype.deleteAccessToken = helper.generateDeleter({
    keyName: 'openid',
    valueName: 'oauth access token',
    keyGenerator: wechatIdAndOpenidToAt
});

module.exports = Kv;