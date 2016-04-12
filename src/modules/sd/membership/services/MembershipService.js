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

Service.prototype.findCountByTenantId = function (tenantId, callback) {
    var Membership = this.context.models.Membership;
    Membership.count({}, callback);
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

    if(params.populates){
        params.populates.forEach(function(populate){
            query.populate(populate);
        })

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

Service.prototype.loadByUserIdAndWechatId = function(userId, wechatId, callback){
    var membershipKv = this.context.kvs.membership;
    var Membership = this.context.models.Membership;
    Membership.find({user: userId})
    .populate({
        path: 'media',
        match: {
            originalId: wechatId
        }
    })
    .exec(function(err, docs){
        if(err){
            return callback(err)
        }
        if(!docs.length){
            return callback(null, null)
        }
        callback(null, docs[0]);
    })
};

Service.prototype.loadDistributorsChainById = function(id, level, callback){
    var membershipKv = this.context.kvs.membership;
    var Membership = this.context.models.Membership;
    var fields = {
        nickname: 'nickname',
        openid: 'openid',
        wechatId: 'wechatId'
    };
    var selectUserStr = Object.keys(fields).join(' ');

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
            path: 'user',
            select: selectUserStr
        })
        .exec(function(err, doc){
            if(err){
                return callback(err);
            }
            if(!doc){
                return callback(new Error('loadDistributorsChainById expect a distributor'));
            }
            recurPopulate(doc, 1, level, function(err, result){
                if(err){
                    return callback(err);
                }
                callback(null, result.toObject());
            });
        });

    function recurPopulate(doc, index, len, callback){
        let curr = _.range(index).reduce(function(acc, curr){ return acc.upLine}, doc);
        if(!curr || index >= len){
            return callback(null, doc);
        }
        let populateStr = _.range(index).map(function(){return 'upLine'}).join('.');
        Membership.populate(doc,
            {
                path: populateStr,
                populate: {path: 'user', model: 'TenantUser', select: selectUserStr}
            }, function(err, doc){
            if(err){
                return callback(err);
            }
            recurPopulate(doc, ++index, len, callback);
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
        if(doc){
            return membershipKv.saveById(doc._id, doc, function(err, result){
                if(err){
                    return callback(err);
                }
                callback(null, result);
            })
        }
        callback(err, doc);
    });
};

Service.prototype.removeById = function(id, callback){
    var Membership = this.context.models.Membership;
    var membershipKv = this.context.kvs.membership;
    Membership.findByIdAndUpdate(id, {lFlg: 'd'}, {lean: true})
        .exec(function(err){
            if(err){
               return callback(err);
            }
            membershipKv.delById(id, function(err, obj){
                if(callback) callback(err, obj);
            });
        });
};

Service.prototype.delById = function(id, callback){
    var Membership = this.context.models.Membership;
    var membershipKv = this.context.kvs.membership;
    Membership.findByIdAndRemove(id, function(err){
        if(err){
            return callback(err)
        }
        membershipKv.delById(id, function(err, obj){
            if(callback) callback(err, obj);
        });
    });
};

module.exports = Service;