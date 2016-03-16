var cbUtil = require('../../../framework/callback');
var OrgType = require('../../common/models/TypeRegistry').item('OrgType');

var Service = function(context){
    this.context = context;
};

Service.prototype.loadById = function(id, callback){
    var orgKv = this.context.kvs.org;
    var Org = this.context.models.Org;

    orgKv.loadById(id, function (err, result) {
        cbUtil.logCallback(
            err,
            'Fail to load org: ' + err,
            'Succeed to load org');

        cbUtil.handleSingleValue(function(err, obj){
            if(err){
                Org.findById(id, function(err, doc){
                    var obj = doc.toObject({virtuals: true});
                    callback(err, obj);
                });
            }else{
                callback(null, obj);
            }
        }, err, result);
    });
};

Service.prototype.create = function(orgJson, callback){
    var orgKv = this.context.kvs.org;
    var Org = this.context.models.Org;
    var org = new Org(orgJson);

    org.save(function (err, result, affected) {
        cbUtil.logCallback(
            err,
            'Fail to save org: ' + err,
            'Succeed to save org');

        cbUtil.handleAffected(function(err, doc){
            var obj = doc.toObject({virtuals: true});
            orgKv.saveById(obj, function(err, obj){
                if(callback) callback(err, obj);
            });
        }, err, result, affected);
    });
};

module.exports = Service;