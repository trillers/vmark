var cbUtil = require('../../../framework/callback');

var nIdToLikeNum = function(id){
    return 'nt:lk:' + id;
};

var Kv = function(context){
    this.context = context;
};
Kv.prototype.loadById = function(id, callback){
    var redis = this.context.redis.main;
    var key = nIdToLikeNum(id);
    redis.get(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to load like num by note id ' + id + ': ' + err,
            'Succeed to load like num by note id ' + id);
        cbUtil.handleSingleValue(callback, err, result);
    });
};

Kv.prototype.like = function(id, callback){
    var redis = this.context.redis.main;
    var key = nIdToLikeNum(id);
    redis.incr(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to like note by note id ' + id + ': ' + err,
            'Succeed to like note by note id ' + id);
        cbUtil.handleSingleValue(callback, err, result);
    });
};

Kv.prototype.unlike = function(id, callback){
    var redis = this.context.redis.main;
    var key = nIdToLikeNum(id);
    redis.decr(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to unlike note by id ' + id + ': ' + err,
            'Succeed to unlike note by id ' + id);
        cbUtil.handleSingleValue(callback, err, result);
    });
};

module.exports = Kv;