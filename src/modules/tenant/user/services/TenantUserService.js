var co = require('co');
var cbUtil = require('../../../../framework/callback');
var WechatMediaUserType = require('../../../common/models/TypeRegistry').item('WechatMediaUserType');
var wechat = require('../../../wechat/common/api');
var Kv = require('../kvs/TenantUser');

var Service = function(context){
    this.context = context;
};

/**
 * load tenant user by openid
 * @param wechatId
 * @param openid
 * @param callback
 */
Service.prototype.loadUserByWechatIdAndOpenid = function(wechatId, openid, callback) {
    var logger = this.context.logger;
    var tenantWechatSiteUserKv = this.context.kvs.tenantWechatSiteUser;
    var me = this;

    co(function* (){
        var wechatSiteUser = yield tenantWechatSiteUserKv.loadByWechatIdAndOpenidAsync(wechatId, openid);
        if(!wechatSiteUser){
            if(callback) callback(null, null);
        }
        var userId = wechatSiteUser.user;
        var user = null;
        if(userId){
            user = yield me.loadByWechatIdAndIdAsync(wechatId, userId);
            user.wechatSiteUser = wechatSiteUser;
        }
        else{
            logger.error('WechatSite User is not linked to TenantUser:' + JSON.stringify(wechatSiteUser));
        }

        if(callback) callback(null, user);
    }).catch(Error, function(err){
        logger.error('Fail to load tenant user by wechat site user\'s openid '+openid+' : ' + err);
        logger.error(err.stack);
        if(callback) callback(err);
    });
};

/**
 * delete tenant user by openid
 * @param wechatId
 * @param openid
 * @param callback
 */
Service.prototype.deleteUserByWechatIdAndOpenid = function(wechatId, openid, callback) {
    var logger = this.context.logger;
    var tenantWechatSiteUserService = this.context.services.tenantWechatSiteUserService;
    var me = this;
    co(function* (){
        var userid = yield tenantWechatSiteUserService.deleteTenantWechatSiteUserByWechatIdAndOpenidAsync(wechatId, openid);
        if(!userid){
            logger.warn('No tenant wechat site user [openid = ' + openid + '] found, skip deleting tenant user');
            if(callback) callback(null);
            return;
        }
        yield me.deleteByIdAsync(wechatId, userid);
        if(callback) callback();
    }).catch(Error, function(err){
        logger.error('Fail to delete tenant user by wechat site user\'s openid ' + openid + ' : ' + err);
        logger.error(err.stack);
        if(callback) callback(err);
    });
};

/**
 * load tenant user by id
 * @param wechatId
 * @param id
 * @param callback
 */
Service.prototype.loadByWechatIdAndId = Kv.prototype.loadById;


/**
 * Create user in mongoose and redis.
 * @param userJson
 * @param callback
 */
Service.prototype.create = function(userJson, callback){
    var logger = this.context.logger;
    var kv = this.context.kvs.tenantUser;
    var TenantUser = this.context.models.TenantUser;
    var user = new TenantUser(userJson);
    user.save(function (err, result, affected) {
        cbUtil.logCallback(
            err,
            'Fail to save tenant user: ' + err,
            'Succeed to save tenant user');

        cbUtil.handleAffected(function(err, doc){
            var obj = doc.toObject({virtuals: true});
            kv.saveById(obj.wechatId, obj.id, obj, function(err, obj){
                if(err){
                    logger.error('Fail to create tenant user: ' + err);
                    logger.error(err.stack);
                    if(callback) callback(err);
                    return;
                }
                if(callback) callback(err, obj);
                //kv.linkOpenid(obj.openid, obj.id, function(err){
                //    if(callback) callback(err, obj);
                //});
            });
        }, err, result, affected);
    });
};

/**
 *
 * @param conditions
 * @param update
 * @param callback
 */
Service.prototype.update = function(conditions, update, callback){
    var logger = this.context.logger;
    var TenantUser = this.context.models.TenantUser;
    var kv = this.context.kvs.tenantUser;
    TenantUser.findOneAndUpdate(conditions, update, {new: true}, function(err, doc){
        cbUtil.logCallback(
            err,
            'Fail to update tenant user: ' + err,
            'Succeed to update tenant user');

        cbUtil.handleSingleValue(function(err, doc){
            var obj = doc.toObject({virtuals: true});
            kv.saveById(obj.wechatId, obj.id, obj, function(err, obj){
                if(err){
                    logger.error('Fail to update tenant user: ' + err);
                    logger.error(err.stack);
                    if(callback) callback(err);
                    return;
                }
                if(obj.posts && typeof obj.posts == 'string'){
                    var posts = obj.posts;
                    try{
                        obj.posts = JSON.parse(obj.posts);
                    }
                    catch(e){
                        logger.error('Fail to parse posts: ' + posts);
                        result.posts = [];
                    }
                }
                if(callback) callback(err, obj);
            });
        }, err, doc);
    })
};

/**
 * Delete user in mongoose and redis by id
 * @param id
 * @param callback
 */
Service.prototype.deleteById = function(wechatId, id, callback) {
    var logger = this.context.logger;
    var TenantUser = this.context.models.TenantUser;
    var kv = this.context.kvs.tenantUser;
    TenantUser.findByIdAndRemove(id, function(err){
        if (err) {
            logger.error('Fail to delete tenant user by [id=' + id + ']: ' + err);
            if(callback) callback(err);
            return;
        }
        kv.deleteById(wechatId, id, function(err){
            if (err) {
                logger.error('Fail to delete tenant user by [id=' + id + ']: ' + err);
                if(callback) callback(err);
                return;
            }

            logger.debug('Succeed to delete tenant user [id=' + id + ']');
            if(callback) callback();
        });
    });
};

module.exports = Service;