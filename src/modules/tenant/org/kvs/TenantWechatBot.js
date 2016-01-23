var cbUtil = require('../../../../framework/callback');

var botOidToOpOidKey = function(oid){
    return 'op:oid:bot:oid:' + oid;
};

var opOidToBotOidKey = function(oid){
    return 'bot:oid:op:oid:' + oid;
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
            'Fail to get operator openid for bot: ' + botOpenid + ': ' + err,
            'Succeed to get operator openid for bot: ' + botOpenid);
        cbUtil.handleSingleValue(callback, err, result);
    });
};

Kv.prototype.setOperatorOpenid = function(botOpenid, operatorId, callback){
    var redis = this.context.redis.main;
    var key = botOidToOpOidKey(botOpenid);
    redis.set(key, operatorId, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to set operator openid for bot: ' + botOpenid + ': ' + err,
            'Succeed to set operator openid for bot: ' + botOpenid);
        cbUtil.handleOk(callback, err, result, operatorId);
    });
};

/**
 * Get bot openid by operator openid
 * @param operatorId operator's openid
 * @param callback
 */
Kv.prototype.getBotOpenid = function(operatorId, callback){
    var redis = this.context.redis.main;
    var key = opOidToBotOidKey(operatorId);
    redis.get(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to get bot openid for operator: ' + operatorId + ': ' + err,
            'Succeed to get bot openid for operator: ' + operatorId);
        cbUtil.handleSingleValue(callback, err, result);
    });
};

/**
 * Link operator openid to bot openid
 * @param operatorId operator's openid
 * @param botOpenid bot's openid
 * @param callback
 */
Kv.prototype.setBotOpenid = function(operatorId, botOpenid, callback){
    var redis = this.context.redis.main;
    var key = opOidToBotOidKey(operatorId);
    redis.set(key, botOpenid, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to set bot openid for operator: ' + operatorId + ': ' + err,
            'Succeed to set bot openid for operator: ' + operatorId);
        cbUtil.handleOk(callback, err, result, botOpenid);
    });
};

module.exports = Kv;