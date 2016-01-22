var cbUtil = require('../../../framework/callback');

var atToOpenidKey = function(at){
    return 'usr:oid:at:' + at;
};

var Kv = function(context){
    this.context = context;
};

Kv.prototype.get = function(at, callback){
    var redis = this.context.redis.main;
    var key = atToOpenidKey(at);
    redis.get(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to get user openid by agent token ' + at + ': ' + err,
            'Succeed to get user openid ' + result + ' by agent token ' + at);
        cbUtil.handleSingleValue(callback, err, result);
    });
};

Kv.prototype.set = function(at, openid, callback){
    var redis = this.context.redis.main;
    var key = atToOpenidKey(at);
    redis.set(key, openid, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to link agent token ' + at + ' to openid ' + openid + ': ' + err,
            'Succeed to link agent token ' + at + ' to openid ' + openid);
        cbUtil.handleOk(callback, err, result);
    });
};

Kv.prototype.delete = function(at, callback){
    var redis = this.context.redis.main;
    var key = atToOpenidKey(at);
    redis.del(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to unlink user openid by agent token ' + at + ': ' + err,
            'Succeed to unlink user openid by agent token ' + at);
        cbUtil.handleSingleValue(callback, err, result);
    });
};

module.exports = Kv;