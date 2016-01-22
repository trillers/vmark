var cbUtil = require('../../../framework/callback');
var typeRegistry = require('../../common/models/TypeRegistry')
var UserStatus = typeRegistry.item('UserStatus');

var Service = function(context){
    this.context = context;
};

Service.prototype.create = function(json, callback){
    var kv = this.context.kvs.user;
    var User = this.context.models.User;
    var user = new User(json);
    user.save(function (err, result, affected) {
        cbUtil.logCallback(
            err,
            'Fail to save user: ' + err,
            'Succeed to save user');

        cbUtil.handleAffected(function(err, doc){
            var obj = doc.toObject({virtuals: true});
            kv.saveById(obj, callback);
        }, err, result, affected);
    });
};

Service.prototype.loadById = function(id, callback){
    var kv = this.context.kvs.user;
    kv.loadById(id, callback);
};

Service.prototype.updateById = function(id, json, callback){
    var kv = this.context.kvs.user;
    var User = this.context.models.User;
    User.findOneAndUpdate({_id: id}, json, {new: true}, function (err, doc) {
        if(err){
            return callback(err);
        }
        var obj = doc && doc.toObject({virtuals: true});
        if(obj){
            kv.saveById(obj, callback);
        }
        else{
            callback(null, null);
        }
    });
};


module.exports = Service;