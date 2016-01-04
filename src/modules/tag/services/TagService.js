var cbUtil = require('../../../framework/callback');

var Service = function(context){
    this.context = context;
};

Service.prototype.create = function(tagJson, callback){
    var tagKv = this.context.kvs.tag;
    var Tag = this.context.models.Tag;
    var tag = new Tag(tagJson);

    tag.save(function (err, result, affected) {
        cbUtil.logCallback(
            err,
            'Fail to save tag: ' + err,
            'Succeed to save tag');

        cbUtil.handleAffected(function(err, doc){
            var obj = doc.toObject({virtuals: true});
            tagKv.saveById(obj, function(err, obj){
                if(callback) callback(err, obj);
            });
        }, err, result, affected);
    });
};

module.exports = Service;