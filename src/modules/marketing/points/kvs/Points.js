var cbUtil = require('../../../../framework/callback');
var _ = require('underscore');

var idToActivityKey = function(id){
    return 'pts:act:id:' + id;
};

var idToParticipantKey = function(id){
    return 'pts:ptcp:id:' + id;
};

var idToHelpFriendsKey = function(id){
    return 'pts:hf:id:' + id;
};

var activityIdToUserIdParticipantIdHashKey = function(activityId){
    return 'pts:upln:id:' + activityId;
}

var idToRankingListKey = function(id){
    return 'pts:ranking:id:' + id;
};

var Kv = function(context){
    this.context = context;
};

/**
 * add points activity to redis
 * @param activity json
 * */
Kv.prototype.saveActivity = function(json, callback){
    var redis = this.context.redis.main;
    var obj = _.clone(json);
    obj.crtOn && (delete obj.crtOn);
    var key = idToActivityKey(obj.id || obj._id);
    redis.hmset(key, obj, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to save points activity by id ' + obj.id + ': ' + err,
            'Succeed to save points activity by id ' + obj.id);
        cbUtil.handleOk(callback, err, result, obj);
    });
}

/**
 * add points activity participant to redis
 * @param participant json
 * */
Kv.prototype.saveParticipant = function(json, callback){
    var redis = this.context.redis.main;
    var self = this;
    var obj = _.clone(json);
    obj.crtOn && (delete obj.crtOn);
    var pariticipantId = obj.id || obj._id;
    var key = idToParticipantKey(pariticipantId);
    redis.hmset(key, obj, function(err, result){
        if(!err && result === 'OK'){
            self.linkUserToParticipantId(obj.points, obj.user, pariticipantId);
            self.addParticipantInRankingList(obj.points, obj.user, obj.total_points);
            self.incActivityParticipantsCountById(obj.points);
        }
        cbUtil.logCallback(
            err,
            'Fail to save points activity participant by id ' + obj.id + ': ' + err,
            'Succeed to save points activity participant by id ' + obj.id);
        cbUtil.handleOk(callback, err, result, obj);
    });
}

/**
 * link points activity participant to user
 * @param activity id
 * @param user id
 * */
Kv.prototype.linkUserToParticipantId = function(activityId, userId, participantId, callback){
    var redis = this.context.redis.main;
    var key = activityIdToUserIdParticipantIdHashKey(activityId);
    redis.hset(key, userId, participantId, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to link points activity participant to user:' + userId + 'err: ' + err,
            'Succeed to link points activity participant to user: ' + userId);
        cbUtil.handleSingleValue(callback, err, result);
    });
}

/**
 * get points activity participant id
 * @param activity id
 * @param user id
 * */
Kv.prototype.getParticipantIdByUserIdAndActivityId = function(activityId, userId, callback){
    var redis = this.context.redis.main;
    var key = activityIdToUserIdParticipantIdHashKey(activityId);
    redis.hget(key, userId, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to get points activity participantId by user:' + userId + 'err: ' + err,
            'Succeed to get points activity participantId by user: ' + userId);
        cbUtil.handleSingleValue(callback, err, result);
    });
}

/**
 * load points activity from redis by id
 * @param activity id
 * */
Kv.prototype.loadActivityById = function(id, callback){
    var redis = this.context.redis.main;
    var self = this;
    var key = idToActivityKey(id);
    redis.hgetall(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to get points activity by id ' + id + ': ' + err,
            'Succeed to get points activity by id ' + id);
        cbUtil.handleSingleValue(callback, err, result);
    });
}

/**
 * load points activity participant  from redis by id
 * @param activity participant id
 * */
Kv.prototype.loadParticipantById = function(id, callback){
    var redis = this.context.redis.main;
    var key = idToParticipantKey(id);
    redis.hgetall(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to get points activity participant by id ' + id + ': ' + err,
            'Succeed to get points activity participant by id ' + id);
        cbUtil.handleSingleValue(callback, err, result);
    });
}

/**
 * update points activity views by id
 * @param activity id
 * */
Kv.prototype.incActivityViewsById = function(id, callback){
    var redis = this.context.redis.main;
    var key = idToActivityKey(id);
    redis.hincrby(key,'views', 1, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to update points activity views by id ' + id + ': ' + err,
            'Succeed to update points activity views by id ' + id);
        cbUtil.handleSingleValue(callback, err, result);
    });
}

/**
 * update points activity participant count by id
 * @param activity id
 * */
Kv.prototype.incActivityParticipantsCountById = function(id, callback){
    var redis = this.context.redis.main;
    var key = idToActivityKey(id);
    redis.hincrby(key,'participants_count', 1, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to update points activity participants_count by id ' + id + ': ' + err,
            'Succeed to update points activity participants_count by id ' + id);
        cbUtil.handleSingleValue(callback, err, result);
    });
}

/**
 * update points activity participant points by id
 * @param participant id
 * */
Kv.prototype.incParticipantPointsById = function(id, incPoints, callback){
    var redis = this.context.redis.main;
    var key = idToParticipantKey(id);
    redis.hincrby(key,'total_points', incPoints, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to update points activity participant points by id ' + id + ': ' + err,
            'Succeed to update points activity participant points by id ' + id);
        cbUtil.handleSingleValue(callback, err, result);
    });
}

/**
 * add power friend openid to help_friends set
 * */
Kv.prototype.addHelpFriendToSet = function(participantId, openid, callback){
    var redis = this.context.redis.main;
    var key = idToHelpFriendsKey(participantId);
    redis.sadd(key, openid, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to add friend openid to help_friends set, participant id ' + participantId + ': ' + err,
            'Succeed to add friend openid to help_friends set, participant id ' + participantId);

        cbUtil.handleSingleValue(callback, err, result);
    });
};

/**
 * get power friend  set
 * */
Kv.prototype.getHelpFriendsSet = function(participantId, callback){
    var redis = this.context.redis.main;
    var key = idToHelpFriendsKey(participantId);
    redis.smembers(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to get friend openid to help_friends set, participant id ' + participantId + ': ' + err,
            'Succeed to get friend openid to help_friends set, participant id ' + participantId);

        cbUtil.handleSingleValue(callback, err, result);
    });
};

/**
 * Add the user and initial score for a participant
 * in the ranking list of a activity
 * @param activityId activity id
 * @param userId the id of the user of the participant
 * @param initialPoints
 * @param callback callback(err, affectedNum)
 */
Kv.prototype.addParticipantInRankingList = function(activityId, userId, initialPoints, callback){
    var redis = this.context.redis.main;
    var key = idToRankingListKey(activityId);
    redis.ZADD(key, initialPoints, userId, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to add participant with score, activity id ' + activityId + ': ' + err,
            'Succeed to add participant with score, activity id ' + activityId);

        cbUtil.handleSingleValue(callback, err, result);
    });
};

/**
 * Increase some score for the user for a participant
 * in the ranking list of a activity
 * @param activityId activity id
 * @param userId the id of the user of the participant
 * @param score increased (powered) score
 * @param callback callback(err, totalScore)
 */
Kv.prototype.increaseParticipantScoreInRankingList = function(activityId, userId, score, callback){
    var redis = this.context.redis.main;
    var key = idToRankingListKey(activityId);
    redis.ZINCRBY(key, score, userId, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to increase score for participant, activity id ' + activityId + ': ' + err,
            'Succeed to increase score for participant, activity id ' + activityId);

        cbUtil.handleSingleValue(callback, err, result);
    });
};

/**
 * get activity participant rank
 * @param activityId activity id
 * @param userId the id of the user of the participant
 * @param callback callback(err, rank)
 */
Kv.prototype.getParticipantRank = function(activityId, userId, callback){
    var redis = this.context.redis.main;
    var key = idToRankingListKey(activityId);
    redis.ZREVRANK(key, userId, function(err, result){
        if(!err) {
            result = result + 1;
        }
        cbUtil.logCallback(
            err,
            'Fail to get participant rank, activity id ' + activityId + ': ' + err,
            'Succeed to get participant rank, activity id ' + activityId);

        cbUtil.handleSingleValue(callback, err, result);
    });
};

/**
 * Get the ranking list of a activity.
 * the item of the list is like [user 0, 200, user 1, 198, ... user n, 10]
 * with score descending order
 * @param activityId
 * @param callback
 */
Kv.prototype.getRankingList = function(activityId, callback){
    var redis = this.context.redis.main;
    var key = idToRankingListKey(activityId);
    var args = [ key, 0, -1, 'WITHSCORES'];
    redis.zrevrange(args, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to get ranking list, activity id ' + activityId + ': ' + err,
            'Succeed to get ranking list, activity id ' + activityId);

        cbUtil.handleSingleValue(callback, err, result);
    });
};

/**
 * Get the ranking list of a activity.
 * the item of the list is like ['{user: {nickname,'sunny' ......}, 'total_points' 10}', '{user: {nickname,'sunny' ......}, 'total_points' 10}']
 * @param activityId
 * @param count //the query count of sorted set
 * @param callback
 */
Kv.prototype.getRankingListWithScore = function(activityId, count, callback){
    var redis = this.context.redis.main;
    var lua = " \
local userIdScoreArr = redis.call('zrevrange', KEYS[1], 0, KEYS[2], 'WITHSCORES')\
local re = {}\
local index = 0\
    for i=0, #userIdScoreArr, 2 do\
        local jsonStr = '{}'\
        local json = cjson.decode(jsonStr)\
        local userStr = '{}'\
        local user = cjson.decode(jsonStr)\
        local key = table.concat({'plf:usr:o:id:', userIdScoreArr[i-1]}) \
        local hm = redis.call('hgetall', key)\
        for j=0, #hm, 2 do\
           local field = tostring(hm[j-1])\
           user[field] = hm[j]\
        end\
        json['user'] = user\
        json['total_points'] = userIdScoreArr[i]\
        re[index] = cjson.encode(json)\
        index = index + 1\
    end    \
return re\
";
    var key = idToRankingListKey(activityId);
    var cb = callback;
    var ct = -1
    if(typeof(count) === 'function'){
        cb = count;
    }else{
        ct = count - 1;
    }
    redis.eval(lua, 2, key, ct, function(err, result){
        var listJsonString = '[' + result.join(',') + ']';
        var listJson = JSON.parse(listJsonString);
        cbUtil.logCallback(
            err,
            'Fail to get ranking list with score, activity id ' + activityId + ': ' + err,
            'Succeed to get ranking list with score, activity id ' + activityId);

        cbUtil.handleSingleValue(cb, err, listJson);
    });
};

module.exports = Kv;