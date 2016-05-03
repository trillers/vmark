var util = require('util');
var settings = require('@private/vmark-settings');
var WechatMediaType = require('../../../common/models/TypeRegistry').item('WechatMediaType');
var WechatMediaService = require('../../../media/services/WechatMediaService');
var cbUtil = require('../../../../framework/callback');
var myUtil = require('../../../../app/util');

var Service = function (context) {
    this.context = context;
};

util.inherits(Service, WechatMediaService);

Service.prototype.createTenantWechatSite = function (json, callback) {
    var WechatMedia = this.context.models.WechatMedia;
    var tenantWechatSiteKv = this.context.kvs.tenantWechatSite;

    var tenantWechatSite = {
          org: json.org
        , type: WechatMediaType.WechatSite.value()
        , originalId: json.originalId
        , name: json.name
        , qrcodeurl:  json.qrcodeurl
        , appId: json.appId
        , appSecret: json.appSecret
        , wechatSiteType: json.wechatSiteType
        , encodingAESKey: myUtil.generateRandomString(43)
        , token: myUtil.generateRandomString(20)
        , email: json.email
    };
    var media = new WechatMedia(tenantWechatSite);
    media.save(function (err, result, affected) {
        cbUtil.logCallback(
            err,
            'Fail to save tenant wechat media: ' + err,
            'Succeed to save tenant wechat media');

        cbUtil.handleAffected(function(err, doc){
            var obj = doc.toObject({virtuals: true});
            tenantWechatSiteKv.setTenantWechatSite(obj, function(err, obj){
                if(callback) callback(err, obj);
            });
        }, err, result, affected);
    });

};

Service.prototype.updateTenantWechatSiteById = function(id, json, callback){
    var tenantWechatSiteKv = this.context.kvs.tenantWechatSite;
    var WechatMedia = this.context.models.WechatMedia;
    WechatMedia.findByIdAndUpdate(id, json, {new: true}, function (err, result) {
        cbUtil.logCallback(
            err,
            'Fail to update tenat wechat media by id: ' + id + ' err: ' + err,
            'Succeed to save teant wechat media by id: ' + id);

        cbUtil.handleSingleValue(function(err, doc){
            var obj = doc.toObject({virtuals: true});
            tenantWechatSiteKv.setTenantWechatSite(obj, function(err, obj){
                if(callback) callback(err, obj);
            });
        }, err, result);
    });
}

Service.prototype.loadAllTenantWechatSite = function (org, callback) {
    var WechatMedia = this.context.models.WechatMedia;
    WechatMedia.find({org: org}, null, {lean: true}).exec(callback);
};

Service.prototype.loadTenantWechatSiteByOriginalId = function(originalId, callback){
    var tenantWechatSiteKv = this.context.kvs.tenantWechatSite;
    tenantWechatSiteKv.getTenantWechatSiteByOriginalId(originalId, function(err, wechatSite){
        if (err) {
            logger.error('Fail to load tenant wechat site by originalId: ' + originalId + ' err:' + err);
            if (callback) callback(err);
        }
        else {
            if (callback) callback(null, wechatSite);
        }
    })
}

module.exports = Service;