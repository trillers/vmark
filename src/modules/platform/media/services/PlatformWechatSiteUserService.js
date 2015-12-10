var util = require('util');
var cbUtil = require('../../../../framework/callback');
var WechatMediaUserType = require('../../../common/models/TypeRegistry').item('WechatMediaUserType');
var WechatMediaUserService = require('../../../media/services/WechatMediaUserService');

var Service = function(context){
    this.context = context;
};

util.inherits(Service, WechatMediaUserService);

Service.prototype.createPlatformWechatSiteUser = function(mediaUserJson, callback){
    var logger = this.context.logger;
    var platformWechatSiteService = this.context.services.platformWechatSiteService;
    var me = this;
    platformWechatSiteService.ensurePlatformWechatSite(function(err, wechatSite){
        if(err){
            logger.error('Fail to ensure platform wechat site: ' + err);
            if(callback) callback(err);
            return;
        }
        mediaUserJson.host = wechatSite.id;
        mediaUserJson.type = WechatMediaUserType.WechatSiteUser.value();
        me.create(mediaUserJson, callback);
    });
};


module.exports = Service;