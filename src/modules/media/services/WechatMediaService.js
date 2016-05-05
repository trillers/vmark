var cbUtil = require('../../../framework/callback');

var Service = function(context){
    this.context = context;
};

Service.prototype.loadById = function(id, callback){
    var kv = this.context.kvs.wechatMedia;
    kv.loadById(id, callback);
};

Service.prototype.findById = function(id, callback){
    var WechatMedia = this.context.models.WechatMedia;
    WechatMedia.findById(id, null, {lean: true}).exec(callback);
};

Service.prototype.create = function(mediaJson, callback){
    var kv = this.context.kvs.wechatMedia;
    var WechatMedia = this.context.models.WechatMedia;
    var media = new WechatMedia(mediaJson);
    media.save(function (err, result, affected) {
        cbUtil.logCallback(
            err,
            'Fail to save wechat media: ' + err,
            'Succeed to save wechat media');

        cbUtil.handleAffected(function(err, doc){
            var obj = doc.toObject({virtuals: true});
            kv.saveById(obj, function(err, obj){
                if(callback) callback(err, obj);
            });
        }, err, result, affected);
    });

};

Service.prototype.find = function(params, callback){
    var WechatMedia = this.context.models.WechatMedia;

    var query = WechatMedia.find();

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

Service.prototype.findBotsById = function(id, callback){
    var WechatMedia = this.context.models.WechatMedia;
    WechatMedia.findOne({lFlg: 'a', _id: id, type: 'wb'}, function (err, result) {
        cbUtil.logCallback(
            err,
            'Fail to find wechat bots by id: ' + err,
            'Succeed to find wechat bots by id');

        cbUtil.handleSingleValue(callback, err, result);
    });
};

Service.prototype.findBotByOpenid = function(openid, callback){
    var WechatMedia = this.context.models.WechatMedia;
    WechatMedia.findOne({lFlg: 'a', customId: openid, type: 'wb'}, function (err, result) {
        cbUtil.logCallback(
            err,
            'Fail to find wechat bot by openid: ' + err,
            'Succeed to find wechat bot by openid');

        cbUtil.handleSingleValue(callback, err, result);
    });
};

Service.prototype.updateById = function(id, json, callback){
    var kv = this.context.kvs.wechatMedia;
    var WechatMedia = this.context.models.WechatMedia;
    WechatMedia.findByIdAndUpdate(id, json, {new: true}, function (err, result) {
        cbUtil.logCallback(
            err,
            'Fail to update wechat media status by id: ' + id + ' err: ' + err,
            'Succeed to save wechat media status by id: ' + id);

        cbUtil.handleSingleValue(function(err, doc){
            var obj = doc.toObject({virtuals: true});
            kv.saveById(obj, function(err, obj){
                if(callback) callback(err, obj);
            });
        }, err, result);
    });
}

Service.prototype.updateStatusById = function(id, status, callback){
    var kv = this.context.kvs.wechatMedia;
    var WechatMedia = this.context.models.WechatMedia;
    WechatMedia.findByIdAndUpdate(id, {status: status}, {new: true}, function (err, result) {
        cbUtil.logCallback(
            err,
            'Fail to update wechat media status by id: ' + id + ' err: ' + err,
            'Succeed to save wechat media status by id: ' + id);

        cbUtil.handleSingleValue(function(err, doc){
            var obj = doc.toObject({virtuals: true});
            kv.saveById(obj, function(err, obj){
                if(callback) callback(err, obj);
            });
        }, err, result);
    });

};
module.exports = Service;