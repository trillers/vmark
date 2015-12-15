var util = require('util');
var cbUtil = require('../../../../framework/callback');

var botOidToOpOidKey = function(oid){
    return 'op:oid:bot:oid:' + oid;
};

var Kv = function(context){
    this.context = context;
};

Kv.prototype.getOperatorOpenid = function(botOpenid, callback){
    var redis = this.context.redis.main;
    var key = botOidToOpOidKey(botOpenid);
    redis.get(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to get setOperatorOpenid, botOpenid: ' + botOpenid + ': ' + err,
            'Succeed to get setOperatorOpenid, botOpenid: ' + botOpenid);
        cbUtil.handleSingleValue(callback, err, result);
    });
};

Kv.prototype.setOperatorOpenid = function(botOpenid, operatorId, callback){
    var redis = this.context.redis.main;
    var key = botOidToOpOidKey(botOpenid);
    redis.set(key, operatorId, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to set setOperatorOpenid, botOpenid: ' + botOpenid + ': ' + err,
            'Succeed to set setOperatorOpenid, botOpenid: ' + botOpenid);
        cbUtil.handleOk(callback, err, result, operatorId);
    });
};

module.exports = Kv;