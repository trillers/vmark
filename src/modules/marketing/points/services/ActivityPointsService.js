var util = require('util');

var Service = function(context){
    this.context = context
};

Service.prototype.create = function*(jsonData){
    var logger = this.context.logger;
    var ActivityPoints = this.context.models.ActivityPoints;
    var points = new ActivityPoints(jsonData);
    var doc = yield points.save();
    logger.info('success create points: ' + util.inspect(doc));
    return doc.toObject();
}

Service.prototype.updateById = function*(id, update){
    var logger = this.context.logger;
    var ActivityPoints = this.context.models.ActivityPoints;
    var doc = yield ActivityPoints.findByIdAndUpdate(id, update, {new: true}).lean().exec();
    logger.info('success update points by id: ' + id);
    return doc;
}

Service.prototype.loadById = function*(id){
    var logger = this.context.logger;
    var ActivityPoints = this.context.models.ActivityPoints;
    var doc = yield ActivityPoints.findById(id, {}, {lean: true}).exec();
    logger.info('success load points by id: ' + id);
    return doc;
}

Service.prototype.deleteById = function*(id){
    var logger = this.context.logger;
    var ActivityPoints = this.context.models.ActivityPoints;
    var doc = yield ActivityPoints.findByIdAndUpdate(id, {lFlg: 'd'}, {new: true}).lean().exec();
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

module.exports = Service;