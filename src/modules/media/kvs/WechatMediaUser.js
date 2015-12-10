var cbUtil = require('../../../framework/callback');

var idToObjKey = function(id){
    return 'md:usr:o:id:' + id;
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
            'Fail to get wechat media user by id ' + id + ': ' + err,
            'Succeed to get wechat media user by id ' + id);

        if(result){
            result.crtOn = result.crtOn && result.crtOn !== 'null' ? new Date(result.crtOn) : null;
        }
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
            'Fail to save wechat media user by id ' + id + ': ' + err,
            'Succeed to save wechat media user by id ' + id);
        cbUtil.handleOk(callback, err, result, json);
    });
};

module.exports = Kv;