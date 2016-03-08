var cbUtil = require('../../../../framework/callback');
var _ = require('underscore');

var idToPosterKey = function(id){
    return 'rp:ps:id:' + id;
};

var userIdAndActivityIdToIdKey = function(userId, activityId){
    return 'rp:ps:act:' + activityId +':uid:' + userId;
}

var sceneIdToIdKey = function(sceneId){
    return 'rp:ps:sid:' + sceneId;
}

var Kv = function(context){
    this.context = context;
};

/**
 * save activity or participant to redis
 * @param poster json
 * */
Kv.prototype.save = function(json, callback){
    var self = this;
    var redis = this.context.redis.main;
    var obj = _.clone(json);
    obj.crtOn && (delete obj.crtOn);
    var id = obj.id || obj._id;
    var key = idToPosterKey(id);
    redis.hmset(key, obj, function(err, result){
        if(!err){
            if(obj.type === 'pa') {
                self.linkUserId(id, obj.user, obj.redpacket, function (err, res) {
                    //Todo
                })
            }
            self.linkSceneId(id, obj.sceneId, function(err, res){
                //Todo
            })
        }
        cbUtil.logCallback(
            err,
            'Fail to save redpacket poster by id ' + id + ': ' + err,
            'Succeed to save redpacket poster by id ' + id);
        cbUtil.handleOk(callback, err, result, obj);
    });
}

/**
 * link qr code userId to poster id
 * @param pid :poster id
 * @param uid :user id
 * */
Kv.prototype.linkUserId = function(pid, uid, activityId, callback){
    var redis = this.context.redis.main;
    var key = userIdAndActivityIdToIdKey(uid, activityId);
    redis.set(key, pid, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to link redpacket poster and user, uid: ' + uid + 'pid: ' + pid + ' err:' + err,
            'Succeed to link redpacket poster and user, uid: ' + uid + 'pid: ' + pid);
        cbUtil.handleOk(callback, err, result, pid);
    });
}

/**
 * link qr code sceneId to poster id
 * @param pid :poster id
 * @param sid :scene id
 * */
Kv.prototype.linkSceneId = function(pid, sid, callback){
    var redis = this.context.redis.main;
    var key = sceneIdToIdKey(sid);
    redis.set(key, pid, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to link redpacket poster and qr code, sid: ' + sid + 'pid: ' + pid + ' err:' + err,
            'Succeed to link redpacket poster and qr code, sid: ' + sid + 'pid: ' + pid);
        cbUtil.handleOk(callback, err, result, pid);
    });
}

/**
 * load poster from redis by id
 * @param id:poster id
 * */
Kv.prototype.loadById = function(id, callback){
    var redis = this.context.redis.main;
    var key = idToPosterKey(id);
    redis.hgetall(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to get redpacket poster by id ' + id + ': ' + err,
            'Succeed to get redpacket poster by id ' + id);
        cbUtil.handleSingleValue(callback, err, result);
    });
}

/**
 * load poster id by user id
 * @param uid: user id
 * */
Kv.prototype.loadIdByUserId = function(uid, callback){
    var redis = this.context.redis.main;
    var key = userIdToIdKey(uid);
    redis.get(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to get redpacket poster id by user id ' + uid + ': ' + err,
            'Succeed to get redpacket poster id by user id ' + uid);
        cbUtil.handleSingleValue(callback, err, result);
    });
}

/**
 * load poster id by scene id
 * @param sid: qr code scene id
 * */
Kv.prototype.loadIdBySceneId = function(sid, callback){
    var redis = this.context.redis.main;
    var key = sceneIdToIdKey(sid);
    redis.get(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to get redpacket poster id by scene id ' + sid + ': ' + err,
            'Succeed to get redpacket poster id by scene id ' + sid);
        cbUtil.handleSingleValue(callback, err, result);
    });
}
module.exports = Kv;