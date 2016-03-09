var util = require('util');
var settings = require('@private/vmark-settings');
var posterHandler = require('../../poster');
var PosterType = require('../../../common/models/TypeRegistry').item('PosterType');

var Service = function(context){
    this.context = context
};

Service.prototype.create = function*(jsonData){
    var logger = this.context.logger;
    var PowerPoster = this.context.models.PowerPoster;
    var userKv = this.context.kvs.platformUser;
    var posterKv = this.context.kvs.poster;
    var user = yield userKv.loadByIdAsync(jsonData.user);
    var posterData = {};
    jsonData.bgImg = 'http://picm.photophoto.cn/085/056/002/0560020133.jpg';
    if(jsonData.type === PosterType.activity.value()){
        posterData = yield posterHandler.activityPosterHandler.create(jsonData.bgImg);
    }else if(jsonData.type === PosterType.participant.value()){
        posterData = yield posterHandler.participantPosterHandler.create(jsonData.bgImg, user.headimgurl);
    }
    if(posterData.err){
        logger.info('poster handler err: ' + posterData.err);
        return null
    }
    jsonData.mediaId = posterData.mediaId;
    jsonData.sceneId = posterData.sceneId;
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
    var kv = this.context.kvs.power;
    //var ActivityPower = this.context.models.ActivityPower;
    //var doc = yield ActivityPower.findById(id, {}, {lean: true}).exec();
    var doc = yield kv.loadActivityByIdAsync(id);
    doc.bgImg = doc.bgImg.split(',');
    doc.participateLink = 'http://' + settings.app.domain + '/marketing/power/join?id=' + doc._id;
    logger.info('success load power by id: ' + id);
    return doc;
}

Service.prototype.loadByUserId = function*(uid){
    var logger = this.context.logger;
    var kv = this.context.kvs.power;
    //var ActivityPower = this.context.models.ActivityPower;
    //var doc = yield ActivityPower.findById(id, {}, {lean: true}).exec();
    var doc = yield kv.loadActivityByIdAsync(id);
    doc.bgImg = doc.bgImg.split(',');
    doc.participateLink = 'http://' + settings.app.domain + '/marketing/power/join?id=' + doc._id;
    logger.info('success load power by id: ' + id);
    return doc;
}

Service.prototype.loadBySceneId = function*(sid){
    var logger = this.context.logger;
    var kv = this.context.kvs.power;
    //var ActivityPower = this.context.models.ActivityPower;
    //var doc = yield ActivityPower.findById(id, {}, {lean: true}).exec();
    var doc = yield kv.loadActivityByIdAsync(id);
    doc.bgImg = doc.bgImg.split(',');
    doc.participateLink = 'http://' + settings.app.domain + '/marketing/power/join?id=' + doc._id;
    logger.info('success load power by id: ' + id);
    return doc;
}

module.exports = Service;