var util = require('util');
var settings = require('@private/vmark-settings');
var _ = require('underscore');
var myUtil = require('../../../../app/util');
var PowerType = require('../../../common/models/TypeRegistry').item('PowerType');
var wechatApiCache = require('../../../tenant/wechat/api-cache');
var PosterType = require('../../../common/models/TypeRegistry').item('PosterType');

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
    var tenantUserService = this.context.services.tenantUserService;
    var powerActivityService = this.context.services.powerActivityService;
    var participant = yield kv.loadParticipantByIdAsync(id);
    if(participant){
        var activity = yield powerActivityService.loadById(participant.activity);
        var user = {};
        if(activity.wechatId){
            user = yield tenantUserService.loadByWechatIdAndIdAsync(activity.wechatId, participant.user);
        }else{
            user = yield userKv.loadByIdAsync(participant.user);
        }
        var rank = yield kv.getParticipantRankAsync(participant.activity, participant.user);
        var helpArr = yield kv.getHelpFriendsSetAsync(id);
        if(activity.wechatId){
            participant.participateLink = 'http://' + settings.app.domain + '/marketing/tenant/power/' + activity.wechatId + '/join?id=' + activity._id;
            participant.homePage = 'http://' + settings.app.domain + '/marketing/tenant/power/' + activity.wechatId + '/participant?id=' + participant._id;
        }else {
            participant.participateLink = 'http://' + settings.app.domain + '/marketing/power/join?id=' + activity._id;
            participant.homePage = 'http://' + settings.app.domain + '/marketing/power/participant?id=' + participant._id;
        }
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
                if(participant.activity.wechatId) {
                    status.homeLink = 'http://' + settings.app.domain + '/marketing/tenant/power/' + participant.activity.wechatId + '/participant?id=' + participantId;
                }else{
                    status.homeLink = 'http://' + settings.app.domain + '/marketing/power/participant?id=' + participantId;
                }
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
 * @params wechatId
 * @params openid
 *
 * */
Service.prototype.scanParticipantPoster = function*(qr, wechatId, openid){
    var logger = this.context.logger;
    var participant = null;
    var wechatApi = (yield wechatApiCache.get(wechatId)).api;

    try {
        var tenantUserService = this.context.services.tenantUserService;
        var powerPosterService = this.context.services.powerPosterService;
        var poster = yield powerPosterService.loadByWechatIdAndSceneId(wechatId, qr.sceneId);
        var user = yield tenantUserService.loadUserByWechatIdAndOpenidAsync(wechatId, openid);
        participant = yield this.loadById(poster.participant);
        if(participant.activity.type === PowerType.RedPacket.value() || participant.activity.type === PowerType.Points.value()){
            yield this.scanRpAndPoParticipantPoster(user, participant, wechatId);
        }else if(participant.activity.type === PowerType.courses.value()){
            yield this.scanCoParticipantPoster(user, participant, wechatId);
        }

    }catch(e){
        logger.error('scan paticipant poster err: ' + e + ', qr: ' + qr._id + ', user openid: ' + openid);
        logger.error(e.stack);
        return wechatApi.sendText(openid, '抱歉,助力好友失败', function (err) {
            if(err) logger.error(err);
        });
    }
}

/**
 * handle user scan redpacket and points power participant poster
 * @params user
 * @params participant
 * @params wechatId
 * */
Service.prototype.scanRpAndPoParticipantPoster = function*(user, participant, wechatId){
    var wechatApi = (yield wechatApiCache.get(wechatId)).api;

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

    yield wechatApi.sendTextAsync(user.openid, reply);
    var articles = [
        {
            "title": participant.user.nickname + '  的活动主页，点击查看详情',
            "description": participant.activity.shareDesc,
            "url": participant.homePage,
            "picurl": participant.activity.shareImg
        }];
    yield wechatApi.sendNewsAsync(user.openid, articles);
}

/**
 * handle user scan courses power participant poster
 * @params user
 * @params participant
 * @params wechatId
 * */
Service.prototype.scanCoParticipantPoster = function*(user, participant, wechatId){
    var kv = this.context.kvs.power;
    var wechatApi = (yield wechatApiCache.get(wechatId)).api;
    var powerParticipantService = this.context.services.powerParticipantService;
    var powerPosterService = this.context.services.powerPosterService;
    var replyToUser = '', replyToParticipant = '';
    var participantId = yield kv.getParticipantIdByUserIdAndActivityIdAsync(participant.activity._id, user.id);
    if (participantId) {
        replyToUser = '您已经支持过一个好友了,每人只能支持一人哟~~';
        yield wechatApi.sendTextAsync(user.openid, replyToUser);
        return;
    }
    yield kv.addHelpFriendToSetAsync(participant.id, user.openid);
    var helpArr = yield kv.getHelpFriendsSetAsync(participant.id);

    var participantJson = {
        activity: participant.activity._id
        , user: user._id
        , help_friends: []
    }
    var data = yield powerParticipantService.create(participantJson);
    var posterJson = {
        user: user._id,
        activity: participant.activity._id,
        participant: data._id,
        wechatId: wechatId,
        posterBgImg: participant.activity.posterBgImg,
        type: PosterType.participant.value()
    }
    var poster = yield powerPosterService.create(posterJson);
    yield powerParticipantService.updateById(data._id, {poster: poster._id});

    replyToUser = '您已成功参与活动: [' + participant.activity.name + ']\n'
        + '活动说明: \n' + participant.activity.desc;
    yield wechatApi.sendTextAsync(user.openid, replyToUser);
    yield wechatApi.sendImageAsync(user.openid, poster.mediaId);
    if (helpArr.length >= participant.activity.friend_help_count_limit) {
        replyToParticipant = '恭喜你,你的好友 ' + user.nickname + ' 帮你获得了上课链接,点击下方卡片进入';
        yield wechatApi.sendTextAsync(participant.user.openid, replyToParticipant);
        var articles = [
            {
                "title": participant.activity.shareTitle ,
                "description": participant.activity.shareDesc,
                "url": participant.activity.courseUrl,
                "picurl": participant.activity.shareImg
            }];
        yield wechatApi.sendNewsAsync(participant.user.openid, articles);
    }
    var num = participant.activity.friend_help_count_limit - helpArr.length;
    replyToParticipant = '你的好友 ' + user.nickname + ' 帮你扫码啦,还需' + num + '位好友帮忙扫码就可获得免费课程链接了,继续加油哦~~';
    yield wechatApi.sendTextAsync(participant.user.openid, replyToParticipant);
}

module.exports = Service;