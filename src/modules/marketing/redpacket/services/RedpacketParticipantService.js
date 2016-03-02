var util = require('util');
var settings = require('@private/vmark-settings');
var _ = require('underscore');

var Service = function(context){
    this.context = context;
};

Service.prototype.create = function*(jsonData){
    var logger = this.context.logger;
    var RepacketParticipant = this.context.models.RepacketParticipant;
    var kv = this.context.kvs.redpacket;
    var participant = new RepacketParticipant(jsonData);
    var doc = yield participant.save();
    yield kv.saveParticipantAsync(doc.toObject());
    logger.info('success create participant: ' + util.inspect(doc));
    return doc.toObject();
}

Service.prototype.updateById = function*(id, update, helpMoney){
    var logger = this.context.logger;
    var RepacketParticipant = this.context.models.RepacketParticipant;
    var kv = this.context.kvs.redpacket;

    var doc = yield RepacketParticipant.findByIdAndUpdate(id, update, {new: true}).lean().exec();
    yield kv.increaseParticipantScoreInRankingListAsync(doc.activity, doc.user, helpMoney);
    logger.info('success update participant by id: ' + id);
    return doc;
}

Service.prototype.update = function*(con, update){
    var logger = this.context.logger;
    var RepacketParticipant = this.context.models.RepacketParticipant;
    var res = yield RepacketParticipant.update(con, update).exec();
    logger.info('success update participant by condition: ' + con);
    return res;
}

Service.prototype.loadById = function*(id){
    var logger = this.context.logger;
    //var RepacketParticipant = this.context.models.RepacketParticipant;
    //var doc = yield RepacketParticipant.findById(id, {}, {lean: true}).populate({path: 'redpacket'}).populate({path: 'user'}).exec();
    var kv = this.context.kvs.redpacket;
    var userKv = this.context.kvs.platformUser;
    var participant = yield kv.loadParticipantByIdAsync(id);
    if(participant){
        var redpacket = yield kv.loadActivityByIdAsync(participant.redpacket);
        redpacket.bgImg = redpacket.bgImg.split(',');
        var user = yield userKv.loadByIdAsync(participant.user);
        var rank = yield kv.getParticipantRankAsync(participant.redpacket, participant.user);
        participant.participateLink = 'http://' + settings.app.domain + '/marketing/redpacket/join?id=' + redpacket._id;
        participant.redpacket = redpacket;
        participant.user = user;
        participant.rank = rank;
    }
    logger.info('success load participant by id: ' + id);
    return participant;
}

Service.prototype.deleteById = function*(id){
    var logger = this.context.logger;
    var RepacketParticipant = this.context.models.RepacketParticipant;
    var doc = yield RepacketParticipant.findByIdAndUpdate(id, {lFlg: 'd'}, {new: true}).lean().exec();
    logger.info('success delete participant by id: ' + id);
    return doc;
}

Service.prototype.loadAll = function*(){
    var logger = this.context.logger;
    var RepacketParticipant = this.context.models.RepacketParticipant;
    var docs = yield RepacketParticipant.find({lFlg: 'a'}).lean().exec();
    logger.info('success load all participant');
    return docs;
}

Service.prototype.filter = function*(params){
    var logger = this.context.logger;
    var RepacketParticipant = this.context.models.RepacketParticipant;
    var query = RepacketParticipant.find();

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
                participant.help = 'none';
                participant.helped = '';
            }
            if (helpArr.length >= participant.redpacket.friend_help_count_limit) {
                participant.help = 'none';
                participant.helped = 'none';
                participant.helpLimited = '';
            }
        }
    }
    return status;
}

module.exports = Service;