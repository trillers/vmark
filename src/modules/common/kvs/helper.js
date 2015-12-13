var cbUtil = require('../../../framework/callback');
var helper = {};

helper.generateLoader = function(config){
    var keyGenerator = config.keyGenerator;
    var postHandler = config.postHandler;
    var okPrefix = 'Succeed to load ' +config.objName+ ' by ' +config.idName;
    var errPrefix = 'Fail to load ' +config.objName+ ' by ' +config.idName;
    return function(id, callback){
        var redis = this.context.redis.main;
        redis.hgetall(keyGenerator(id), function(err, result){
            cbUtil.logCallback(
                err,
                errPrefix + ' ' + id + ': ' + err,
                okPrefix + ' ' + id);

            if(result && postHandler){
                result = postHandler(result);
            }
            cbUtil.handleSingleValue(callback, err, result);
        });
    };
};

helper.generateDeleter = function(config){
    var keyGenerator = config.keyGenerator;
    var okPrefix = 'Succeed to delete ' +config.objName+ ' by ' +config.idName;
    var errPrefix = 'Fail to delete ' +config.objName+ ' by ' +config.idName;
    return function(id, callback){
        var redis = this.context.redis.main;
        redis.del(keyGenerator(id), function(err, result){
            cbUtil.logCallback(
                err,
                errPrefix + ' ' + id + ': ' + err,
                okPrefix + ' ' + id);

            cbUtil.handleSingleValue(callback, err, result);
        });
    };
};

helper.generateSaver = function(config){
    var keyGenerator = config.keyGenerator;
    var preHandler = config.preHandler;
    var okPrefix = 'Succeed to save ' +config.objName+ ' by ' +config.idName;
    var errPrefix = 'Fail to save ' +config.objName+ ' by ' +config.idName;
    return function(id, obj, callback){
        var redis = this.context.redis.main;
        if(preHandler){obj = preHandler(obj);}
        redis.hmset(keyGenerator(id), obj, function(err, result){
            cbUtil.logCallback(
                err,
                errPrefix + ' ' + id + ': ' + err,
                okPrefix + ' ' + id);
            cbUtil.handleOk(callback, err, result, obj);
        });
    };
};

module.exports = helper;
