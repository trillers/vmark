var util = require('util');

var Service = function(context){
    this.context = context;
};

Service.prototype.create = function*(jsonData){
    var logger = this.context.logger;
    var PointsParticipant = this.context.models.PointsParticipant;
    var participant = new PointsParticipant(jsonData);
    var doc = yield participant.save();
    logger.info('success create participant: ' + util.inspect(doc));
    return doc.toObject();
}

Service.prototype.updateById = function*(id, update){
    var logger = this.context.logger;
    var PointsParticipant = this.context.models.PointsParticipant;
    var doc = yield PointsParticipant.findByIdAndUpdate(id, update, {new: true}).lean().exec();
    logger.info('success update participant by id: ' + id);
    return doc;
}

Service.prototype.update = function*(con, update){
    var logger = this.context.logger;
    var PointsParticipant = this.context.models.PointsParticipant;
    var res = yield PointsParticipant.update(con, update).exec();
    logger.info('success update participant by condition: ' + con);
    return res;
}

Service.prototype.loadById = function*(id){
    var logger = this.context.logger;
    var PointsParticipant = this.context.models.PointsParticipant;
    var doc = yield PointsParticipant.findById(id, {}, {lean: true}).populate({path: 'redpacket'}).populate({path: 'user'}).exec();
    logger.info('success load participant by id: ' + id);
    return doc;
}

Service.prototype.deleteById = function*(id){
    var logger = this.context.logger;
    var PointsParticipant = this.context.models.PointsParticipant;
    var doc = yield PointsParticipant.findByIdAndUpdate(id, {lFlg: 'd'}, {new: true}).lean().exec();
    logger.info('success delete participant by id: ' + id);
    return doc;
}

Service.prototype.loadAll = function*(){
    var logger = this.context.logger;
    var PointsParticipant = this.context.models.PointsParticipant;
    var docs = yield PointsParticipant.find({lFlg: 'a'}).lean().exec();
    logger.info('success load all participant');
    return docs;
}

Service.prototype.filter = function*(params){
    var logger = this.context.logger;
    var PointsParticipant = this.context.models.PointsParticipant;
    var query = PointsParticipant.find();

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

module.exports = Service;