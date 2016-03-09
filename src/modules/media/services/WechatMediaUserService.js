var cbUtil = require('../../../framework/callback');
var WechatMediaUserType = require('../../common/models/TypeRegistry').item('WechatMediaUserType');
var agentToken = require('../../auth/agentToken');
var openToken = require('../../auth/openToken');

var Service = function(context){
    this.context = context;
};

Service.prototype.loadByRemark = function(remark, callback){
    var WechatMedia = this.context.models.WechatMediaUser;
    WechatMedia.findOne({lFlg: 'a', remark: remark, type: 'wbc'}, function (err, result) {
        cbUtil.logCallback(
            err,
            'Fail to find wechat bot by remark: ' + err,
            'Succeed to find wechat bot by remark');

        cbUtil.handleSingleValue(callback, err, result);
    });
};

Service.prototype.saveTagsById = function(id, tags, callback){
    var WechatMedia = this.context.models.WechatMediaUser;
    WechatMedia.findByIdAndUpdate(id, {tags: tags}, function (err, result) {
        cbUtil.logCallback(
            err,
            'Fail to save tags by id: ' + err,
            'Succeed to save tags by id');

        cbUtil.handleSingleValue(callback, err, result);
    });
};

Service.prototype.loadByTags = function(tags, callback){
    var WechatMedia = this.context.models.WechatMediaUser;
    WechatMedia.find({lFlg: 'a', tags: {$all: tags}}, function (err, result) {
        cbUtil.logCallback(
            err,
            'Fail to load by tags: ' + err,
            'Succeed to load by tags');

        cbUtil.handleSingleValue(callback, err, result);
    });
};

Service.prototype.updateByRemark = function(remark, update, callback){
    var WechatMedia = this.context.models.WechatMediaUser;
    WechatMedia.update({remark: remark, lFlg: 'a', type: 'wbc'}, update, function (err, result) {
        cbUtil.logCallback(
            err,
            'Fail to find wechat bot by remark: ' + err,
            'Succeed to find wechat bot by remark');

        cbUtil.handleSingleValue(callback, err, result);
    });
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
    var kv = this.context.kvs.wechatMediaUser;
    mediaUserJson.at = agentToken.generate(mediaUserJson.openid);
    mediaUserJson.ot = openToken.generate(mediaUserJson.openid);

    var mediaUser = new WechatMediaUser(mediaUserJson);
    mediaUser.save(function (err, result, affected) {
        cbUtil.logCallback(
            err,
            'Fail to save wechat media user: ' + err,
            'Succeed to save wechat media user');

        cbUtil.handleAffected(function(err, doc){
            var json = !err && doc && doc.toObject({virtuals: true});
            kv.saveByOpenid(json, callback);
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
    try{
        WechatMediaUser.findByIdAndRemove(id, function(err){
            if (err) {
                logger.error('Fail to delete wechat media user by [id=' + id + ']: ' + err);
                if(callback) callback(err);
                return;
            }
            logger.debug('Succeed to delete wechat media user [id=' + id + ']');
            if(callback) callback();
        });
    }
    catch(e){
        logger.error(e);
        if(callback) callback(err);
    }
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

Service.prototype.loadByOpenid = function(openid, callback){
    var kv = this.context.kvs.wechatMediaUser;
    kv.loadByOpenid(openid, callback);
};

Service.prototype.updateByOpenid = function(openid, json, callback){
    var kv = this.context.kvs.wechatMediaUser;
    var WechatMediaUser = this.context.models.WechatMediaUser;
    WechatMediaUser.findOneAndUpdate({openid: openid}, json, {new: true}, function (err, doc) {
        if(err){
            return callback(err);
        }
        var obj = doc && doc.toObject({virtuals: true});
        if(obj){
            kv.saveByOpenid(obj, callback);
        }
        else{
            callback(null, null);
        }
    });
};

module.exports = Service;