var cbUtil = require('../../../framework/callback');

var noteIdToRankKey = function(noteId){
    return 'rank:' + noteId;
};

var rankChangedNoteSetKey = 'rankChangedNoteSet';

var Kv = function(context){
    this.context = context;
};

Kv.prototype.view = function(noteId, callback){
    this.changeRank(noteId, 'view', 1, callback);
};

Kv.prototype.like = function(noteId, callback){
    this.changeRank(noteId, 'like', 1, callback);
};

Kv.prototype.comment = function(noteId, callback){
    this.changeRank(noteId, 'comment', 1, callback);
};

Kv.prototype.share = function(noteId, callback){
    this.changeRank(noteId, 'share', 1, callback);
};

Kv.prototype.addSectionNote = function(noteId, callback){
    this.changeRank(noteId, 'addSectionNote', 2, callback);
};

Kv.prototype.addNoteIdToChangedSet = function(noteId, callback){
    var redis = this.context.redis.main;
    var key = rankChangedNoteSetKey;
    redis.sadd(key, noteId, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to add note ' + noteId+ ' to rankChangedNoteSet' + err,
            'Succeed to add note ' + noteId+ ' to rankChangedNoteSet');
        cbUtil.handleSingleValue(callback, err, result);
    });
};

Kv.prototype.getRankChangedSet = function(callback){
    var redis = this.context.redis.main;
    var key = rankChangedNoteSetKey;
    redis.smembers(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to getRankChangedSet' + err,
            'Succeed to getRankChangedSet');
        cbUtil.handleSingleValue(callback, err, result);
    });
};

Kv.prototype.delRankChangedSet = function(callback){
    var redis = this.context.redis.main;
    var key = rankChangedNoteSetKey;
    redis.del(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to del RankChangedSet' + err,
            'Succeed to del RankChangedSet');
        cbUtil.handleSingleValue(callback, err, result);
    });
};

Kv.prototype.delNoteRank = function(noteId, callback){
    var redis = this.context.redis.main;
    var key = noteIdToRankKey(noteId);
    redis.del(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to del note rank by id ' + noteId + 'err:' + err,
            'Succeed to del note rank by id' + noteId);
        cbUtil.handleSingleValue(callback, err, result);
    });
};

Kv.prototype.getNoteRank = function(noteId, callback){
    var redis = this.context.redis.main;
    var key = noteIdToRankKey(noteId);
    redis.get(key, function(err, result){
        cbUtil.logCallback(
            err,
            'Fail to getNoteRank by noteId ' + noteId + 'err:' + err,
            'Succeed to getNoteRank by noteId ' + noteId);
        cbUtil.handleSingleValue(callback, err, result);
    });
};

Kv.prototype.changeRank = function(noteId, action, value, callback){
    var self = this;
    var redis = this.context.redis.main;
    var key = noteIdToRankKey(noteId);
    redis.incrby(key, value, function(err, result){
        if(!err){
            self.addNoteIdToChangedSet(noteId);
        }
        cbUtil.logCallback(
            err,
            'Fail to change note rank throw ' + action+ ' by note id ' + noteId + ': ' + err,
            'Succeed to change note rank throw ' + action+ ' by note id ' + noteId);
        cbUtil.handleSingleValue(callback, err, result);
    });
};

module.exports = Kv;