var cbUtil = require('../../../../framework/callback');

var openidToObjKey = function(openid){
    return 'te:md-usr:o:oid:' + openid;
};

var Kv = function(context){
    this.context = context;
};

Kv.prototype.loadByOpenid = function(openid, callback){
    var redis = this.context.redis.main;
    var key = openidToObjKey(openid);
    redis.hgetall(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to get wechat site user by openid ' + openid + ': ' + err,
            'Succeed to get wechat site user by openid ' + openid);

        if(result){
            result.crtOn = result.crtOn && result.crtOn !== 'null' ? new Date(result.crtOn) : null;
        }
        cbUtil.handleSingleValue(callback, err, result);
    });
};

Kv.prototype.saveByOpenid = function(json, callback){
    var redis = this.context.redis.main;
    var openid = json.openid;
    var key = openidToObjKey(openid);
    redis.hmset(key, json, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to save wechat site user by openid ' + openid + ': ' + err,
            'Succeed to save wechat site user by openid ' + openid);
        cbUtil.handleOk(callback, err, result, json);
    });
};

Kv.prototype.deleteByOpenid = function(openid, callback){
    var redis = this.context.redis.main;
    var key = openidToObjKey(openid);
    redis.del(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to delete wechat site user by openid ' + openid + ': ' + err,
            'Succeed to delete wechat site user by openid ' + openid);

        cbUtil.handleSingleValue(callback, err, result);
    });
};

module.exports = Kv;