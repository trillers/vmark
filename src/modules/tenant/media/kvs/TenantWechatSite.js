var util = require('util');
var cbUtil = require('../../../../framework/callback');
var WechatMediaKv = require('../../../media/kvs/WechatMedia');

var originalIdToTenantWechatSiteKey = function(originalId){
    return 'te:md:oid:' + originalId;
};

var Kv = function(context){
    this.context = context;
};

util.inherits(Kv, WechatMediaKv);

Kv.prototype.getTenantWechatSiteByOriginalId = function(originalId, callback){
    var redis = this.context.redis.main;
    var key = originalIdToTenantWechatSiteKey(originalId);
    redis.hgetall(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to get tenant wechat site by originalId: ' + originalId + ' err:' + err,
            'Succeed to get tenant wechat site by originalId:' + originalId);
        cbUtil.handleSingleValue(callback, err, result);
    });
};

Kv.prototype.setTenantWechatSite = function(json, callback){
    var redis = this.context.redis.main;
    var key = originalIdToTenantWechatSiteKey(json.originalId);
    json.crtOn && delete json.crtOn;
    redis.hmset(key, json, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to set tenant wechat site ' + json._id + ': ' + err,
            'Succeed to set tenant wechat site ' + json._id);
        cbUtil.handleOk(callback, err, result);
    });
};

module.exports = Kv;