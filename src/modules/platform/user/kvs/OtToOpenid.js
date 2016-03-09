var cbUtil = require('../../../../framework/callback');

var otToOpenidKey = function(ot){
    return 'usr:oid:ot:' + ot;
};

var Kv = function(context){
    this.context = context;
};

Kv.prototype.get = function(ot, callback){
    var redis = this.context.redis.main;
    var key = otToOpenidKey(ot);
    redis.get(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to get user openid by open token ' + ot + ': ' + err,
            'Succeed to get user openid ' + result + ' by open token ' + ot);
        cbUtil.handleSingleValue(callback, err, result);
    });
};

Kv.prototype.set = function(ot, openid, callback){
    var redis = this.context.redis.main;
    var key = otToOpenidKey(ot);
    redis.set(key, openid, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to link open token ' + ot + ' to openid ' + openid + ': ' + err,
            'Succeed to link open token ' + ot + ' to openid ' + openid);
        cbUtil.handleOk(callback, err, result);
    });
};

Kv.prototype.delete = function(ot, callback){
    var redis = this.context.redis.main;
    var key = otToOpenidKey(ot);
    redis.del(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to unlink user openid by open token ' + ot + ': ' + err,
            'Succeed to unlink user openid by open token ' + ot);
        cbUtil.handleSingleValue(callback, err, result);
    });
};

module.exports = Kv;