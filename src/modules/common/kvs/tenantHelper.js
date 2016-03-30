var cbUtil = require('../../../framework/callback');
var logger = require('../../../app/logging').logger;
var helper = {};

/**
 * Generate load function for a type of object by config
 * @param config
 *  {
 *      keyName: String //
 *      valueName: String //
 *      keyGenerator: Function //
 *      postHandler: Function //
 *  }
 *
 * @returns {Function}
 */
helper.generateLoader = function(config){
    var keyGenerator = config.keyGenerator;
    var postHandler = config.postHandler;
    var okPrefix = 'Succeed to load ' +config.valueName+ ' by ' +config.keyName;
    var errPrefix = 'Fail to load ' +config.valueName+ ' by ' +config.keyName;
    return function(tenantId, id, callback){
        var redis = this.context.redis.main;
        redis.hgetall(keyGenerator(tenantId, id), function(err, result){
            cbUtil.logCallback(
                logger,
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

/**
 * Generate delete function for a type of object by config
 * @param config
 *  {
 *      keyName: String //
 *      valueName: String //
 *      keyGenerator: Function //
 *  }
 *
 * @returns {Function}
 */
helper.generateDeleter = function(config){
    var keyGenerator = config.keyGenerator;
    var okPrefix = 'Succeed to delete ' +config.valueName+ ' by ' +config.keyName;
    var errPrefix = 'Fail to delete ' +config.valueName+ ' by ' +config.keyName;
    return function(tenantId, id, callback){
        var redis = this.context.redis.main;
        redis.del(keyGenerator(tenantId, id), function(err, result){
            cbUtil.logCallback(
                logger,
                err,
                errPrefix + ' ' + id + ': ' + err,
                okPrefix + ' ' + id);

            cbUtil.handleSingleValue(callback, err, result);
        });
    };
};

/**
 * Generate save function for a type of object by config
 * @param config
 *  {
 *      keyName: String //
 *      valueName: String //
 *      keyGenerator: Function //
 *      preHandler: Function //
 *  }
 *
 * @returns {Function}
 */
helper.generateSaver = function(config){
    var keyGenerator = config.keyGenerator;
    var preHandler = config.preHandler;
    var okPrefix = 'Succeed to save ' +config.valueName+ ' by ' +config.keyName;
    var errPrefix = 'Fail to save ' +config.valueName+ ' by ' +config.keyName;
    return function(tenantId, id, obj, callback){
        var redis = this.context.redis.main;
        if(preHandler){obj = preHandler(obj);}
        redis.hmset(keyGenerator(tenantId, id), obj, function(err, result){
            cbUtil.logCallback(
                logger,
                err,
                errPrefix + ' ' + id + ': ' + err,
                okPrefix + ' ' + id);
            cbUtil.handleOk(callback, err, result, obj);
        });
    };
};

/**
 * Generate get function for value by config
 * @param config
 *  {
 *      keyName: String //
 *      valueName: String //
 *      keyGenerator: Function //
 *  }
 *
 * @returns {Function}
 */
helper.generateGetter = function(config){
    var keyGenerator = config.keyGenerator;
    var okPrefix = 'Succeed to get ' +config.valueName+ ' by ' +config.keyName;
    var errPrefix = 'Fail to get ' +config.valueName+ ' by ' +config.keyName;
    return function(tenantId, key, callback){
        var redis = this.context.redis.main;
        redis.get(keyGenerator(tenantId, key), function(err, result){
            cbUtil.logCallback(
                logger,
                err,
                errPrefix + ' ' + key + ': ' + err,
                okPrefix + ' ' + key);
            cbUtil.handleSingleValue(callback, err, result);
        });
    };
};

/**
 * Generate set function for value by config
 * @param config
 *  {
 *      keyName: String //
 *      valueName: String //
 *      keyGenerator: Function //
 *  }
 *
 * @returns {Function}
 */
helper.generateSetter = function(config){
    var keyGenerator = config.keyGenerator;
    var okPrefix = 'Succeed to set ' +config.valueName+ ' by ' +config.keyName;
    var errPrefix = 'Fail to set ' +config.valueName+ ' by ' +config.keyName;
    return function(tenantId, key, value, callback){
        var redis = this.context.redis.main;
        redis.set(keyGenerator(tenantId, key), value, function(err, result){
            cbUtil.logCallback(
                logger,
                err,
                errPrefix + ' ' + key + ': ' + err,
                okPrefix + ' ' + key);
            cbUtil.handleOk(callback, err, result);
        });
    };
};

module.exports = helper;
