var util = require('util');
var settings = require('@private/vmark-settings');
var PosterType = require('../../../common/models/TypeRegistry').item('PosterType');
var qrTypeRegistry = require('../../../wechatsite/qr/QrTypeRegistries').tenantQrTypeRegistry;
require('../../../wechatsite/qr/qr-center');

var wechatApiCache = require('../../../tenant/wechat/api-cache');

var Service = function(context){
    this.context = context
};

Service.prototype.create = function*(jsonData){
    var logger = this.context.logger;
    var PowerActivity = this.context.models.PowerActivity;
    var kv = this.context.kvs.power;
    try{
        var power = new PowerActivity(jsonData);
        var doc = yield power.save();
        var obj = doc.toObject();
        if(jsonData.withPic) {
            var powerPosterService = this.context.services.powerPosterService;
            var qrType = qrTypeRegistry.getQrType('ac');
            var qr = yield qrType.createQrAsync({wechatId: jsonData.media});
            obj.qrCode = qr._id;
            var posterJson = {
                activity: obj._id,
                posterBgImg: obj.posterBgImg,
                type: PosterType.activity.value()
            }
            var poster = yield powerPosterService.create(posterJson);
            obj.poster = poster._id;
            var wechatApi = yield wechatApiCache.get(jsonData.media).api;
            obj.posterQrCodeUrl = wechatApi.showQRCodeURL(qr.ticket);
            yield this.updateById(obj._id, {poster: poster._id, qrCode: qr._id});
        }
        yield kv.saveActivityAsync(obj);
        logger.info('success create power: ' + util.inspect(obj));
        return obj;
    }catch (err){
        logger.error('failed create power, err: ' + err);
        return null;
    }

}

Service.prototype.updateById = function*(id, update){
    var logger = this.context.logger;
    var PowerActivity = this.context.models.PowerActivity;
    var kv = this.context.kvs.power;
    try{
        var oldDoc = yield PowerActivity.findById(id).lean().exec();
        var posterQrCodeUrl = '';
        if(!oldDoc.withPic && update.withPic){
            var qrType = qrTypeRegistry.getQrType('ac');
            var qr = yield qrType.createQrAsync({wechatId: update.media});
            update.qrCode = qr._id;
            var posterJson = {
                activity: obj._id,
                posterBgImg: obj.posterBgImg,
                type: PosterType.activity.value()
            }
            var poster = yield powerPosterService.create(posterJson);
            update.poster = poster._id;
            var wechatApi = yield wechatApiCache.get(update.media).api;
            posterQrCodeUrl = wechatApi.showQRCodeURL(qr.ticket);
        }
        var doc = yield PowerActivity.findByIdAndUpdate(id, update, {new: true}).lean().exec();
        doc.posterQrCodeUrl = posterQrCodeUrl;
        yield kv.saveActivityAsync(doc);
        logger.info('success update power by id: ' + id);
        return doc;
    }catch(err){
        logger.error('failed update power, err: ' + err);
        return null;
    }
}

Service.prototype.syncById = function*(id, update){
    var logger = this.context.logger;
    var PowerActivity = this.context.models.PowerActivity;
    try{
        var doc = yield PowerActivity.findByIdAndUpdate(id, update, {new: true}).lean().exec();
        logger.info('success sync power by id: ' + id);
        return doc;
    }catch(err){
        logger.error('failed sync power, err: ' + err);
        return null;
    }
}

Service.prototype.loadById = function*(id){
    var logger = this.context.logger;
    var kv = this.context.kvs.power;
    //var PowerActivity = this.context.models.PowerActivity;
    //var doc = yield PowerActivity.findById(id, {}, {lean: true}).exec();
    var doc = yield kv.loadActivityByIdAsync(id);
    if(doc) {
        doc.bgImg = doc.bgImg ? doc.bgImg.split(',') : [];
        doc.participateLink = 'http://' + settings.app.domain + '/marketing/power/join?id=' + doc._id;
        doc.url = 'http://' + settings.app.domain + '/marketing/power/activity?id=' + doc._id;
        //if(doc.withPic === 'true') {
        //    doc.posterQrCodeUrl = yield this.context.services.powerPosterService.getPosterQrCodeUrlById(doc.poster);
        //}
        logger.info('success load power activity by id: ' + id);
    }else{
        logger.info('failed load power activity by id: ' + id + ' err: no such activity');
    }
    return doc;
}

Service.prototype.loadByQrCodeIdAndWechatId = function*(id, wechatId){
    var logger = this.context.logger;
    var PowerActivity = this.context.models.PowerActivity;
    var doc = yield PowerActivity.findOne({qrCode: id, media: wechatId}, {}, {lean: true}).populate({path: 'poster'}).exec();
    if(doc) {
        logger.info('success load power by qrCode id: ' + id + ' and wechatId: ' + wechatId);
    }else{
        logger.info('failed load power by qrCode id: ' + id + ' and wechatId: ' + wechatId + ' err: no such activity');
    }
    return doc;
}

Service.prototype.deleteById = function*(id){
    var logger = this.context.logger;
    var kv = this.context.kvs.power;
    var PowerActivity = this.context.models.PowerActivity;
    var doc = yield PowerActivity.findByIdAndUpdate(id, {lFlg: 'd'}, {new: true}).lean().exec();
    yield kv.saveActivityAsync(doc);
    logger.info('success delete power by id: ' + id);
    return doc;
}

Service.prototype.loadAll = function*(wechatId){
    var logger = this.context.logger;
    var PowerActivity = this.context.models.PowerActivity;
    var filter = {lFlg: 'a'};
    if(wechatId){
        filter.media = wechatId;
    }

    var docs = yield PowerActivity.find(filter).populate({path: 'qrCode'}).lean().exec();
    var qrType = qrTypeRegistry.getQrType('ac');
    docs = docs.map(function(item){
        if(item.withPic && item.qrCode) {
            item.qrCodeUrl = qrType.getQrCodeUrl(item.qrCode.ticket);
        }
        return item;
    })
    logger.info('success load all power ');
    return docs;
}

Service.prototype.getStatus = function*(activity, user){
    var status = {
        participant: '',
        join: '',
        joined: 'none',
        closed: 'none',
        noActivated: 'none'
    }
    var kv = this.context.kvs.power;
    status.participant = yield kv.getParticipantIdByUserIdAndActivityIdAsync(activity._id, user._id);
    if(status.participant){
        status.join = 'none';
        status.joined = '';
    }
    var today = new Date();
    var active = today >= new Date(activity.startTime) && today <= new Date(activity.endTime);
    if(!active){
        status.join = 'none';
        status.joined = 'none';
        if(today < new Date(activity.startTime)){
            status.noActivated = '';
        }
        if(today > new Date(activity.endTime)){
            status.closed = '';
        }
    }
    return status;
}

Service.prototype.getRankingList = function*(id, num){
    var kv = this.context.kvs.power;
    var participants = yield kv.getRankingListWithScoreAsync(id, num);
    return participants;
}

Service.prototype.increaseViews = function*(id){
    var kv = this.context.kvs.power;
    return yield kv.incActivityViewsByIdAsync(id);
}

Service.prototype.putParticipantToMapString = function*(id, participantUserBrief){
    var kv = this.context.kvs.power;
    var logger = this.context.logger;
    var userMap = null;
    var userMapString = yield kv.getParticipantMapStringAsync(id);
    if(!userMapString) {
        userMap = {};
    }
    else{
        try{
            userMap = JSON.parse(userMapString);
        }
        catch(e){
            logger.error('Fail to parse participant user map: ' + e);
            logger.error(userMapString);
            userMap = {};
        }
    }
    userMap[participantUserBrief.id] = participantUserBrief;
    yield kv.setParticipantMapStringAsync(id, JSON.stringify(userMap));

    return userMap;
}

Service.prototype.getParticipantRankingList = function*(id, count){
    var kv = this.context.kvs.power;
    var userMapString = yield kv.getParticipantMapStringAsync(id);

    //return to see: this is blank
    if(!userMapString) return null;
    var userMap = JSON.parse(userMapString);
    var rankingList = yield kv.getRankingListAsync(id, count);

    //return to say: this is blank
    if(!rankingList || rankingList.length==0) return null;
    var userRankingList = [];
    var len = rankingList.length;
    for(var i=0; i<len; i++, i++){
        var userId = rankingList[i];
        var user = userMap[userId];
        if(user){
            user.score = rankingList[i+1];
            userRankingList.push(user);
        }
    }

    return userRankingList;
}

/**
 * wechat scan activity qrCode get activity poster
 * @params qr activity qrCode
 * @openid platform user openid
 *
 * return {
 *    success: true or false,
 *    reply: 'xxxxx', reply msg send to user
 *    mediaId: 'abc', poster mediaId, will expired after three days
 * }
 **/
Service.prototype.getActivityPoster = function*(qr, wechatId, openid){
    var logger = this.context.logger;
    try{
        var powerActivityService = this.context.services.powerActivityService;
        var powerPosterService = this.context.services.powerPosterService;
        var tenantUserService = this.context.services.tenantUserService;

        var activity = yield powerActivityService.loadByQrCodeId(qr._id);
        var user = yield tenantUserService.loadUserByWechatIdAndOpenidAsync(wechatId, openid);
        var mediaId = '';
        if(!activity.poster){
            var posterJson = {
                user: user._id,
                activity: activity._id,
                posterBgImg: activity.posterBgImg,
                type: PosterType.activity.value()
            }
            var poster = yield powerPosterService.create(posterJson);
            yield this.updateById(activity._id, {poster: poster._id});
            mediaId = poster.mediaId;
        }else {
            mediaId = yield powerPosterService.getPosterMediaId(activity.poster);
        }
        var res = {
            success: true,
            reply: '助力活动 [' + activity.name + '] 活动海报获取成功:',
            mediaId: mediaId
        }
        return res;
    }catch(e){
        logger.error('get activity poster err: ' + e + ', qr: ' + qr._id + ', user openid: ' + openid);
        return {
            success: false,
            reply: '获取助力活动海报失败, 请联系管理员',
            mediaId: null
        }
    }
}

/**
 * handle user scan activity poster
 * @params qr
 * @params openid
 *
 * return {
 *    success: true or false,
 *    reply: 'xxxxx', reply msg send to user
 *    mediaId: 'abc', participant poster mediaId, will expired after three days
 * }
 * */
Service.prototype.scanActivityPoster = function*(qr, wechatId, openid){
    var logger = this.context.logger;
    var activity = null;
    var participant = null;
    var wechatApi = yield wechatApiCache.get(wechatId).api;

    try {
        var tenantUserService = this.context.services.tenantUserService;
        var powerParticipantService = this.context.services.powerParticipantService;
        var powerPosterService = this.context.services.powerPosterService;
        var poster = yield powerPosterService.loadByWechatIdAndSceneId(wechatId, qr.sceneId);
        var user = yield tenantUserService.loadUserByWechatIdAndOpenidAsync(wechatId, openid);
        activity = yield this.loadById(poster.activity);
        var status = yield this.getStatus(activity, user);
        var reply = '', sendActivityCard = false, sendParticipantCard = false, posterMediaId = '';
        if(status.participant){
            var homePage = 'http://' + settings.app.domain + '/marketing/power/participant?id=' + status.participant;
            participant = {
                homePage: homePage
            }
            reply = '您已经参与过该活动';
            sendParticipantCard = true;
        }else if(!status.noActivated){
            reply = '活动[' + activity.name + ']未开始';
            sendActivityCard = true;
        }else if(!status.closed){
            reply = '活动[' + activity.name + ']已结束';
            sendActivityCard = true;
        }else{
            var participantJson = {
                activity: activity._id
                , user: user._id
                , total_power: activity.base_power
                , help_friends: []
            }
            var data = yield powerParticipantService.create(participantJson);
            var posterJson = {
                user: user._id,
                activity: activity._id,
                participant: data._id,
                posterBgImg: activity.posterBgImg,
                type: PosterType.participant.value()
            }
            var poster = yield powerPosterService.create(posterJson);
            yield powerParticipantService.updateById(data._id, {poster: poster._id});
            var userBrief = {
                id: user._id,
                nickname: user.nickname,
                headimgurl: user.headimgurl
            }
            yield this.putParticipantToMapString(activity._id, userBrief);
            data.homePage = 'http://' + settings.app.domain + '/marketing/power/participant?id=' + data._id;
            reply = '您已成功参与活动: ' + activity.name;
            participant = data;
            posterMediaId = poster.mediaId;
            sendParticipantCard = true;
        }

        yield wechatApi.sendTextAsync(openid, reply);
        if(sendActivityCard){
            var articles = [
                {
                    "title": activity.shareTitle,
                    "description": activity.shareDesc,
                    "url": activity.url,
                    "picurl": activity.shareImg
                }];
            yield wechatApi.sendNewsAsync(openid, articles);
        }
        if(sendParticipantCard){
            var articles = [
                {
                    "title": user.nickname + '  的活动主页，点击查看详情',
                    "description": activity.shareDesc,
                    "url": participant.homePage,
                    "picurl": activity.shareImg
                }];
            yield wechatApi.sendNewsAsync(openid, articles);
        }
        if(posterMediaId) {
            yield wechatApi.sendTextAsync(openid, user.nickname + '  的活动海报，点击查看和分享');
            yield wechatApi.sendImageAsync(openid, posterMediaId);

        }

    }catch(e){
        logger.error('scan activity poster err: ' + e + ', qr: ' + qr._id + ', user openid: ' + openid);
        wechatApi.sendText(openid, '抱歉,参与活动失败', function (err) {
            if(err) logger.error(err);
        });
    }
}

module.exports = Service;