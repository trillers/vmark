var util = require('util');
var cbUtil = require('../../../../framework/callback');
var WechatMediaKv = require('../../../media/kvs/WechatMedia');

var tenantKey = function(){
    return 'te:md:id';
};

var Kv = function(context){
    this.context = context;
};

util.inherits(Kv, WechatMediaKv);

Kv.prototype.getTenantWechatSiteId = function(callback){
    var redis = this.context.redis.main;
    var key = tenantKey();
    redis.get(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to get tenant wechat siteid: ' + err,
            'Succeed to get tenant wechat site id ' + result);
        cbUtil.handleSingleValue(callback, err, result);
    });
};

Kv.prototype.setTenantWechatSiteId = function(id, callback){
    var redis = this.context.redis.main;
    var key = tenantKey();
    redis.set(key, id, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to set tenant wechat siteid ' + id + ': ' + err,
            'Succeed to set tenant wechat site id ' + id);
        cbUtil.handleOk(callback, err, result);
    });
};

module.exports = Kv;