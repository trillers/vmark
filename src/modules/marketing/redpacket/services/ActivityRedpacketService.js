var util = require('util');

var Service = function(context){
    this.context = context
};

Service.prototype.create = function*(jsonData){
    var logger = this.context.logger;
    var ActivityRedpacket = this.context.models.ActivityRedpacket;
    var redpacket = new ActivityRedpacket(jsonData);
    var doc = yield redpacket.save();
    logger.info('success create redpacket: ' + util.inspect(doc));
    return doc.toObject();
}

Service.prototype.updateById = function*(id, update){
    var logger = this.context.logger;
    var ActivityRedpacket = this.context.models.ActivityRedpacket;
    var doc = yield ActivityRedpacket.findByIdAndUpdate(id, update, {new: true}).lean().exec();
    logger.info('success update redpacket by id: ' + id);
    return doc;
}

Service.prototype.loadById = function*(id){
    var logger = this.context.logger;
    var ActivityRedpacket = this.context.models.ActivityRedpacket;
    var doc = yield ActivityRedpacket.findById(id, {}, {lean: true}).exec();
    logger.info('success load redpacket by id: ' + id);
    return doc;
}

Service.prototype.deleteById = function*(id){
    var logger = this.context.logger;
    var ActivityRedpacket = this.context.models.ActivityRedpacket;
    var doc = yield ActivityRedpacket.findByIdAndUpdate(id, {lFlg: 'd'}, {new: true}).lean().exec();
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

module.exports = Service;