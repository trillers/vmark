var co = require('co');
var util = require('util');
var cbUtil = require('../../../../framework/callback');
var WechatMediaUserType = require('../../../common/models/TypeRegistry').item('WechatMediaUserType');
var WechatMediaUserService = require('../../../media/services/WechatMediaUserService');
var Kv = require('../kvs/PlatformWechatSiteUser');

var Service = function(context){
    this.context = context;
};

util.inherits(Service, WechatMediaUserService);

Service.prototype.loadByOpenid = Kv.prototype.loadByOpenid;

Service.prototype.createPlatformWechatSiteUser = function(mediaUserJson, callback){
    var logger = this.context.logger;
    var platformWechatSiteService = this.context.services.platformWechatSiteService;
    var kv = this.context.kvs.platformWechatSiteUser;
    var me = this;
    platformWechatSiteService.ensurePlatformWechatSite(function(err, wechatSite){
        if(err){
            logger.error('Fail to create platform wechat site user: ' + err);
            if(callback) callback(err);
            return;
        }
        mediaUserJson.host = wechatSite.id;
        mediaUserJson.type = WechatMediaUserType.WechatSiteUser.value();
        me.create(mediaUserJson, function(err, json){
            kv.saveByOpenid(json, function(err, obj){
                if(callback) callback(err, obj);
            });
        });
    });
};

Service.prototype.deletePlatformWechatSiteUserByOpenid = function(openid, callback){
    var logger = this.context.logger;
    var me = this;
    co(function* (){
        var json = yield me.kv.loadByOpenidAsync(openid);
        if(!json){ //user is not found, so skip running further
            if(callback) callback(null, null);
            return;
        }
        var wechatSiteUserId = json.id;
        var userId = json.user;
        yield me.kv.deleteByOpenidAsync(openid);
        yield me.deleteByIdAsync(wechatSiteUserId);
        if(callback) callback(null, userId);
    }).catch(Error, function(err){
        logger.error('Fail to delete platform wechat site user by openid ' + openid + ': ' + err);
        logger.error(err.stack);
        if(callback) callback(err);
    });
};

Service.prototype.updatePlatformWechatSiteUserById = function(id, update, callback){
    var logger = this.context.logger;
    var me = this;

    co(function* (){
        var user = yield me.updateByIdAsync(id, update);
        if(!user){ //user is not found, so skip running further
            if(callback) callback(null, null);
            return;
        }

        yield me.kv.saveByOpenidAsync(user);
        if(callback) callback(null, user);
    }).catch(Error, function(err){
        logger.error('Fail to update platform wechat site user by id ' + id + ': ' + err);
        logger.error(err.stack);
        if(callback) callback(err);
    });
};

module.exports = Service;