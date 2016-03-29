var keyHelper = require('./keyHelper');
var helper = require('../../../common/kvs/helper');

var accessTokenKey = function(wechatId){
    return keyHelper.wechatBaseKey(wechatId) +  ':at';
};

var ticketTokenKey = function(wechatId){
    return keyHelper.wechatBaseKey(wechatId) +  ':tt';
};

var Kv = function(context){
    this.context = context;
};

Kv.prototype.getAccessToken = helper.generateLoader({
    keyName: 'wechat id',
    valueName: 'access token',
    keyGenerator: accessTokenKey
});

Kv.prototype.saveAccessToken = helper.generateSaver({
    keyName: 'wechat id',
    valueName: 'access token',
    keyGenerator: accessTokenKey
});

Kv.prototype.deleteAccessToken = helper.generateDeleter({
    keyName: 'wechat id',
    valueName: 'access token',
    keyGenerator: accessTokenKey
});

Kv.prototype.getTicketToken = helper.generateLoader({
    keyName: 'wechat id',
    valueName: 'ticket token',
    keyGenerator: ticketTokenKey
});

Kv.prototype.saveTicketToken = helper.generateSaver({
    keyName: 'wechat id',
    valueName: 'ticket token',
    keyGenerator: ticketTokenKey
});

Kv.prototype.deleteTicketToken = helper.generateDeleter({
    keyName: 'wechat id',
    valueName: 'ticket token',
    keyGenerator: ticketTokenKey
});

module.exports = Kv;