var cbUtil = require('../../../framework/callback');
var typeRegistry = require('../../common/models/TypeRegistry')
var UserStatus = typeRegistry.item('UserStatus');
var agentToken = require('../common/agentToken');
var openToken = require('../common/openToken');
var Service = function(context){
    this.context = context;
};

Service.prototype.create = function(json, callback){
    var kv = this.context.kvs.wechatSiteUser;
    var WechatSiteUser = this.context.models.WechatSiteUser;
    json.at = agentToken.generate(json.openid);
    json.ot = openToken.generate(json.openid);

    var wechatSiteUser = new WechatSiteUser(json);
    wechatSiteUser.save(function (err, result, affected) {
        cbUtil.logCallback(
            err,
            'Fail to save wechat site user: ' + err,
            'Succeed to save wechat site user');

        cbUtil.handleAffected(function(err, doc){
            var obj = doc.toObject({virtuals: true});
            kv.saveByOpenid(obj, callback);
        }, err, result, affected);
    });
};

Service.prototype.loadByOpenid = function(openid, callback){
    var kv = this.context.kvs.wechatSiteUser;
    kv.loadByOpenid(openid, callback);
};

Service.prototype.updateByOpenid = function(openid, json, callback){
    var kv = this.context.kvs.wechatSiteUser;
    var WechatSiteUser = this.context.models.WechatSiteUser;
    WechatSiteUser.findOneAndUpdate({openid: openid}, json, {new: true}, function (err, doc) {
        if(err){
            return callback(err);
        }
        var obj = doc && doc.toObject({virtuals: true});
        if(obj){
            kv.saveByOpenid(obj, callback);
        }
        else{
            callback(null, null);
        }
    });
};


module.exports = Service;