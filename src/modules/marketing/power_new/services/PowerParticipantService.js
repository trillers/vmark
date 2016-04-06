var util = require('util');
var settings = require('@private/vmark-settings');
var _ = require('underscore');
var myUtil = require('../../../../app/util');
var PowerType = require('../../../common/models/TypeRegistry').item('PowerType');
var wechatApi = require('../../../wechat/common/api').api;

var Service = function(context){
    this.context = context;
};

Service.prototype.create = function*(jsonData){
    var logger = this.context.logger;
    var PowerParticipant = this.context.models.PowerParticipant;
    var kv = this.context.kvs.power;
    var participant = new PowerParticipant(jsonData);
    var doc = yield participant.save();
    yield kv.saveParticipantAsync(doc.toObject());
    logger.info('success create participant: ' + util.inspect(doc));
    return doc.toObject();
}

Service.prototype.updateById = function*(id, update){
    var logger = this.context.logger;
    var PowerParticipant = this.context.models.PowerParticipant;
    var kv = this.context.kvs.power;

    var doc = yield PowerParticipant.findByIdAndUpdate(id, update, {new: true}).lean().exec();
    yield kv.saveParticipantAsync(doc);
    logger.info('success update participant by id: ' + id);
    return doc;
}

Service.prototype.syncById = function*(id, update){
    var logger = this.context.logger;
    var PowerParticipant = this.context.models.PowerParticipant;

    var doc = yield PowerParticipant.findByIdAndUpdate(id, update, {new: true}).lean().exec();
    logger.info('success update participant by id: ' + id);
    return doc;
}

Service.prototype.update = function*(con, update){
    var logger = this.context.logger;
    var PowerParticipant = this.context.models.PowerParticipant;
    var res = yield PowerParticipant.update(con, update).exec();
    logger.info('success update participant by condition: ' + con);
    return res;
}

Service.prototype.loadById = function*(id){
    var logger = this.context.logger;
    //var PowerParticipant = this.context.models.PowerParticipant;
    //var doc = yield PowerParticipant.findById(id, {}, {lean: true}).populate({path: 'power'}).populate({path: 'user'}).exec();
    var kv = this.context.kvs.power;
    var userKv = this.context.kvs.platformUser;
    var powerActivityService = this.context.services.powerActivityService;
    var participant = yield kv.loadParticipantByIdAsync(id);
    if(participant){
        var activity = yield powerActivityService.loadById(participant.activity);
        var user = yield userKv.loadByIdAsync(participant.user);
        var rank = yield kv.getParticipantRankAsync(participant.activity, participant.user);
        var helpArr = yield kv.getHelpFriendsSetAsync(id);
        participant.participateLink = 'http://' + settings.app.domain + '/marketing/power/join?id=' + activity._id;
        participant.homePage = 'http://' + settings.app.domain + '/marketing/power/participant?id=' + participant._id;
        participant.activity = activity;
        participant.user = user;
        participant.rank = rank;
        participant.help_friends = helpArr;
    }
    logger.info('success load participant by id: ' + id);
    return participant;
}

Service.prototype.deleteById = function*(id){
    var logger = this.context.logger;
    var PowerParticipant = this.context.models.PowerParticipant;
    var doc = yield PowerParticipant.findByIdAndUpdate(id, {lFlg: 'd'}, {new: true}).lean().exec();
    logger.info('success delete participant by id: ' + id);
    return doc;
}

Service.prototype.loadAll = function*(){
    var logger = this.context.logger;
    var PowerParticipant = this.context.models.PowerParticipant;
    var docs = yield PowerParticipant.find({lFlg: 'a'}).lean().exec();
    logger.info('success load all participant');
    return docs;
}

Service.prototype.filter = function*(params){
    var logger = this.context.logger;
    var PowerParticipant = this.context.models.PowerParticipant;
    var query = PowerParticipant.find();

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
    var kv = this.context.kvs.power;
    var status = {
        homeLink: '',
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
    var active = today >= new Date(participant.activity.startTime) && today <= new Date(participant.activity.endTime);
    if (!active) {
        status.join = 'none';
        status.help = 'none';
        status.active = false;
        if (today < new Date(participant.activity.startTime)) {
            status.noActivated = '';
        }
        if (today > new Date(participant.activity.endTime)) {
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
            var participantId = yield kv.getParticipantIdByUserIdAndActivityIdAsync(participant.activity._id, user.id);
            if (participantId) {
                status.join = 'none';
                status.joined = '';
                status.homeLink = 'http://' + settings.app.domain + '/marketing/power/participant?id=' + participantId;
            }
            var helpArr = yield kv.getHelpFriendsSetAsync(participant.id);
            if (_.indexOf(helpArr, user.openid) !== -1) {
                status.help = 'none';
                status.helped = '';
            }
            if (helpArr.length >= participant.activity.friend_help_count_limit) {
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
    var kv = this.context.kvs.power;
    if (status.helpLimited === 'none') {
        var res = yield kv.addHelpFriendToSetAsync(participant.id, user.openid);
        if(res === 1) {
            var min = parseInt(participant.activity.friend_help_min_power || 0);
            var max = parseInt(participant.activity.friend_help_max_power || 0);
            var helpPower = myUtil.random(min, max);
            var data = yield kv.incParticipantPowerByIdAsync(participant.id, helpPower);
            yield kv.increaseParticipantScoreInRankingListAsync(participant.activity._id, participant.user.id, helpPower);

            var rank = yield kv.getParticipantRankAsync(participant.activity._id, participant.user._id);
            result = {rank: rank, total_power: data, helpPower: helpPower};
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

/**
 * handle user scan participant poster
 * @params qr
 * @params openid
 *
 * return {
 *    reply: 'xxxxx', reply msg send to user
 * }
 * */
Service.prototype.scanParticipantPoster = function*(qr, openid){
    var logger = this.context.logger;
    var participant = null;
    try {
        var platformUserService = this.context.services.platformUserService;
        var powerPosterService = this.context.services.powerPosterService;
        var poster = yield powerPosterService.loadBySceneId(qr.sceneId);
        var user = yield platformUserService.loadPlatformUserByOpenidAsync(openid);
        participant = yield this.loadById(poster.participant);
        var res = yield this.help(participant, user);
        var reply = '';
        if(res.limited){
            reply = '<' + participant.user.nickname + '> 助力人数已达上限';
        }else if(res.error){
            reply = '助力<' + participant.user.nickname + '> 失败';
        }else if(res.helped){
            reply = '您已经助力过 <' + participant.user.nickname + '>';
        }else {
            if (participant.activity.type = PowerType.RedPacket.value()) {
                reply = '<' + user.nickname + '> 您已成功为 \n<' + participant.user.nickname + '> 助力 ' + res.helpPower + ' 红包,\n <' + participant.user.nickname + '> 目前总红包数: ' + res.total_power + ', 排名: ' + res.rank;
            }else if(participant.activity.type = PowerType.Points.value()){
                reply = '<' + user.nickname + '> 您已成功为 \n<' + participant.user.nickname + '> 助力 ' + res.helpPower + ' 积分,\n <' + participant.user.nickname + '> 目前总积分: ' + res.total_power + ', 排名: ' + res.rank;
            }
        }

        yield wechatApi.sendTextAsync(openid, reply);
        var articles = [
            {
                "title": participant.user.nickname + '  的活动主页，点击查看详情',
                "description": participant.activity.shareDesc,
                "url": participant.homePage,
                "picurl": participant.activity.shareImg
            }];
        yield wechatApi.sendNewsAsync(openid, articles);

    }catch(e){
        logger.error('scan paticipant poster err: ' + e + ', qr: ' + qr._id + ', user openid: ' + openid);
        return wechatApi.sendText(openid, '抱歉,助力好友失败', function (err) {
            if(err) logger.error(err);
        });
    }
}

module.exports = Service;