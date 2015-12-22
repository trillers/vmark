var cbUtil = require('../../../framework/callback');
var typeRegistry = require('../../common/models/TypeRegistry');
var WechatMediaType = typeRegistry.item('WechatMediaType');

var Service = function(context){
    this.context = context;
};

Service.prototype.create = function(mediaJson, callback){
    var OrgMedia = this.context.models.OrgMedia;
    var doc = new OrgMedia(mediaJson);
    doc.save(function (err, result, affected) {
        //TODO: need logging
        cbUtil.handleAffected(callback, err, result, affected);
    });
};

Service.prototype.updateById = function(id, update, callback){
    var OrgMedia = this.context.models.OrgMedia;
    OrgMedia.findByIdAndUpdate(id, update, {new: true}, function (err, result) {
        //TODO: need logging
        cbUtil.handleSingleValue(callback, err, result);
    });
};

Service.prototype.loadAllBot = function(callback){
    var OrgMedia = this.context.models.OrgMedia;
    OrgMedia.find({lFlg: 'a', type: 'wb'}).populate({path: 'media'}).exec(function (err, result) {
        //TODO: need logging
        cbUtil.handleSingleValue(callback, err, result);
    });
};

Service.prototype.loadByMediaId = function(mediaId, callback){
    var OrgMedia = this.context.models.OrgMedia;
    OrgMedia.findOne({lFlg: 'a', type: WechatMediaType.WechatBot.value(), media: mediaId}).populate({path: 'operator'}).exec(function (err, result) {
        //TODO: need logging
        cbUtil.handleSingleValue(callback, err, result);
    });
};

Service.prototype.listMediasByOperatorId = function(tenantId, operatorId, callback){
    var OrgMedia = this.context.models.OrgMedia;
    var conditions = {org: tenantId, type: WechatMediaType.WechatBot.value(), lFlg: 'a', operator: operatorId};
    OrgMedia.find(conditions, 'media', {lean: true}).exec(function (err, result) {
        cbUtil.logCallback(
            err,
            'Fail to list medias by operator id ' + operatorId + ': ' + err,
            'Succeed to list medias by operator id ' + operatorId);

        cbUtil.handleSingleValue(function(err, docs){
            if(err){
                if(callback) callback(err);
            }
            else{
                var len = docs.length;
                var mediaIds = [];
                for(var i=0; i<len; i++){
                    mediaIds.push(docs[i].media);
                }
                if(callback) callback(err, mediaIds);
            }
        }, err, result);
    });
};

module.exports = Service;