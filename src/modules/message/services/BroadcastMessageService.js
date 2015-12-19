var logger = require('../../../app/logging').logger;
var u = require('../../../app/util');
var BroadcastMessage = require('../models/BroadcastMessage').model;
var Promise = require('bluebird');

var Service = {};

Service.load = function (id, callback) {
    BroadcastMessage.findById(id).lean(true).exec(function (err, doc) {
        if (err) {
            logger.error('Fail to load BroadcastMessage [id=' + id + ']: ' + err);
            if (callback) callback(err);
            return;
        }

        logger.debug('Succeed to load  BroadcastMessage [id=' + id + ']');
        if (callback) callback(null, doc);
    })
};

Service.create = function (json, callback) {
    var broadcastMessage = new BroadcastMessage(json);
    broadcastMessage.save(function (err, doc, numberAffected) {
        if (err) {
            logger.error('Fail to create BroadcastMessage: ' + err + '\r\n');
            if (callback) callback(err);
            return;
        }
        if (numberAffected) {
            logger.debug('Succeed to create BroadcastMessage: ' + require('util').inspect(doc) + '\r\n');
            if (callback) callback(null, doc.toObject());
        }
        else {
            logger.error('Fail to create BroadcastMessage: ' + require('util').inspect(doc) + '\r\n');
            if (callback) callback(new Error('Fail to create BroadcastMessage'));
        }
    });
};

Service.delete = function (id, callback) {
    BroadcastMessage.findByIdAndRemove(id, function (err, doc) {
        if (err) {
            logger.error('Fail to delete BroadcastMessage [id=' + id + ']: ' + err);
            if (callback) callback(err);
            return;
        }

        logger.debug('Succeed to delete Message [id=' + id + ']');
        if (callback) callback(null, doc);
    });
};

Service.update = function (id, update, callback) {
    BroadcastMessage.findByIdAndUpdate(id, update, {new: true}, function (err, result){
        if(err) {
            callback(err);
        } else {
            logger.debug('Succeed to update Message [id=' + id + ']');
            callback(null, result);
        }
    });
};

Service.updateByCondition = function (condition, update, callback) {
    BroadcastMessage.findOneAndUpdate(condition, update, {new: true}, function (err, doc){
        if(err) {
            callback(err);
        } else {
            logger.debug('Succeed to update BroadcastMessage [id=' + doc._id + ']');
            callback(null, doc);
        }
    });
};

Service.find = function (params, callback) {
    var query = BroadcastMessage.find();

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
    //TODO: specify select list, exclude comments in list view
    query.lean(true);
    query.exec(function (err, docs) {
        if (err) {
            callback(err);
            return;
        }

        if (callback) callback(null, docs);
    });
};

Service.filter = function (params, callback) {
    var query = BroadcastMessage.find();

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
    query.exec(function (err, docs) {
        if (err) {
            callback(err);
            return;
        }

        if (callback) callback(null, docs);
    });
};


Service = Promise.promisifyAll(Service);

module.exports = Service;


