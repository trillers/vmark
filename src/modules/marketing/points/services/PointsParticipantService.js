var util = require('util');
var settings = require('@private/vmark-settings');
var _ = require('underscore');
var myUtil = require('../../../../app/util');

var Service = function(context){
    this.context = context;
};

Service.prototype.create = function*(jsonData){
    var logger = this.context.logger;
    var PointsParticipant = this.context.models.PointsParticipant;
    var kv = this.context.kvs.points;
    var participant = new PointsParticipant(jsonData);
    var doc = yield participant.save();
    yield kv.saveParticipantAsync(doc.toObject());
    logger.info('success create participant: ' + util.inspect(doc));
    return doc.toObject();
}

Service.prototype.updateById = function*(id, update, helpPoints){
    var logger = this.context.logger;
    var PointsParticipant = this.context.models.PointsParticipant;
    var kv = this.context.kvs.points;

    var doc = yield PointsParticipant.findByIdAndUpdate(id, update, {new: true}).lean().exec();
    yield kv.increaseParticipantScoreInRankingListAsync(doc.activity, doc.user, helpPoints);
    logger.info('success update participant by id: ' + id);
    return doc;
}

Service.prototype.syncById = function*(id, update){
    var logger = this.context.logger;
    var PointsParticipant = this.context.models.PointsParticipant;

    var doc = yield PointsParticipant.findByIdAndUpdate(id, update, {new: true}).lean().exec();
    logger.info('success update participant by id: ' + id);
    return doc;
}

Service.prototype.update = function*(con, update){
    var logger = this.context.logger;
    var PointsParticipant = this.context.models.PointsParticipant;
    var res = yield PointsParticipant.update(con, update).exec();
    logger.info('success update participant by condition: ' + con);
    return res;
}

Service.prototype.loadById = function*(id){
    var logger = this.context.logger;
    //var PointsParticipant = this.context.models.PointsParticipant;
    //var doc = yield PointsParticipant.findById(id, {}, {lean: true}).populate({path: 'points'}).populate({path: 'user'}).exec();
    var kv = this.context.kvs.points;
    var userKv = this.context.kvs.platformUser;
    var participant = yield kv.loadParticipantByIdAsync(id);
    if(participant){
        var points = yield kv.loadActivityByIdAsync(participant.points);
        points.bgImg = points.bgImg.split(',');
        var user = yield userKv.loadByIdAsync(participant.user);
        var rank = yield kv.getParticipantRankAsync(participant.points, participant.user);
        var helpArr = yield kv.getHelpFriendsSetAsync(id);
        participant.participateLink = 'http://' + settings.app.domain + '/marketing/points/join?id=' + points._id;
        participant.points = points;
        participant.user = user;
        participant.rank = rank;
        participant.help_friends = helpArr;
    }
    logger.info('success load participant by id: ' + id);
    return participant;
}

Service.prototype.deleteById = function*(id){
    var logger = this.context.logger;
    var PointsParticipant = this.context.models.PointsParticipant;
    var doc = yield PointsParticipant.findByIdAndUpdate(id, {lFlg: 'd'}, {new: true}).lean().exec();
    logger.info('success delete participant by id: ' + id);
    return doc;
}

Service.prototype.loadAll = function*(){
    var logger = this.context.logger;
    var PointsParticipant = this.context.models.PointsParticipant;
    var docs = yield PointsParticipant.find({lFlg: 'a'}).lean().exec();
    logger.info('success load all participant');
    return docs;
}

Service.prototype.filter = function*(params){
    var logger = this.context.logger;
    var PointsParticipant = this.context.models.PointsParticipant;
    var query = PointsParticipant.find();

    if (params.options) {
        query.setOptions(params.options);
    }

    if (params.sort) {
        query.sort(params.sort);
    }

    if (params.page) {
        var skip = (params.page.no - 1) * params.page.size;
        var limit = params.page.size;
        if (skip) query.skip(skip);
        if (limit) query.limit(limit);
    }

    if (params.conditions) {
        query.find(params.conditions);
    }

    if (params.populate) {
        params.populate.forEach(function(item){
            query.populate(item);
        })
    }

    query.lean(true);
    var docs = yield query.exec();
    logger.info('success filter participant');

    return docs;
}

Service.prototype.getStatus = function*(participant, user){
    var kv = this.context.kvs.points;
    var status = {
        active: true,
        join: '',
        joined: 'none',
        help: '',
        helped: 'none',
        closed: 'none',
        noActivated: 'none',
        helpLimited: 'none'
    }
    var today = new Date();
    var active = today >= new Date(participant.points.startTime) && today <= new Date(participant.points.endTime);
    if (!active) {
        status.join = 'none';
        status.help = 'none';
        status.active = false;
        if (today < new Date(participant.points.startTime)) {
            status.noActivated = '';
        }
        if (today > new Date(participant.points.endTime)) {
            status.closed = '';
        }
    }
    else {
        if (user.openid === participant.user.openid) {
            status.join = 'none';
            status.help = 'none';
            status.inviteFriend = '';
        } else {
            status.inviteFriend = 'none';
            var participantId = yield kv.getParticipantIdByUserIdAndActivityIdAsync(participant.points._id, user.id);
            if (participantId) {
                status.join = 'none';
                status.joined = '';
            }
            var helpArr = yield kv.getHelpFriendsSetAsync(participant.id);
            if (_.indexOf(helpArr, user.openid) !== -1) {
                status.help = 'none';
                status.helped = '';
            }
            if (helpArr.length >= participant.points.friend_help_count_limit) {
                status.help = 'none';
                status.helped = 'none';
                status.helpLimited = '';
            }
        }
    }
    return status;
}

Service.prototype.help = function*(participant, user){
    var status = yield this.getStatus(participant, user);
    var result = {};
    var kv = this.context.kvs.points;
    if (status.helpLimited === 'none') {
        var res = yield kv.addHelpFriendToSetAsync(participant.id, user.openid);
        if(res === 1) {
            var min = parseInt(participant.points.friend_help_min_points || 0);
            var max = parseInt(participant.points.friend_help_max_points || 0);
            var helpPoints = myUtil.random(min, max);
            var data = yield kv.incParticipantPointsByIdAsync(participant.id, helpPoints);
            yield kv.increaseParticipantScoreInRankingListAsync(participant.points._id, participant.user.id, helpPoints);
            var rank = yield kv.getParticipantRankAsync(participant.points, participant.user);
            result = {rank: rank, total_points: data};
        } else if(res === 0) {
            result = {helped: true};
        } else {
            result = {error: 'unknown error'};
        }
    } else {
        result = {limited: true};
    }
    return result;
}
module.exports = Service;