var util = require('util');
var settings = require('@private/vmark-settings');
var _ = require('underscore');
var myUtil = require('../../../../app/util');

var Service = function(context){
    this.context = context;
};

Service.prototype.create = function*(jsonData){
    var logger = this.context.logger;
    var RedpacketParticipant = this.context.models.RedpacketParticipant;
    var kv = this.context.kvs.redpacket;
    var participant = new RedpacketParticipant(jsonData);
    var doc = yield participant.save();
    yield kv.saveParticipantAsync(doc.toObject());
    logger.info('success create participant: ' + util.inspect(doc));
    return doc.toObject();
}

Service.prototype.updateById = function*(id, update, helpMoney){
    var logger = this.context.logger;
    var RedpacketParticipant = this.context.models.RedpacketParticipant;
    var kv = this.context.kvs.redpacket;

    var doc = yield RedpacketParticipant.findByIdAndUpdate(id, update, {new: true}).lean().exec();
    yield kv.increaseParticipantScoreInRankingListAsync(doc.activity, doc.user, helpMoney);
    logger.info('success update participant by id: ' + id);
    return doc;
}

Service.prototype.syncById = function*(id, update){
    var logger = this.context.logger;
    var RedpacketParticipant = this.context.models.RedpacketParticipant;

    var doc = yield RedpacketParticipant.findByIdAndUpdate(id, update, {new: true}).lean().exec();
    logger.info('success update participant by id: ' + id);
    return doc;
}

Service.prototype.update = function*(con, update){
    var logger = this.context.logger;
    var RedpacketParticipant = this.context.models.RedpacketParticipant;
    var res = yield RedpacketParticipant.update(con, update).exec();
    logger.info('success update participant by condition: ' + con);
    return res;
}

Service.prototype.loadById = function*(id){
    var logger = this.context.logger;
    //var RedpacketParticipant = this.context.models.RedpacketParticipant;
    //var doc = yield RedpacketParticipant.findById(id, {}, {lean: true}).populate({path: 'redpacket'}).populate({path: 'user'}).exec();
    var kv = this.context.kvs.redpacket;
    var userKv = this.context.kvs.platformUser;
    var participant = yield kv.loadParticipantByIdAsync(id);
    if(participant){
        var redpacket = yield kv.loadActivityByIdAsync(participant.redpacket);
        redpacket.bgImg = redpacket.bgImg.split(',');
        var user = yield userKv.loadByIdAsync(participant.user);
        var rank = yield kv.getParticipantRankAsync(participant.redpacket, participant.user);
        var helpArr = yield kv.getHelpFriendsSetAsync(id);
        participant.participateLink = 'http://' + settings.app.domain + '/marketing/redpacket/join?id=' + redpacket._id;
        participant.redpacket = redpacket;
        participant.user = user;
        participant.rank = rank;
        participant.help_friends = helpArr;
    }
    logger.info('success load participant by id: ' + id);
    return participant;
}

Service.prototype.deleteById = function*(id){
    var logger = this.context.logger;
    var RedpacketParticipant = this.context.models.RedpacketParticipant;
    var doc = yield RedpacketParticipant.findByIdAndUpdate(id, {lFlg: 'd'}, {new: true}).lean().exec();
    logger.info('success delete participant by id: ' + id);
    return doc;
}

Service.prototype.loadAll = function*(){
    var logger = this.context.logger;
    var RedpacketParticipant = this.context.models.RedpacketParticipant;
    var docs = yield RedpacketParticipant.find({lFlg: 'a'}).lean().exec();
    logger.info('success load all participant');
    return docs;
}

Service.prototype.filter = function*(params){
    var logger = this.context.logger;
    var RedpacketParticipant = this.context.models.RedpacketParticipant;
    var query = RedpacketParticipant.find();

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
    var kv = this.context.kvs.redpacket;
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
    var active = today >= new Date(participant.redpacket.startTime) && today <= new Date(participant.redpacket.endTime);
    if (!active) {
        status.join = 'none';
        status.help = 'none';
        status.active = false;
        if (today < new Date(participant.redpacket.startTime)) {
            status.noActivated = '';
        }
        if (today > new Date(participant.redpacket.endTime)) {
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
            var participantId = yield kv.getParticipantIdByUserIdAndActivityIdAsync(participant.redpacket._id, user.id);
            if (participantId) {
                status.join = 'none';
                status.joined = '';
            }
            var helpArr = yield kv.getHelpFriendsSetAsync(participant.id);
            if (_.indexOf(helpArr, user.openid) !== -1) {
                status.help = 'none';
                status.helped = '';
            }
            if (helpArr.length >= participant.redpacket.friend_help_count_limit) {
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
    var kv = this.context.kvs.redpacket;
    if (status.helpLimited === 'none') {
        var res = yield kv.addHelpFriendToSetAsync(participant.id, user.openid);
        if(res === 1) {
            var min = parseInt(participant.redpacket.friend_help_min_money || 0);
            var max = parseInt(participant.redpacket.friend_help_max_money || 0);
            var helpMoney = myUtil.random(min, max);
            var data = yield kv.incParticipantMoneyByIdAsync(participant.id, helpMoney);
            yield kv.increaseParticipantScoreInRankingListAsync(participant.redpacket._id, participant.user.id, helpMoney);
            var rank = yield kv.getParticipantRankAsync(participant.redpacket, participant.user);
            result = {rank: rank, total_money: data};
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