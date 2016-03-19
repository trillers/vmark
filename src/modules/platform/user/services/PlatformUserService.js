var co = require('co');
var cbUtil = require('../../../../framework/callback');
var WechatMediaUserType = require('../../../common/models/TypeRegistry').item('WechatMediaUserType');
var wechat = require('../../../wechat/common/api');
var helper = require('../../../wechat/common/helper');
var Kv = require('../kvs/PlatformUser');

var Service = function(context){
    this.context = context;
};

Service.prototype.loadPlatformUserByOpenid = function(openid, callback) {
    var logger = this.context.logger;
    var platformWechatSiteUserKv = this.context.kvs.platformWechatSiteUser;
    var me = this;

    co(function* (){
        var wechatSiteUser = yield platformWechatSiteUserKv.loadByOpenidAsync(openid);
        if(!wechatSiteUser){
            if(callback) callback(null, null);
        }
        var userId = wechatSiteUser.user;
        var user = null;
        if(userId){
            user = yield me.loadByIdAsync(userId);
            user.wechatSiteUser = wechatSiteUser;
        }
        else{
            logger.error('WechatSite User is not linked to PlatformUser:' + JSON.stringify(wechatSiteUser));
        }

        if(callback) callback(null, user);
    }).catch(Error, function(err){
        logger.error('Fail to load platform user by wechat site user\'s openid '+openid+' : ' + err);
        logger.error(err.stack);
        if(callback) callback(err);
    });
};

Service.prototype.deletePlatformUserByOpenid = function(openid, callback) {
    var logger = this.context.logger;
    var platformWechatSiteUserService = this.context.services.platformWechatSiteUserService;
    var me = this;
    co(function* (){
        var userid = yield platformWechatSiteUserService.deletePlatformWechatSiteUserByOpenidAsync(openid);
        if(!userid){
            logger.warn('No platfrom wechat site user [openid = ' + openid + '] found, skip deleting platform user');
            if(callback) callback(null);
            return;
        }
        yield me.deleteByIdAsync(userid);
        if(callback) callback();
    }).catch(Error, function(err){
        logger.error('Fail to delete platform user by wechat site user\'s openid ' + openid + ' : ' + err);
        logger.error(err.stack);
        if(callback) callback(err);
    });
};

Service.prototype.createPlatformUser = function(openid, callback) {
    var logger = this.context.logger;
    var platformWechatSiteUserService = this.context.services.platformWechatSiteUserService;
    var me = this;

    co(function* (){
        var wechatSiteUser = yield platformWechatSiteUserService.loadByOpenidAsync(openid);
        var userId = null;
        var user = null;
        if(wechatSiteUser){
            userId = wechatSiteUser.user;
            if(userId){
                user = yield me.loadByIdAsync(userId);
                if(user){
                    if(callback) callback(null, user); //TODO: set action result action: 'loaded'
                    return;
                }
                else{
                    //db is in not illegal state. create user and link to wechat site user again.
                    logger.error('Fail to load platform user by id ' + userId + ', begin to create a brand new one and link it');
                }
            }

            /*
             *  Create user and link to wechat site user
             */
            var userJson = {};
            helper.copyUserInfo(userJson, wechatSiteUser);
            user = yield me.createAsync(userJson);
            yield platformWechatSiteUserService.updatePlatformWechatSiteUserByIdAsync(wechatSiteUser.id, {user: user.id});
            if(callback) callback(null, user); //TODO: set action result action: 'attached'
            return;
        }

        var wechatSiteUserInfo = yield helper.getUserInfoAsync(wechat.api, openid, 'zh_CN');
        var userJson = {};
        helper.copyUserInfo(userJson, wechatSiteUserInfo);
        user = yield me.createAsync(userJson);
        var wechatSiteUserJson = {};
        wechatSiteUserJson.user = user.id;
        helper.copyUserInfo(wechatSiteUserJson, wechatSiteUserInfo);
        wechatSiteUser = yield platformWechatSiteUserService.createPlatformWechatSiteUserAsync(wechatSiteUserJson);
        if(wechatSiteUser){
            user.wechatSiteUser = wechatSiteUser;
        }
        if(callback) callback(null, user);
    }).catch(Error, function(err){
        logger.error('Fail to create platform user linked to wechat site user: ' + err);
        logger.error(err.stack);
        if(callback) callback(err);
    });
};

Service.prototype.loadById = Kv.prototype.loadById;

/**
 * Create user in mongoose and redis.
 * @param userJson
 * @param callback
 */
Service.prototype.create = function(userJson, callback){
    var logger = this.context.logger;
    var kv = this.context.kvs.platformUser;
    var PlatformUser = this.context.models.PlatformUser;
    var user = new PlatformUser(userJson);
    user.save(function (err, result, affected) {
        cbUtil.logCallback(
            err,
            'Fail to save platform user: ' + err,
            'Succeed to save platform user');

        cbUtil.handleAffected(function(err, doc){
            var obj = doc.toObject({virtuals: true});
            kv.saveById(obj, function(err, obj){
                if(err){
                    logger.error('Fail to create platform user: ' + err);
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
    var PlatformUser = this.context.models.PlatformUser;
    var kv = this.context.kvs.platformUser;
    PlatformUser.findOneAndUpdate(conditions, update, {new: true}, function(err, doc){
        cbUtil.logCallback(
            err,
            'Fail to update platform user: ' + err,
            'Succeed to update platform user');

        cbUtil.handleSingleValue(function(err, doc){
            var obj = doc.toObject({virtuals: true});
            kv.saveById(obj, function(err, obj){
                if(err){
                    logger.error('Fail to update platform user: ' + err);
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
Service.prototype.deleteById = function(id, callback) {
    var logger = this.context.logger;
    var PlatformUser = this.context.models.PlatformUser;
    var kv = this.context.kvs.platformUser;
    PlatformUser.findByIdAndRemove(id, function(err){
        if (err) {
            logger.error('Fail to delete platform user by [id=' + id + ']: ' + err);
            if(callback) callback(err);
            return;
        }
        kv.deleteById(id, function(err){
            if (err) {
                logger.error('Fail to delete platform user by [id=' + id + ']: ' + err);
                if(callback) callback(err);
                return;
            }

            logger.debug('Succeed to delete platform user [id=' + id + ']');
            if(callback) callback();
        });
    });
};

/**
 * ensure platform user created
 * @param openid
 * @param callback
 */
Service.prototype.ensurePlatformUser = function(openid, callback){
    var me = this;
    co(function*(){
        var user = yield me.loadPlatformUserByOpenidAsync(openid);
        if(!user){
            user = yield me.createPlatformUserAsync(openid);
        }
        callback(null, user);
    }).catch(function(err){
        logger.error('Fail to ensure platform user by wechat site user\'s openid '+openid+' : ' + err);
        logger.error(err.stack);
        if(callback) callback(err);
    })
}

module.exports = Service;