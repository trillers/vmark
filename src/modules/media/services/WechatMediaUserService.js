var cbUtil = require('../../../framework/callback');
var WechatMediaUserType = require('../../common/models/TypeRegistry').item('WechatMediaUserType');


var Service = function(context){
    this.context = context;
};

//TODO
Service.prototype.createWechatSiteUser = function(wechatUserJson, callback) {
    wechatUserJson.type = WechatMediaUserType.WechatSiteUser.value();
    this.create(wechatUserJson, callback);
};

Service.prototype.create = function(mediaUserJson, callback){
    var kv = this.context.kvs.wechatMediaUser;
    var WechatMediaUser = this.context.models.WechatMediaUser;
    var mediaUser = new WechatMediaUser(mediaUserJson);
    mediaUser.save(function (err, result, affected) {
        cbUtil.logCallback(
            err,
            'Fail to save wechat media user: ' + err,
            'Succeed to save wechat media user');

        cbUtil.handleAffected(function(err, doc){
            var obj = doc.toObject({virtuals: true});
            kv.saveById(obj, function(err, obj){
                if(callback) callback(err, obj);
            });
        }, err, result, affected);
    });

};

module.exports = Service;