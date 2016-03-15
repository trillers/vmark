var util = require('util');
var settings = require('@private/vmark-settings');
var cbUtil = require('../../../../framework/callback');
var WechatMediaType = require('../../../common/models/TypeRegistry').item('WechatMediaType');
var WechatMediaService = require('../../../media/services/WechatMediaService');

var Service = function(context){
    this.context = context;
};

util.inherits(Service, WechatMediaService);

Service.prototype.ensureTenantWechatSite = function(callback){
    var logger = this.context.logger;
    var me = this;
    this.loadTenantWechatSite(function(err, wechatSite){
        if(err){
            logger.error('Fail to ensure tenant wechat site: ' + err);
            if(callback) callback(err);
            return;
        }

        if(wechatSite){
            if(callback) callback(null, wechatSite);
        }
        else{
            logger.warn('Have no tenant wechat site to load, so create it now.');
            me.createTenantWechatSite(callback);
        }
    });
};

Service.prototype.loadTenantWechatSite = function(callback){
    var logger = this.context.logger;
    var tenantWechatSiteKv = this.context.kvs.tenantWechatSite;
    tenantWechatSiteKv.getTenantWechatSiteId(function(err, result){
        if(err){
            logger.error('Fail to load tenant wechat site: ' + err);
            if(callback) callback(err);
            return;
        }

        if(result){
            logger.debug('Succeed to load tenant wechat site');
            tenantWechatSiteKv.loadById(result, callback);
        }
        else{
            if(callback) callback();
        }
    });
};

Service.prototype.createTenantWechatSite = function(callback){
    var me = this;
    var logger = this.context.logger;
    var tenantOrgService = this.context.services.tenantOrgService;
    var tenantWechatSiteKv = this.context.kvs.tenantWechatSite;

    var tenantWechatSite = {
        type: WechatMediaType.WechatSite.value()
        , originalId: settings.wechat.siteId
        , name: settings.wechat.siteName
        , headimgurl: 'http://mp.weixin.qq.com/mp/qrcode?scene=10000005&size=102&__biz=MzAxNDAwNTUyMg=='
        , qrcodeurl: 'http://mp.weixin.qq.com/mp/qrcode?scene=10000005&size=102&__biz=MzAxNDAwNTUyMg=='
        , appId:        settings.wechat.appKey
        , appSecret:    settings.wechat.appSecret
    };

    tenantOrgService.ensureTenant(function(err, tenant){
        if(err){
            logger.error('Fail to create tenant wechat site: ' + err);
            if(callback) callback(err);
            return;
        }
        else if(!tenant){
            logger.error('Fail to create tenant wechat site since no tenant loaded');
            if(callback) callback(err);
            return;
        }
        tenantWechatSite.org = tenant.id;
        me.create(tenantWechatSite, function(err, wechatSite){
            if(err){
                logger.error('Fail to create tenant wechat site: ' + err);
                if(callback) callback(err);
                return;
            }

            tenantWechatSiteKv.setTenantWechatSiteId(wechatSite.id, function(err){
                if(err){
                    logger.error('Fail to create tenant wechat site: ' + err);
                    if(callback) callback(err);
                }
                else{
                    if(callback) callback(null, wechatSite);
                }
            });
        });
    });

};

module.exports = Service;