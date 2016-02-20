var cbUtil = require('../../../framework/callback');

var idToBizKey = function(id){
    return 'usr:biz:id:' + id;
};

var Kv = function(context){
    this.context = context;
};

Kv.prototype.loadById = function(id, callback){
    var redis = this.context.redis.main;
    var key = idToBizKey(id);
    redis.hgetall(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to get user biz by id ' + id + ': ' + err,
            'Succeed to get user biz by id ' + id);

        cbUtil.handleSingleValue(callback, err, result);
    });
};

Kv.prototype.saveById = function(id, json, callback){
    var redis = this.context.redis.main;
    var key = idToBizKey(id);

    redis.hmset(key, json, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to save user biz by id ' + id + ': ' + err,
            'Succeed to save user biz by id ' + id);
        cbUtil.handleOk(callback, err, result, json);
    });
};

Kv.prototype.deleteById = function(id, callback){
    var redis = this.context.redis.main;
    var key = idToBizKey(id);
    redis.del(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to delete user biz by id ' + id + ': ' + err,
            'Succeed to delete user biz by id ' + id);

        cbUtil.handleSingleValue(callback, err, result);
    });
};

module.exports = Kv;