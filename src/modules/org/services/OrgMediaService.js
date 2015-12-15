var cbUtil = require('../../../framework/callback');

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

module.exports = Service;