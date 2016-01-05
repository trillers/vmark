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

Service.prototype.increase = function(tag, tenant, callback){
    var tagKv = this.context.kvs.tag;
    var Tag = this.context.models.Tag;
    Tag.findOneAndUpdate({name: tag, lFlg: 'a', tenant: tenant}, {$inc: {"uses":1}}, {lean: true}).exec(callback);
};

Service.prototype.decrease = function(tag, tenant, callback){
    var tagKv = this.context.kvs.tag;
    var Tag = this.context.models.Tag;
    Tag.findOneAndUpdate({name: tag, lFlg: 'a', tenant: tenant}, {$inc: {"uses":-1}}, {lean: true}).exec(callback);
};

Service.prototype.remove = function(tag, tenant, callback){
    var tagKv = this.context.kvs.tag;
    var Tag = this.context.models.Tag;
    Tag.findOneAndRemove({name: tag, lFlg: 'a', tenant: tenant}, {lean: true}).exec(callback);
};

Service.prototype.loadByName = function(tag, tenant, callback){
    var tagKv = this.context.kvs.tag;
    var Tag = this.context.models.Tag;
    Tag.findOne({name: tag, lFlg: 'a', tenant: tenant}, {lean: true}).exec(callback);
};


module.exports = Service;