var cbUtil = require('../../../framework/callback');

var openidToAtKey = function(openid){ return 'wc:at:oid:' + openid; };

var Kv = function(context){ this.context = context; };

Kv.prototype.getAccessToken = function(openid, callback){
    var redis = this.context.redis.main;
    var key = openidToAtKey(openid);
    redis.hgetall(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to get user oauth access token by openid ' + openid + ': ' + err,
            'Succeed to get user oauth access token by openid ' + openid);
        cbUtil.handleSingleValue(callback, err, result);
    });
};

Kv.prototype.saveAccessToken = function(openid, accessToken, callback){
    var redis = this.context.redis.main;
    var key = openidToAtKey(openid);
    redis.hmset(key, accessToken, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to save user oauth access token by openid ' + openid + ': ' + err,
            'Succeed to save user oauth access token by openid ' + openid);
        cbUtil.handleOk(callback, err, result, accessToken);
    });
};

module.exports = Kv;