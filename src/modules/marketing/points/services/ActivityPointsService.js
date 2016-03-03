var util = require('util');
var settings = require('@private/vmark-settings');

var Service = function(context){
    this.context = context
};

Service.prototype.create = function*(jsonData){
    var logger = this.context.logger;
    var ActivityPoints = this.context.models.ActivityPoints;
    var kv = this.context.kvs.points;
    var points = new ActivityPoints(jsonData);
    try{
        var doc = yield points.save();
        yield kv.saveActivityAsync(doc.toObject());
        logger.info('success create points: ' + util.inspect(doc));
        return doc.toObject();
    }catch (err){
        logger.error('failed create points, err: ' + err);
        return null;
    }

}

Service.prototype.updateById = function*(id, update){
    var logger = this.context.logger;
    var ActivityPoints = this.context.models.ActivityPoints;
    var kv = this.context.kvs.points;
    try{
        var doc = yield ActivityPoints.findByIdAndUpdate(id, update, {new: true}).lean().exec();
        yield kv.saveActivityAsync(doc);
        logger.info('success update points by id: ' + id);
        return doc;
    }catch(err){
        logger.error('failed update points, err: ' + err);
        return null;
    }
}

Service.prototype.syncById = function*(id, update){
    var logger = this.context.logger;
    var ActivityPoints = this.context.models.ActivityPoints;
    try{
        var doc = yield ActivityPoints.findByIdAndUpdate(id, update, {new: true}).lean().exec();
        logger.info('success sync points by id: ' + id);
        return doc;
    }catch(err){
        logger.error('failed sync points, err: ' + err);
        return null;
    }
}

Service.prototype.loadById = function*(id){
    var logger = this.context.logger;
    var kv = this.context.kvs.points;
    //var ActivityPoints = this.context.models.ActivityPoints;
    //var doc = yield ActivityPoints.findById(id, {}, {lean: true}).exec();
    var doc = yield kv.loadActivityByIdAsync(id);
    doc.bgImg = doc.bgImg.split(',');
    doc.participateLink = 'http://' + settings.app.domain + '/marketing/points/join?id=' + doc._id;
    logger.info('success load points by id: ' + id);
    return doc;
}

Service.prototype.deleteById = function*(id){
    var logger = this.context.logger;
    var kv = this.context.kvs.points;
    var ActivityPoints = this.context.models.ActivityPoints;
    var doc = yield ActivityPoints.findByIdAndUpdate(id, {lFlg: 'd'}, {new: true}).lean().exec();
    yield kv.saveActivityAsync(doc);
    logger.info('success delete points by id: ' + id);
    return doc;
}

Service.prototype.loadAll = function*(){
    var logger = this.context.logger;
    var ActivityPoints = this.context.models.ActivityPoints;
    var docs = yield ActivityPoints.find({lFlg: 'a'}).lean().exec();
    logger.info('success load all points ');
    return docs;
}

Service.prototype.getStatus = function*(points, user){
    var status = {
        participant: '',
        join: '',
        joined: 'none',
        closed: 'none',
        noActivated: 'none'
    }
    var kv = this.context.kvs.points;
    status.participant = yield kv.getParticipantIdByUserIdAndActivityIdAsync
    (points._id, user.id);
    var today = new Date();
    var active = today >= new Date(points.startTime) && today <= new Date(points.endTime);
    if(!active){
        status.join = 'none';
        status.joined = 'none';
        if(today < new Date(points.startTime)){
            status.noActivated = '';
        }
        if(today > new Date(points.endTime)){
            status.closed = '';
        }
    }
    return status;
}

Service.prototype.getRankingList = function*(id, num){
    var kv = this.context.kvs.points;
    var participants = yield kv.getRankingListWithScoreAsync(id, num);
    return participants;
}

Service.prototype.increaseViews = function*(id){
    var kv = this.context.kvs.points;
    return yield kv.incActivityViewsByIdAsync(id);
}
module.exports = Service;