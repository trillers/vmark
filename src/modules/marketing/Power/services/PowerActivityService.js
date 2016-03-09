var util = require('util');
var settings = require('@private/vmark-settings');

var Service = function(context){
    this.context = context
};

Service.prototype.create = function*(jsonData){
    var logger = this.context.logger;
    var PowerActivity = this.context.models.PowerActivity;
    var kv = this.context.kvs.power;
    var power = new PowerActivity(jsonData);
    try{
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
        logger.info('success load power by id: ' + id);
    }else{
        logger.info('failed load power by id: ' + id + ' err: no such activity');
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
    var docs = yield PowerActivity.find({lFlg: 'a'}).lean().exec();
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
module.exports = Service;