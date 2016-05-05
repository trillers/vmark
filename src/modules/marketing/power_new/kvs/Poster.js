var cbUtil = require('../../../../framework/callback');
var _ = require('underscore');

var idToPosterKey = function(id){
    return 'pw:ps:id:' + id;
};

var userIdAndActivityIdToIdKey = function(userId, activityId){
    return 'pw:ps:act:' + activityId +':uid:' + userId;
}

var wechatIdAndSceneIdToIdKey = function(wechatId, sceneId){
    return 'pw:ps:wid:' + wechatId + ':sid:' + sceneId;
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
                self.linkUserId(id, obj.user, obj.activity, function (err, res) {
                    //Todo
                })
            }
            self.linkSceneId(id, obj.wechatId, obj.sceneId, function(err, res){
                //Todo
            })
        }
        cbUtil.logCallback(
            err,
            'Fail to save power poster by id ' + id + ': ' + err,
            'Succeed to save power poster by id ' + id);
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
            'Fail to link power poster and user, uid: ' + uid + ' pid: ' + pid + ' err:' + err,
            'Succeed to link power poster and user, uid: ' + uid + ' pid: ' + pid);
        cbUtil.handleOk(callback, err, result, pid);
    });
}

/**
 * link qr code sceneId to poster id
 * @param pid :poster id
 * @param sid :scene id
 * */
Kv.prototype.linkSceneId = function(pid, wechatId, sid, callback){
    var redis = this.context.redis.main;
    var key = wechatIdAndSceneIdToIdKey(wechatId, sid);
    redis.set(key, pid, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to link power poster and qr code, sid: ' + sid + 'pid: ' + pid + ' err:' + err,
            'Succeed to link power poster and qr code, sid: ' + sid + 'pid: ' + pid);
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
            'Fail to get power poster by id ' + id + ': ' + err,
            'Succeed to get power poster by id ' + id);
        cbUtil.handleSingleValue(callback, err, result);
    });
}

/**
 * load poster id by user id
 * @param uid: user id
 * */
Kv.prototype.loadIdByUserIdActivityId = function(uid, activityId, callback){
    var redis = this.context.redis.main;
    var key = userIdAndActivityIdToIdKey(uid, activityId);
    redis.get(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to get power poster id by user id ' + uid + ' and activityId : ' + activityId + ' err:' + err,
            'Succeed to get power poster id by user id ' + uid + ' and activityId: ' + activityId);
        cbUtil.handleSingleValue(callback, err, result);
    });
}

/**
 * load poster id by scene id
 * @param sid: qr code scene id
 * */
Kv.prototype.loadIdByWechatIdAndSceneId = function(wechatId, sid, callback){
    var redis = this.context.redis.main;
    var key = wechatIdAndSceneIdToIdKey(wechatId, sid);
    redis.get(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to get power poster id by scene id ' + sid + ' and wechatId ' + wechatId + ': ' + err,
            'Succeed to get power poster id by scene id ' + sid + ' and wechatId ' + wechatId );
        cbUtil.handleSingleValue(callback, err, result);
    });
}
module.exports = Kv;