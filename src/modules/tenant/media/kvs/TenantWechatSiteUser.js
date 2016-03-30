var cbUtil = require('../../../../framework/callback');

var openidAndWechatIdToObjKey = function(wechatId, openid){
    return 'wmu:o:wcid' + wechatId + ':openid:' + openid;
};

var Kv = function(context){
    this.context = context;
};

Kv.prototype.loadByWechatIdAndOpenid = function(wechatId, openid, callback){
    var redis = this.context.redis.main;
    var key = openidAndWechatIdToObjKey(wechatId, openid);
    redis.hgetall(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to get wechat user by openid ' + openid + ' and wechatId ' + wechatId + ': ' + err,
            'Succeed to get wechat user by openid ' + openid + ' and wechatId ' + wechatId);

        if(result){
            result.crtOn = result.crtOn && result.crtOn !== 'null' ? new Date(result.crtOn) : null;
        }
        cbUtil.handleSingleValue(callback, err, result);
    });
};

Kv.prototype.saveByWechatIdAndOpenid = function(json, callback){
    var redis = this.context.redis.main;
    var openid = json.openid;
    var wechatId = json.wechatId;
    var key = openidAndWechatIdToObjKey(wechatId, openid);

    redis.hmset(key, json, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to save wechat user by openid ' + openid + ' and wechatId ' + wechatId + ': ' + err,
            'Succeed to save wechat user by openid ' + openid + ' and wechatId ' + wechatId);

        cbUtil.handleOk(callback, err, result, json);
    });
};

Kv.prototype.deleteByWechatIdAndOpenid = function(wechatId, openid, callback){
    var redis = this.context.redis.main;
    var key = openidAndWechatIdToObjKey(wechatId, openid);
    redis.del(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to del wechat user by openid ' + openid + ' and wechatId ' + wechatId + ': ' + err,
            'Succeed to del wechat user by openid ' + openid + ' and wechatId ' + wechatId);

        cbUtil.handleSingleValue(callback, err, result);
    });
};

module.exports = Kv;