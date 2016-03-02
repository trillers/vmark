var util = require('util');
var settings = require('@private/vmark-settings');

var Service = function(context){
    this.context = context
};

Service.prototype.create = function*(jsonData){
    var logger = this.context.logger;
    var ActivityRedpacket = this.context.models.ActivityRedpacket;
    var kv = this.context.kvs.redpacket;
    var redpacket = new ActivityRedpacket(jsonData);
    try{
        var doc = yield redpacket.save();
        yield kv.saveActivityAsync(doc.toObject());
        logger.info('success create redpacket: ' + util.inspect(doc));
        return doc.toObject();
    }catch (err){
        logger.error('failed create redpacket, err: ' + err);
        return null;
    }

}

Service.prototype.updateById = function*(id, update){
    var logger = this.context.logger;
    var ActivityRedpacket = this.context.models.ActivityRedpacket;
    var kv = this.context.kvs.redpacket;
    try{
        var doc = yield ActivityRedpacket.findByIdAndUpdate(id, update, {new: true}).lean().exec();
        yield kv.saveActivityAsync(doc);
        logger.info('success update redpacket by id: ' + id);
        return doc;
    }catch(err){
        logger.error('failed update redpacket, err: ' + err);
        return null;
    }
}

Service.prototype.syncById = function*(id, update){
    var logger = this.context.logger;
    var ActivityRedpacket = this.context.models.ActivityRedpacket;
    try{
        var doc = yield ActivityRedpacket.findByIdAndUpdate(id, update, {new: true}).lean().exec();
        logger.info('success sync redpacket by id: ' + id);
        return doc;
    }catch(err){
        logger.error('failed sync redpacket, err: ' + err);
        return null;
    }
}

Service.prototype.loadById = function*(id){
    var logger = this.context.logger;
    var kv = this.context.kvs.redpacket;
    //var ActivityRedpacket = this.context.models.ActivityRedpacket;
    //var doc = yield ActivityRedpacket.findById(id, {}, {lean: true}).exec();
    var doc = yield kv.loadActivityByIdAsync(id);
    doc.bgImg = doc.bgImg.split(',');
    doc.participateLink = 'http://' + settings.app.domain + '/marketing/redpacket/join?id=' + doc._id;
    logger.info('success load redpacket by id: ' + id);
    return doc;
}

Service.prototype.deleteById = function*(id){
    var logger = this.context.logger;
    var kv = this.context.kvs.redpacket;
    var ActivityRedpacket = this.context.models.ActivityRedpacket;
    var doc = yield ActivityRedpacket.findByIdAndUpdate(id, {lFlg: 'd'}, {new: true}).lean().exec();
    yield kv.saveActivityAsync(doc);
    logger.info('success delete redpacket by id: ' + id);
    return doc;
}

Service.prototype.loadAll = function*(){
    var logger = this.context.logger;
    var ActivityRedpacket = this.context.models.ActivityRedpacket;
    var docs = yield ActivityRedpacket.find({lFlg: 'a'}).lean().exec();
    logger.info('success load all redpacket ');
    return docs;
}

Service.prototype.getStatus = function*(redpacket, user){
    var status = {
        participant: '',
        join: '',
        joined: 'none',
        closed: 'none',
        noActivated: 'none'
    }
    var kv = this.context.kvs.redpacket;
    status.participant = yield kv.getParticipantIdByUserIdAndActivityIdAsync
    (redpacket._id, user.id);
    var today = new Date();
    var active = today >= new Date(redpacket.startTime) && today <= new Date(redpacket.endTime);
    if(!active){
        status.join = 'none';
        status.joined = 'none';
        if(today < new Date(redpacket.startTime)){
            status.noActivated = '';
        }
        if(today > new Date(redpacket.endTime)){
            status.closed = '';
        }
    }
    return status;
}

Service.prototype.getRankingList = function*(id, num){
    var kv = this.context.kvs.redpacket;
    var participants = yield kv.getRankingListWithScoreAsync(id, num);
    return participants;
}

Service.prototype.increaseViews = function*(id){
    var kv = this.context.kvs.redpacket;
    return yield kv.incActivityViewsByIdAsync(id);
}
module.exports = Service;