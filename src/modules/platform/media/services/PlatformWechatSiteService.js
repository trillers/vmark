var util = require('util');
var settings = require('@private/vmark-settings');
var cbUtil = require('../../../../framework/callback');
var WechatMediaType = require('../../../common/models/TypeRegistry').item('WechatMediaType');
var WechatMediaService = require('../../../media/services/WechatMediaService');

var Service = function(context){
    this.context = context;
};

util.inherits(Service, WechatMediaService);

Service.prototype.ensurePlatformWechatSite = function(callback){
    var logger = this.context.logger;
    var me = this;
    this.loadPlatformWechatSite(function(err, wechatSite){
        if(err){
            logger.error('Fail to ensure platform wechat site: ' + err);
            if(callback) callback(err);
            return;
        }

        if(wechatSite){
            if(callback) callback(null, wechatSite);
        }
        else{
            logger.warn('Have no platform wechat site to load, so create it now.');
            me.createPlatformWechatSite(callback);
        }
    });
};

Service.prototype.loadPlatformWechatSite = function(callback){
    var logger = this.context.logger;
    var platformWechatSiteKv = this.context.kvs.platformWechatSite;
    platformWechatSiteKv.getPlatformWechatSiteId(function(err, result){
        if(err){
            logger.error('Fail to load platform wechat site: ' + err);
            if(callback) callback(err);
            return;
        }

        if(result){
            logger.debug('Succeed to load platform wechat site');
            platformWechatSiteKv.loadById(result, callback);
        }
        else{
            if(callback) callback();
        }
    });
};

Service.prototype.createPlatformWechatSite = function(callback){
    var me = this;
    var logger = this.context.logger;
    var platformOrgService = this.context.services.platformOrgService;
    var platformWechatSiteKv = this.context.kvs.platformWechatSite;

    var platformWechatSite = {
        type: WechatMediaType.WechatSite.value()
        , originalId: settings.wechat.siteId
        , name: settings.wechat.siteName
        , headimgurl: 'http://mp.weixin.qq.com/mp/qrcode?scene=10000005&size=102&__biz=MzAxNDAwNTUyMg=='
        , qrcodeurl: 'http://mp.weixin.qq.com/mp/qrcode?scene=10000005&size=102&__biz=MzAxNDAwNTUyMg=='
        , appId:        settings.wechat.appKey
        , appSecret:    settings.wechat.appSecret
    };

    platformOrgService.ensurePlatform(function(err, platform){
        if(err){
            logger.error('Fail to create platform wechat site: ' + err);
            if(callback) callback(err);
            return;
        }
        else if(!platform){
            logger.error('Fail to create platform wechat site since no platform loaded');
            if(callback) callback(err);
            return;
        }
        platformWechatSite.org = platform.id;
        me.create(platformWechatSite, function(err, wechatSite){
            if(err){
                logger.error('Fail to create platform wechat site: ' + err);
                if(callback) callback(err);
                return;
            }

            platformWechatSiteKv.setPlatformWechatSiteId(wechatSite.id, function(err){
                if(err){
                    logger.error('Fail to create platform wechat site: ' + err);
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