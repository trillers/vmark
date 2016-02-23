var util = require('util');

var Service = function(context){
    this.context = context
};

Service.prototype.create = function*(jsonData){
    var logger = this.context.logger;
    var Redpacket = this.context.models.Redpacket;
    var redpacket = new Redpacket(jsonData);
    var doc = yield redpacket.save();
    logger.info('success create redpacket: ' + util.inspect(doc));
    return doc.toObject();
}

Service.prototype.updateById = function*(id, update){
    var logger = this.context.logger;
    var Redpacket = this.context.models.Redpacket;
    var doc = yield Redpacket.findByIdAndUpdate(id, update, {new: true}).lean().exec();
    logger.info('success update redpacket by id: ' + id);
    return doc;
}

Service.prototype.loadById = function*(id){
    var logger = this.context.logger;
    var Redpacket = this.context.models.Redpacket;
    var doc = yield Redpacket.findById(id, {}, {lean: true}).exec();
    logger.info('success load redpacket by id: ' + id);
    return doc;
}

Service.prototype.deleteById = function*(id){
    var logger = this.context.logger;
    var Redpacket = this.context.models.Redpacket;
    var doc = yield Redpacket.findByIdAndUpdate(id, {lFlg: 'd'}, {new: true}).lean().exec();
    logger.info('success delete redpacket by id: ' + id);
    return doc;
}

Service.prototype.loadAll = function*(){
    var logger = this.context.logger;
    var Redpacket = this.context.models.Redpacket;
    var docs = yield Redpacket.find({lFlg: 'a'}).lean().exec();
    logger.info('success load all redpacket ');
    return docs;
}

module.exports = Service;