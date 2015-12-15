var util = require('util');
var cbUtil = require('../../../../framework/callback');
var WechatMediaKv = require('../../../media/kvs/WechatMedia');

var botOidToOpOidKey = function(oid){
    return 'op:oid:bot:oid:' + oid;
};

var Kv = function(context){
    this.context = context;
};

util.inherits(Kv, WechatMediaKv);

Kv.prototype.getOperatorOpenid = function(botOpenid, callback){
    var redis = this.context.redis.main;
    var key = botOidToOpOidKey(botOpenid);
    //redis.get(key, function(err, result){
    //    cbUtil.logCallback(
    //        err,
    //        'Fail to get platform wechat siteid: ' + err,
    //        'Succeed to get platform wechat site id ' + result);
    //    cbUtil.handleSingleValue(callback, err, result);
    //});
};

Kv.prototype.setOperatorOpenid = function(botOpenid, operatorId, callback){
    var redis = this.context.redis.main;
    var key = botOidToOpOidKey(botOpenid);
    //redis.set(key, id, function(err, result){
    //    cbUtil.logCallback(
    //        err,
    //        'Fail to set platform wechat siteid ' + id + ': ' + err,
    //        'Succeed to set platform wechat site id ' + id);
    //    cbUtil.handleOk(callback, err, result);
    //});
};

module.exports = Kv;