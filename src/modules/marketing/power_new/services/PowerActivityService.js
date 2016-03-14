var util = require('util');
var settings = require('@private/vmark-settings');
var qrRegistry = require('../../../wechatsite/qr');

var Service = function(context){
    this.context = context
};

Service.prototype.create = function*(jsonData){
    var logger = this.context.logger;
    var PowerActivity = this.context.models.PowerActivity;
    var kv = this.context.kvs.power;
    try{
        var qrType = qrRegistry.getQrType('ac');
        var qr = yield qrType.createQrAsync();
        jsonData.qrCode = qr._id;
        var power = new PowerActivity(jsonData);
        var doc = yield power.save();
        yield kv.saveActivityAsync(doc.toObject());
        logger.info('success create power: ' + util.inspect(doc));
        return doc.toObject();
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
        if(!oldDoc.withPic && update.withPic){
            var qrType = qrRegistry.getQrType('ac');
            var qr = yield qrType.createQrAsync();
            update.qrCode = qr._id;
        }
        var doc = yield PowerActivity.findByIdAndUpdate(id, update, {new: true}).lean().exec();
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
        doc.bgImg = doc.bgImg.split(',');
        doc.participateLink = 'http://' + settings.app.domain + '/marketing/power/join?id=' + doc._id;
        //if(doc.withPic === 'true') {
        //    var qrType = qrRegistry.getQrType('ac');
        //    console.error(doc);
        //    var qr = yield qrType.getQrByIdAsync(doc.qrCode);
        //    doc.qrCodeUrl = qrType.getQrCodeUrl(qr.ticket);
        //}
        logger.info('success load power by id: ' + id);
    }else{
        logger.info('failed load power by id: ' + id + ' err: no such activity');
    }
    return doc;
}

Service.prototype.loadByQrCodeId = function*(id){
    var logger = this.context.logger;
    var PowerActivity = this.context.models.PowerActivity;
    var doc = yield PowerActivity.findOne({qrCode: id}, {}, {lean: true}).populate({path: 'poster'}).exec();
    if(doc) {
        logger.info('success load power by qrCode id: ' + id);
    }else{
        logger.info('failed load power by qrCode id: ' + id + ' err: no such activity');
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

Service.prototype.loadAll = function*(){
    var logger = this.context.logger;
    var PowerActivity = this.context.models.PowerActivity;
    var docs = yield PowerActivity.find({lFlg: 'a'}).populate({path: 'qrCode'}).lean().exec();
    var qrType = qrRegistry.getQrType('ac');
    docs = docs.map(function(item){
        if(item.withPic) {
            item.qrCodeUrl = qrType.getQrCodeUrl(item.qrCode.ticket);
        }
        return item;
    })
    logger.info('success load all power ');
    return docs;
}

Service.prototype.getStatus = function*(power, user){
    var status = {
        participant: '',
        join: '',
        joined: 'none',
        closed: 'none',
        noActivated: 'none'
    }
    var kv = this.context.kvs.power;
    status.participant = yield kv.getParticipantIdByUserIdAndActivityIdAsync
    (power._id, user.id);
    if(status.participant){
        status.join = 'none';
        status.joined = '';
    }
    var today = new Date();
    var active = today >= new Date(power.startTime) && today <= new Date(power.endTime);
    if(!active){
        status.join = 'none';
        status.joined = 'none';
        if(today < new Date(power.startTime)){
            status.noActivated = '';
        }
        if(today > new Date(power.endTime)){
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
Service.prototype.getActivityPoster = function*(qr, openid){
    var logger = this.context.logger;
    try{
        var powerActivityService = this.context.services.powerActivityService;
        var powerPosterService = this.context.services.powerPosterService;
        var platformUserService = this.context.services.platformUserService;

        var activity = yield powerActivityService.loadByQrCodeId(qr._id);
        var user = yield platformUserService.loadPlatformUserByOpenidAsync(openid);
        var mediaId = yield powerPosterService.getActivityPosterMediaId(activity, user);
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
Service.prototype.scanActivityPoster = function*(qr, openid){
    var platformUserService = context.services.platformUserService;
    var powerPosterService = context.services.powerPosterService;
    var poster = yield powerPosterService.loadBySceneId(qr.sceneId);
    var user = yield platformUserService.loadPlatformUserByOpenidAsync()
}

module.exports = Service;