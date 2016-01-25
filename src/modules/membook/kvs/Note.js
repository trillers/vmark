var cbUtil = require('../../../framework/callback');

var idToObjKey = function(id){
    return 'nt:o:id:' + id;
};

var Kv = function(context){
    this.context = context;
};
Kv.prototype.loadById = function(id, callback){
    var redis = this.context.redis.main;
    var key = idToObjKey(id);
    redis.hgetall(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to load note by id ' + id + ': ' + err,
            'Succeed to load note by id ' + id);
        cbUtil.handleSingleValue(callback, err, result);
    });
};
Kv.prototype.saveById = function(json, callback){
    var redis = this.context.redis.main;
    var id = json.id;
    var key = idToObjKey(id);
    redis.hmset(key, json, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to save note by id ' + id + ': ' + err,
            'Succeed to save note by id ' + id);
        cbUtil.handleOk(callback, err, result, json);
    });
};

Kv.prototype.deleteByIds = function(ids, callback){
    var redis = this.context.redis.main;
    var keys = ids.map(function(id){
        return idToObjKey(id)
    });
    redis.del(keys, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to delete notes by ids ' + err,
            'Succeed to delete notes by ids');
        cbUtil.handleSingleValue(callback, err, result);
    });
};

module.exports = Kv;