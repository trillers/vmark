var util = require('util');
var settings = require('@private/vmark-settings');
var posterHandler = require('../../poster');
var wechatApi = require('../../../wechat/common/api').api;
var PosterType = require('../../../common/models/TypeRegistry').item('PosterType');

var Service = function(context){
    this.context = context
};

/**
 * create power activity poster
 * @params jsonData
 * {
 *    bgImg: 'xxx' //poster background image, required
 *    type: 'acp' or 'pap' //poster type, activity poster or participant poster, required
 *    activity: 'ddd' //activity id
 *    participant: 'participant id'
 *    user: 'tenant user id' // required
 * }
* **/
Service.prototype.create = function*(jsonData){
    var logger = this.context.logger;
    var PowerPoster = this.context.models.PowerPoster;
    var userKv = this.context.kvs.tenantUser;
    var posterKv = this.context.kvs.poster;
    var user = yield userKv.loadByIdAsync(jsonData.user);
    var posterData = {};
    jsonData.bgImg = 'http://picm.photophoto.cn/085/056/002/0560020133.jpg';
    if(jsonData.type === PosterType.activity.value()){
        posterData = yield posterHandler.activityPosterHandler.create(jsonData.bgImg, user);
    }else if(jsonData.type === PosterType.participant.value()){
        posterData = yield posterHandler.participantPosterHandler.create(jsonData.bgImg, user);
    }
    if(posterData.err){
        logger.error('poster handler err: ' + posterData.err);
        return null
    }
    jsonData.mediaId = posterData.mediaId;
    jsonData.sceneId = posterData.sceneId;
    jsonData.path = posterData.path;
    var poster = new PowerPoster(jsonData);
    try{
        var doc = yield poster.save();
        yield posterKv.saveAsync(doc.toObject());
        logger.info('success create power poster: ' + util.inspect(doc));
        return doc.toObject();
    }catch (err){
        logger.error('failed create power poster, err: ' + err);
        return null;
    }

}

Service.prototype.updateById = function*(id, update){
    var logger = this.context.logger;
    var PowerPoster = this.context.models.PowerPoster;
    var posterKv = this.context.kvs.poster;
    try{
        var doc = yield PowerPoster.findByIdAndUpdate(id, update, {new: true}).lean().exec();
        yield posterKv.saveAsync(doc);
        logger.info('success update power poster by id: ' + id);
        return doc;
    }catch(err){
        logger.error('failed update power poster, err: ' + err);
        return null;
    }
}

Service.prototype.loadById = function*(id){
    var logger = this.context.logger;
    var kv = this.context.kvs.poster;
    var doc = yield kv.loadByIdAsync(id);
    logger.info('success load poster by id: ' + id);
    return doc;
}

Service.prototype.loadBySceneId = function*(sid){
    var logger = this.context.logger;
    var kv = this.context.kvs.poster;
    var posterId = yield kv.loadIdBySceneIdAsync(sid);
    var doc = yield kv.loadByIdAsync(posterId);

    logger.info('success load poster by sceneId: ' + sid);
    return doc;
}

/**
 * get activity poster media id
 * @params poster
 *
 * return poster media id
 **/
Service.prototype.getPosterMediaId = function*(poster){
    var expired = this.isInvalid(poster);
    if(expired){
        var imageData = yield wechatApi.uploadMediaAsync(poster.path, 'image');
        var mediaId = imageData[0].media_id;
        yield this.updateById(poster._id, {mediaId: mediaId});
        return mediaId;
    }else {
        return poster.mediaId;
    }
}

/**
 * judge if poster media is invalid
 * @params poster
 * */
Service.prototype.isInvalid = function(poster){
    var oldTimestamp = (new Date(poster.crtOn)).getTime();
    var nowTimestamp = (new Date()).getTime();
    return nowTimestamp >= oldTimestamp + poster.expire * 1000;
}
module.exports = Service;