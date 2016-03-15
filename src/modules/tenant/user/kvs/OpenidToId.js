var cbUtil = require('../../../../framework/callback');

var openidToIdKey = function(openid){
    return 'usr:id:oid:' + openid;
};

var Kv = function(context){
    this.context = context;
};

Kv.prototype.get = function(openid, callback){
    var redis = this.context.redis.main;
    var key = openidToIdKey(openid);
    redis.get(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to get user id by openid ' + openid + ': ' + err,
            'Succeed to get user id ' + result + ' by openid ' + openid);
        cbUtil.handleSingleValue(callback, err, result);
    });
};

Kv.prototype.set = function(openid, id, callback){
    var redis = this.context.redis.main;
    var key = openidToIdKey(openid);
    redis.set(key, id, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to link openid ' + openid + ' to id ' + id + ': ' + err,
            'Succeed to link openid ' + openid + ' to id ' + id);
        cbUtil.handleOk(callback, err, result);
    });
};

Kv.prototype.delete = function(openid, callback){
    var redis = this.context.redis.main;
    var key = openidToIdKey(openid);
    redis.del(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to unlink user id by openid ' + openid + ': ' + err,
            'Succeed to unlink user id by openid ' + openid);
        cbUtil.handleSingleValue(callback, err, result);
    });
};

module.exports = Kv;