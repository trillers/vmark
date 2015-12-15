var cbUtil = require('../../../framework/callback');

var Service = function(context){
    this.context = context;
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

module.exports = Service;