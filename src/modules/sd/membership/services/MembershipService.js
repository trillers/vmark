"use strict";
var co = require('co');
var util = require('util');
var TenantUserService = require('../../../tenant/user/services/TenantUserService');
var cbUtil = require('../../../../framework/callback');
var typeRegistry = require('../../../common/models/TypeRegistry');
var MembershipType = typeRegistry.item('MembershipType');
var LifeFlag = typeRegistry.item('LifeFlag');
var _ = require('underscore');

var Service = function(context){
    this.context = context;
};

util.inherits(Service, TenantUserService);

Service.prototype.create = function(distributorJson, callback){
    var membershipKv = this.context.kvs.membership;
    var Membership = this.context.models.Membership;
    var membership = new Membership(distributorJson);
    membership.save(function (err, result, affected) {
        cbUtil.logCallback(
            err,
            'Fail to save membership: ' + err,
            'Succeed to save membership');

        cbUtil.handleAffected(function(err, doc){
            var obj = doc.toObject({virtuals: true});
            membershipKv.saveById(obj._id, obj, function(err, obj){
                if(callback) callback(err, obj);
            });
        }, err, result, affected);
    });
};

Service.prototype.find = function (params, callback) {
    var Membership = this.context.models.Membership;
    var query = Membership.find();

    if (params.options) {
        query.setOptions(params.options);
    }

    if (params.sort) {
        query.sort(params.sort);
    }

    if (params.page) {
        var skip = (params.page.no - 1) * params.page.size;
        var limit = params.page.size;
        if (skip) query.skip(skip);
        if (limit) query.limit(limit);
    }

    if (params.conditions) {
        query.find(params.conditions);
    }

    query.lean(true);
    query.exec(function (err, docs) {
        if (err) {
            callback(err);
            return;
        }

        if (callback) callback(null, docs);
    });
};

Service.prototype.loadDistributorsChainById = function(id, level, callback){
    var membershipKv = this.context.kvs.membership;
    var Membership = this.context.models.Membership;

    if(typeof callback === 'undefined'){
        if(typeof level === 'function'){
            callback = level;
        }else{
            callback = function noop(){};
        }
        level = 3;
    }
    Membership
        .findOne({
            lFlg: LifeFlag.Active.value(),
            type: MembershipType.Distributor.value(),
            _id: id
        })
        .populate({
            path: 'upLine user',
            select: 'nickname openid wechatId'
        })
        .exec(function(err, doc){
            if(err){
                return callback(err);
            }
            if(!doc){
                return callback(new Error('loadDistributorsChainById expect a distributor'));
            }
            recurPopulate(doc, level, function(err, result){
                if(err){
                    return callback(err);
                }
                callback(null, result.toObject());
            });
        });

    function recurPopulate(doc, len, callback){
        if(typeof doc.upLine != 'object' || !doc.upLine.upLine || len <= 0){
            return callback(null, doc);
        }
        Membership.populate({path: 'upLine'}, function(err, doc){
            if(err){
                return callback(err);
            }
            len--;
            recurPopulate(doc, callback);
        });
    }
};

Service.prototype.loadById = function(id, callback){
    var membershipKv = this.context.kvs.membership;
    var Membership = this.context.models.Membership;

    membershipKv.loadById(id, function(e, o){
        if(e){
            return callback(e);
        }
        if(o){
            return callback(null, o);
        }
        Membership.findById(id, null, {lean: true}).exec(callback);
    });
};

Service.prototype.updateById = function(id, json, callback){
    var membershipKv = this.context.kvs.membership;
    var Membership = this.context.models.Membership;
    !json['_id'] && (json['_id'] = id);
    membershipKv.saveById(json, function(err, result){
        if(err){
            return callback(err);
        }
        Membership.findByIdAndUpdate(id, json, {lean: true, new: true}).exec(callback);
    })
};

Service.prototype.addDownLine = function(id, downLineId, callback){
    var membershipKv = this.context.kvs.membership;
    var Membership = this.context.models.Membership;
    callback = callback || function noop(){};

    Membership.findByIdAndUpdate(id, {$addToSet: {downLine: downLineId}}, {lean: true, new: true}).exec(function(err, doc){
        membershipKv.saveById(doc._id, doc, function(err, result){
            if(err){
                return callback(err);
            }
            callback(null, result);
        })
    });
};

Service.prototype.removeById = function(id, callback){
    var Membership = this.context.models.Membership;
    var membershipKv = this.context.kvs.membership;
    Membership.findByIdAndUpdate(id, {lFlg: 'd'}, {lean: true})
        .exec(function(err){
            if(err){
                console.error(err);
            }else{
                membershipKv.delById(id, function(err, obj){
                    if(callback) callback(err, obj);
                });
            }
        });
};

module.exports = Service;