var cbUtil = require('../../../framework/callback');
var WechatMediaUserType = require('../../common/models/TypeRegistry').item('WechatMediaUserType');

var Service = function(context){
    this.context = context;
};

Service.prototype.loadById = function(id, callback){
    var WechatMediaUser = this.context.models.WechatMediaUser;
    WechatMediaUser.findById({_id: id}, null, {lean: true}, function(err, doc){
        cbUtil.logCallback(err,
            'Fail to load wechat media user by id ' + id + ': ' + err,
            'Succeed to load wechat media user by id ' + id);
        if(callback) callback(err, doc);
    })
};

Service.prototype.create = function(mediaUserJson, callback){
    var WechatMediaUser = this.context.models.WechatMediaUser;
    var mediaUser = new WechatMediaUser(mediaUserJson);
    mediaUser.save(function (err, result, affected) {
        cbUtil.logCallback(
            err,
            'Fail to save wechat media user: ' + err,
            'Succeed to save wechat media user');

        cbUtil.handleAffected(function(err, doc){
            var json = !err && doc && doc.toObject({virtuals: true});
            if(callback) callback(err, json);
        }, err, result, affected);
    });
};

Service.prototype.updateById = function(id, update, callback){
    var WechatMediaUser = this.context.models.WechatMediaUser;
    WechatMediaUser.findOneAndUpdate({_id: id}, update, {new: true}, function(err, doc){
        cbUtil.logCallback(
            err,
            'Fail to update wechat media user: ' + err,
            'Succeed to update wechat media user');

        cbUtil.handleSingleValue(function(err, doc){
            var json = !err && doc && doc.toObject({virtuals: true});
            if(callback) callback(err, json);
        }, err, doc);
    })
};

Service.prototype.deleteById = function(id, callback) {
    var logger = this.context.logger;
    var WechatMediaUser = this.context.models.WechatMediaUser;
    WechatMediaUser.remove({_id: id}, function(err){
        if (err) {
            logger.error('Fail to delete wechat media user by [id=' + id + ']: ' + err);
            if(callback) callback(err);
            return;
        }
        logger.debug('Succeed to delete wechat media user [id=' + id + ']');
        if(callback) callback(null);
    });
};

Service.prototype.find = function(params, callback){
    var WechatMediaUser = this.context.models.WechatMediaUser;
    var query = WechatMediaUser.find();

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

module.exports = Service;