var cbUtil = require('../../../framework/callback');
var ACCESS_TOKEN = 'access';
var JSAPI_TOKEN = 'jsapi';

var tokenKey = function(type){
    return 'wc:nt:token:'+type;
};

var Kv = function(context){
    this.context = context;
};

Kv.prototype.saveAccessToken = function(at, callback){
    var redis = this.context.redis.main;
    var key = tokenKey(ACCESS_TOKEN);
    redis.hmset(key, at, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to save wechat access token: ' + err,
            'Succeed to save wechat access token');
        cbUtil.handleOk(callback, err, result, at);
    });
};

Kv.prototype.getAccessToken = function(callback){
    var redis = this.context.redis.main;
    var key = tokenKey(ACCESS_TOKEN);
    redis.hgetall(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to get wechat access token: ' + err,
            'Succeed to get wechat access token');
        cbUtil.handleSingleValue(callback, err, result);
    });
};

Kv.prototype.deleteAccessToken = function(callback){
    var redis = this.context.redis.main;
    var key = tokenKey(ACCESS_TOKEN);
    redis.del(key, function(err){
        cbUtil.logCallback(
            err,
            'Fail to delete wechat access token: ' + err,
            'Succeed to delete wechat access token');
        if(callback) callback(err);
    });
};

Kv.prototype.getTicketToken = function(type, callback){
    var redis = this.context.redis.main;
    var key = tokenKey(type);
    redis.hgetall(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to get wechat ticket token: ' + err,
            'Succeed to get wechat ticket token');
        cbUtil.handleSingleValue(callback, err, result);
    });
};

Kv.prototype.saveTicketToken = function(type, ticketToken, callback){
    var redis = this.context.redis.main;
    var key = tokenKey(type);
    redis.hmset(key, ticketToken, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to save wechat ticket token: ' + err,
            'Succeed to save wechat ticket token');
        cbUtil.handleOk(callback, err, result, ticketToken);
    });
};

Kv.prototype.deleteTicketToken = function(type, callback){
    var redis = this.context.redis.main;
    var key = tokenKey(type);
    redis.del(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to delete wechat ticket token: ' + err,
            'Succeed to delete wechat ticket token');
        if(callback) callback(err);
    });
};

module.exports = Kv;