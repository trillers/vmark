var cbUtil = require('../../../../framework/callback');

var idToObjKey = function(id){
    return 'sd:cs:o:id:' + id;
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
            'Fail to get catalog by id ' + id + ': ' + err,
            'Succeed to get catalog by id ' + id);
        if(result && result.banners){
            result.banners = result.banners.split(',');
        }

        cbUtil.handleSingleValue(callback, err, result);
    });
};

Kv.prototype.saveById = function(json, callback){
    var redis = this.context.redis.main;
    var id = json.id || json._id;
    var key = idToObjKey(id);
    redis.hmset(key, json, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to save catalog by id ' + id + ': ' + err,
            'Succeed to save catalog by id ' + id);
        cbUtil.handleOk(callback, err, result, json);
    });
};

Kv.prototype.delById = function(id, callback){
    var redis = this.context.redis.main;
    var key = idToObjKey(id);
    redis.del(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to delete catalog by id ' + id + ': ' + err,
            'Succeed to delete catalog by id ' + id);
        cbUtil.handleSingleValue(callback, err, result);
    });
};

module.exports = Kv;