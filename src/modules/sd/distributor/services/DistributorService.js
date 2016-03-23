"use strict";
var co = require('co');
var util = require('util');
var TenantUserService = require('../../../tenant/user/services/TenantUserService');
var cbUtil = require('../../../../framework/callback');
var typeRegistry = require('../../../common/models/TypeRegistry');

var Service = function(context){
    this.context = context;
};

util.inherits(Service, TenantUserService);

Service.prototype.findAllByTenantId = function(tenantId, options, callback){
    var me = this;
    if(!callback){
        options = null;
        callback = options;
    }
    var tenantWechatSiteUserService = this.context.services.tenantWechatSiteUserService;
    co(function*(){
        try{
            let tenantUsers = yield tenantWechatSiteUserService.findByTenantIdAsync(tenantId, options);
            callback(null, tenantUsers);
        } catch (e) {
            me.context.logger.error(e);
            callback(e)
        }
    });
};

//Service.prototype.create = function(distributorJson, callback){
//    var distributorKv = this.context.kvs.distributor;
//    var Distributor = this.context.models.Distributor;
//    var distributor = new Distributor(distributorJson);
//    distributor.save(function (err, result, affected) {
//        cbUtil.logCallback(
//            err,
//            'Fail to save distributor: ' + err,
//            'Succeed to save distributor');
//
//        cbUtil.handleAffected(function(err, doc){
//            var obj = doc.toObject({virtuals: true});
//            distributorKv.saveById(obj, function(err, obj){
//                if(callback) callback(err, obj);
//            });
//        }, err, result, affected);
//    });
//};
//
//Service.prototype.find = function (params, callback) {
//    var Distributor = this.context.models.Distributor;
//    var query = Distributor.find();
//
//    if (params.options) {
//        query.setOptions(params.options);
//    }
//
//    if (params.sort) {
//        query.sort(params.sort);
//    }
//
//    if (params.page) {
//        var skip = (params.page.no - 1) * params.page.size;
//        var limit = params.page.size;
//        if (skip) query.skip(skip);
//        if (limit) query.limit(limit);
//    }
//
//    if (params.conditions) {
//        query.find(params.conditions);
//    }
//
//    query.lean(true);
//    query.exec(function (err, docs) {
//        if (err) {
//            callback(err);
//            return;
//        }
//
//        if (callback) callback(null, docs);
//    });
//};
//
//
//Service.prototype.loadById = function(id, callback){
//    var distributorKv = this.context.kvs.distributor;
//    var Distributor = this.context.models.Distributor;
//    distributorKv.loadById(id, function(e, o){
//        if(e){
//            return callback(e);
//        }
//        if(o){
//            return callback(null, o);
//        }
//        Distributor.findById(id, null, {lean: true}).exec(callback);
//    });
//};
//
//Service.prototype.updateById = function(id, json, callback){
//    var Distributor = this.context.models.Distributor;
//    var distributorKv = this.context.kvs.distributor;
//    !json['_id'] && (json['_id'] = id);
//    distributorKv.saveById(json, function(err, result){
//        if(err){
//            return callback(err);
//        }
//        Distributor.findByIdAndUpdate(id, json, {lean: true, new: true}).exec(callback);
//    })
//};
//
//Service.prototype.removeGroupById = function(id, callback){
//    var Distributor = this.context.models.Distributor;
//    var distributorKv = this.context.kvs.distributor;
//    Distributor.findByIdAndUpdate(id, {lFlg: 'd'}, {lean: true})
//        .exec(function(err){
//            if(err){
//                console.error(err);
//            }else{
//                distributorKv.delById(id, function(err, obj){
//                    if(callback) callback(err, obj);
//                });
//            }
//        });
//};

function mixin(t, s){
    for(var p in s){
        t[p] = s[p];
    }
}

module.exports = Service;