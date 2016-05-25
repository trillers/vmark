var cbUtil = require('../../../framework/callback');

var Service = function(context){
    this.context = context;
};

Service.prototype.loadByWechatId = function(wechatId, callback){
    var WechatMediaSetting = this.context.models.WechatMediaSetting;
    WechatMediaSetting.findOne({originalId: wechatId}, {}, {lean: true}).exec(callback);
};

Service.prototype.create = function(mediaSettingJson, callback){
    var WechatMediaSetting = this.context.models.WechatMediaSetting;
    var wechatMediaSetting = new WechatMediaSetting(mediaSettingJson);
    wechatMediaSetting.save(function (err, result, affected) {
        cbUtil.logCallback(
            err,
            'Fail to save wechat media settings: ' + err,
            'Succeed to save wechat media settings');
        if(callback) callback(err, result);
    });

};

Service.prototype.updateByWechatId = function(wechatId, json, callback){
    var WechatMediaSetting = this.context.models.WechatMediaSetting;
    WechatMediaSetting.findOneAndUpdate({originalId: wechatId}, json, {new: true, upsert: true}, function (err, result) {
        cbUtil.logCallback(
            err,
            'Fail to update wechat media settings by originalId: ' + wechatId + ' err: ' + err,
            'Succeed to update wechat media settings by originalId: ' + wechatId);
        if(callback) callback(err, result);
    });
}

module.exports = Service;