var cbUtil = require('../../../../framework/callback');

var tntIdToPrivilegeKey = function(id){
    return 'org:prv:id:' + id;
};

var Kv = function(context){
    this.context = context;
};

Kv.prototype.getAllPrivileges = function(tenantId, callback){
    var redis = this.context.redis.main;
    var key = tntIdToPrivilegeKey(tenantId);
    redis.smembers(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to get all privileges for tenant '+tenantId+': ' + err,
            'Succeed to get all privileges for tenant '+tenantId);
        cbUtil.handleSingleValue(callback, err, result);
    });
};

Kv.prototype.addPrivilege = function(tenantId, privilege, callback){
    var redis = this.context.redis.main;
    var key = tntIdToPrivilegeKey(tenantId);
    redis.sadd(key, privilege, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to add privilege '+privilege+' to tenant '+tenantId+': ' + err,
            'Succeed to add privilege '+privilege+' to tenant '+tenantId);
        cbUtil.handleSingleValue(callback, err, result);
    });
};

Kv.prototype.removePrivilege = function(tenantId, privilege, callback){
    var redis = this.context.redis.main;
    var key = tntIdToPrivilegeKey(tenantId);
    redis.srem(key, privilege, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to remove privilege '+privilege+' to tenant '+tenantId+': ' + err,
            'Succeed to remove privilege '+privilege+' to tenant '+tenantId);
        cbUtil.handleSingleValue(callback, err, result);
    });
};
module.exports = Kv;