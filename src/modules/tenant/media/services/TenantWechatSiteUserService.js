"use strict";
var co = require('co');
var util = require('util');
var cbUtil = require('../../../../framework/callback');
var WechatMediaUserType = require('../../../common/models/TypeRegistry').item('WechatMediaUserType');
var WechatMediaUserService = require('../../../media/services/WechatMediaUserService');
var Kv = require('../kvs/TenantWechatSiteUser');
var agentToken = require('../../../auth/agentToken');

var Service = function(context){
    this.context = context;
};

util.inherits(Service, WechatMediaUserService);

Service.prototype.loadByOpenid = Kv.prototype.loadByOpenid;

Service.prototype.createTenantWechatSiteUser = function(mediaUserJson, callback){
    var logger = this.context.logger;
    var tenantWechatSiteService = this.context.services.tenantWechatSiteService;
    var kv = this.context.kvs.tenantWechatSiteUser;
    var tenantUserKv = this.context.kvs.tenantUser;
    var me = this;
        mediaUserJson.host = 'xxxxxxx';
        mediaUserJson.type = WechatMediaUserType.WechatSiteUser.value();
        var openid = mediaUserJson.openid;
        var at = agentToken.generate(openid);
        mediaUserJson.at = at;
        me.create(mediaUserJson, function(err, json){
            tenantUserKv.linkAtToOpenid(at, openid, function(err){
                if(err) {
                    if(callback) callback(err);
                    return;
                }
                kv.saveByOpenid(json, callback);
            });
        });
};

Service.prototype.deleteTenantWechatSiteUserByOpenid = function(openid, callback){
    var logger = this.context.logger;
    var kv = this.context.kvs.tenantWechatSiteUser;
    var tenantUserKv = this.context.kvs.tenantUser;
    var wechatMediaUserService = this.context.services.wechatMediaUserService;
    co(function* (){
        var json = yield kv.loadByOpenidAsync(openid);
        if(!json){ //user is not found, so skip running further
            if(callback) callback(null, null);
            return;
        }
        var wechatSiteUserId = json.id;
        var userId = json.user;
        var at = json.at;
        try{
            if(at){
                yield tenantUserKv.unlinkAtToOpenidAsync(at);
            }

            yield kv.deleteByOpenidAsync(openid);
            yield wechatMediaUserService.deleteByIdAsync(wechatSiteUserId);
        }
        catch(e){
            logger.error(e);
            if(callback) callback(e);
        }
        if(callback) callback(null, userId);
    }).catch(Error, function(err){
        logger.error('Fail to delete tenant wechat site user by openid ' + openid + ': ' + err);
        logger.error(err.stack);
        if(callback) callback(err);
    });
};

Service.prototype.updateTenantWechatSiteUserById = function(id, update, callback){
    var logger = this.context.logger;
    var kv = this.context.kvs.tenantWechatSiteUser;
    var me = this;
    co(function* (){
        var user = yield me.updateByIdAsync(id, update);
        if(!user){ //user is not found, so skip running further
            if(callback) callback(null, null);
            return;
        }

        yield kv.saveByWechatIdAndOpenidAsync(user);
        if(callback) callback(null, user);
    }).catch(Error, function(err){
        logger.error('Fail to update tenant wechat site user by id ' + id + ': ' + err);
        logger.error(err.stack);
        if(callback) callback(err);
    });
};

Service.prototype.findByTenantId = function(org, options, callback){
    var tenantWechatSiteService = this.context.services.tenantWechatSiteService;
    var me = this;
    co(function*(){
        try{
            if(!callback && typeof options === 'function'){
                callback = options;
                options = undefined;
            }
            let wechatSites = yield tenantWechatSiteService.loadAllTenantWechatSiteAsync(org);
            let results = [];
            for(let i=0,len=wechatSites.length; i<len; i++){
                let params = {
                    conditions: {host: wechatSites[i]._id}
                };
                if(options && options.populate){
                    params['populate'] = options.populate
                }
                let users = yield me.findAsync(params);
                users.forEach(user=>{user.host = wechatSites[i]});
                results = results.concat(users);
            }
            callback(null, results);
        } catch(e) {
            logger.error('Fail to find tenant wechat users by tenant id ' + util.inspect(err));
            callback(e);
        }
    })
};

module.exports = Service;