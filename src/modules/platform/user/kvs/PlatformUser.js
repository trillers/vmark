var cbUtil = require('../../../../framework/callback');

var idToObjKey = function(id){
    return 'plf:usr:o:id:' + id;
};

var openidToIdKey = function(openid){
    return 'plf:usr:id:oid:' + openid;
};

var tokenToLoginQrCodeSceneId = function(token){
    return 'plf:usr:login' + token;
};

var Kv = function(context){
    this.context = context;
};

Kv.prototype.loadSceneIdByToken = function(token, callback){
    var logger = this.context.logger;
    var redis = this.context.redis.main;
    var key = tokenToLoginQrCodeSceneId(token);
    redis.get(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to get scene id ',
            'Succeed to get scene id ');

        cbUtil.handleSingleValue(callback, err, result);
    });
};

Kv.prototype.saveSceneIdByToken = function(token, sceneId, callback){
    var redis = this.context.redis.main;
    var key = tokenToLoginQrCodeSceneId(token);

    redis.set(key, sceneId, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to save scene id ',
            'Succeed to save scene id ');
        cbUtil.handleOk(callback, err, result, sceneId);
    });
};

Kv.prototype.loadById = function(id, callback){
    var logger = this.context.logger;
    var redis = this.context.redis.main;
    var key = idToObjKey(id);
    redis.hgetall(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to get platform user by id ' + id + ': ' + err,
            'Succeed to get platform user by id ' + id);

        if(result){
            if(result.posts && typeof result.posts == 'string'){
                var posts = result.posts;
                try{
                    result.posts = JSON.parse(result.posts);
                }
                catch(e){
                    logger.error('Fail to parse posts: ' + posts);
                    result.posts = [];
                }
            }
            result.crtOn = result.crtOn && result.crtOn !== 'null' ? new Date(result.crtOn) : null;
        }
        cbUtil.handleSingleValue(callback, err, result);
    });
};

Kv.prototype.saveById = function(json, callback){
    var redis = this.context.redis.main;
    var id = json.id;
    var key = idToObjKey(id);

    if(json.posts && Array.isArray(json.posts)){
        json.posts = JSON.stringify(json.posts);
    }

    redis.hmset(key, json, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to save platform user by id ' + id + ': ' + err,
            'Succeed to save platform user by id ' + id);
        cbUtil.handleOk(callback, err, result, json);
    });
};

Kv.prototype.deleteById = function(id, callback){
    var redis = this.context.redis.main;
    var key = idToObjKey(id);
    redis.del(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to delete platform user by id ' + id + ': ' + err,
            'Succeed to delete platform user by id ' + id);

        cbUtil.handleSingleValue(callback, err, result);
    });
};

Kv.prototype.loadIdByOpenid = function(openid, callback){
    var redis = this.context.redis.main;
    var key = openidToIdKey(openid);
    redis.get(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to get platform user id by openid ' + openid + ': ' + err,
            'Succeed to get platform user id ' + result + ' by openid ' + openid);
        cbUtil.handleSingleValue(callback, err, result);
    });
};

Kv.prototype.linkOpenid = function(openid, id, callback){
    var redis = this.context.redis.main;
    var key = openidToIdKey(openid);
    redis.set(key, id, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to link openid ' + openid + ' to id ' + id + ': ' + err,
            'Succeed to link openid ' + openid + ' to id ' + id);
        cbUtil.handleOk(callback, err, result);
    });
};

Kv.prototype.unlinkOpenid = function(openid, callback){
    var redis = this.context.redis.main;
    var key = openidToIdKey(openid);
    redis.del(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to unlink platform user id by openid ' + openid + ': ' + err,
            'Succeed to unlink platform user id by openid ' + openid);
        cbUtil.handleSingleValue(callback, err, result);
    });
};

module.exports = Kv;