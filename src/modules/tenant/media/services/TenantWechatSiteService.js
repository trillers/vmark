var util = require('util');
var settings = require('@private/vmark-settings');
var cbUtil = require('../../../../framework/callback');
var WechatMediaType = require('../../../common/models/TypeRegistry').item('WechatMediaType');
var WechatMediaService = require('../../../media/services/WechatMediaService');

var Service = function (context) {
    this.context = context;
};

util.inherits(Service, WechatMediaService);

Service.prototype.createTenantWechatSite = function (json, callback) {
    var me = this;
    var logger = this.context.logger;
    var tenantWechatSiteKv = this.context.kvs.tenantWechatSite;

    var tenantWechatSite = {
          org: json.org
        , type: WechatMediaType.WechatSite.value()
        , originalId: json.originalId
        , name: json.name
        , qrcodeurl:  json.qrcodeurl
        , appId: json.appKey
        , appSecret: json.appSecret
    };
    me.create(tenantWechatSite, function (err, wechatSite) {
        if (err) {
            logger.error('Fail to create tenant wechat site: ' + err);
            if (callback) callback(err);
            return;
        }

        tenantWechatSiteKv.setTenantWechatSite(wechatSite, function (err) {
            if (err) {
                logger.error('Fail to create tenant wechat site: ' + err);
                if (callback) callback(err);
            }
            else {
                if (callback) callback(null, wechatSite);
            }
        });
    });

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