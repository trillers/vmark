var cbUtil = require('../../../framework/callback');

var prefixToKeys = function(prefix){
    return 'p:'+ prefix + '>ids'
};
var Kv = function(context){
    this.context = context;
};

Kv.prototype.addSocketKey = function(prefix, socketKey, callback){
    var redis = this.context.redis.main;
    var key = prefixToKeys(prefix);
    redis.sadd(key, socketKey, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to save socket key by prefix ' + prefix + ': ' + err,
            'Succeed to save socket key by prefix ' + prefix);
        cbUtil.handleSingleValue(callback, err, result);
    });
};

Kv.prototype.getSocketKey = function(prefix, callback){
    var redis = this.context.redis.main;
    var key = prefixToKeys(prefix);
    redis.smembers(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to get socket key by prefix ' + prefix + ': ' + err,
            'Succeed to save socket key by prefix ' + prefix);
        cbUtil.handleSingleValue(callback, err, result);
    });
};

Kv.prototype.remSocketKey = function(prefix, id, callback){
    var redis = this.context.redis.main;
    var key = prefixToKeys(prefix);
    redis.srem(key, id, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to rem socket key' + ': ' + err,
            'Succeed to rem socket key');
        cbUtil.handleSingleValue(callback, err, result);
    })
};

module.exports = Kv;