var cbUtil = require('../../../framework/callback');

var Service = function(context){
    this.context = context;
};

Service.prototype.loadById = function(id, callback){
    var kv = this.context.kvs.WechatMedia;
    kv.loadById(id, function(err, result){
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
    })
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

Service.prototype.updateById = function(id, json){
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