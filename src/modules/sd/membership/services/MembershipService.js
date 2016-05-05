"use strict";
var co = require('co');
var util = require('util');
var TenantUserService = require('../../../tenant/user/services/TenantUserService');
var cbUtil = require('../../../../framework/callback');
var typeRegistry = require('../../../common/models/TypeRegistry');
var MembershipType = typeRegistry.item('MembershipType');
var CommissionType = typeRegistry.item('CommissionType');
var LifeFlag = typeRegistry.item('LifeFlag');
var _ = require('underscore');
var wechatApiCache = require('../../../tenant/wechat/api-cache');

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

Service.prototype.findCountByTenantId = function (tenantId, options, callback) {
    var Membership = this.context.models.Membership;
    var params = {org: tenantId};
    _.extend(params, options);
    Membership.count(params, callback);
};

Service.prototype.ensureSignUp = function(wechatId, userId, callback){
    var me = this;
    var done = callback || function noop(){};
    co(function*(){
        try{
            let membership = yield me.loadByUserIdAndWechatIdAsync(userId, wechatId);
            if(membership){
                return callback(null, membership);
            }
            let media = yield me.context.services.tenantWechatSiteService.loadTenantWechatSiteByOriginalIdAsync(wechatId);
            let org = yield me.context.services.tenantOrgService.loadByWechatIdAsync(wechatId);
            let customer = {
                user: userId,
                media: media._id,
                org: org._id
            };
            yield me.createAsync(customer);
            done(null, customer);
        } catch (e){
            me.context.logger.error('Failed to ensure membership sign up' + util.inspect(e))
            done(e);
        }
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

Service.prototype.splitBill = function(distributor, product, finalPrice, level, callback){
    var me = this;
    co(function*(){
        try{
            let index = 1;
            if(typeof level === 'function'){
                callback = level;
                level = 3;
            }
            let recurSplitBill = function* (distributor, index){
                if(!distributor || !distributor.upLine || index > level){
                    return callback(null);
                }
                let currentDistributor = distributor.upLine;
                let IncomeAmount = null;
                let commissionType = product['upLine' + index + 'CommissionType'];
                let commissionValue = product['upLine' + index + 'CommissionValue'];
                if(commissionType === CommissionType.Percent.value()){
                    IncomeAmount = parseFloat(finalPrice, 10) * (parseFloat(commissionValue, 10)/100);
                }else if(commissionType === CommissionType.Cash.value()){
                    IncomeAmount = parseFloat(commissionValue, 10);
                }else{
                    throw new Error('unknown distributor strategy');
                }
                yield me.addAccountBalanceAsync(currentDistributor._id, IncomeAmount);
                yield recurSplitBill(distributor.upLine, ++index);
            };
            yield recurSplitBill(distributor, index);
        }
        catch(e){
            me.context.logger.error('Failed to split bill ' + util.inspect(e));
            callback(e);
        }
    });
};

Service.prototype.addAccountBalance = function(distributorId, income, callback){
    var me = this;
    var membershipKv = this.context.kvs.membership;
    var Membership = this.context.models.Membership;
    Membership.findByIdAndUpdate(distributorId, {$inc: {accountBalance: income}}, {new: true}, function(err, doc){
        if(err){
            me.context.logger.error('Failed to add account balance' + util.inspect(err));
            return callback(err)
        }
        var obj = doc.toObject();
        return membershipKv.saveById(obj._id, obj, callback);
    });
};

Service.prototype.checkoutByDistributorId = function(distributorId, tenantId, media, callback){
    var me = this;
    var done = callback || function noop(){};
    co(function*(){
        try{
            let responseText = "网络错误.";
            let distributor = yield me.loadUserInfoByIdAsync(distributorId);
            let orders = yield me.context.services.orderService.finishByDistributorIdAndTenantIdAndMediaIdAsync(distributorId, tenantId, media._id);
            yield me.updateByIdAsync(distributorId, {accountBalance: 0});
            let wechatApi = (yield wechatApiCache.get(media.originalId)).api;
            for(let i=0, len=orders.length; i<len; i++){
                let order = yield me.context.services.orderService.loadFullInfoByIdAsync(orders[i]._id);
                let payment = 0;
                if(order.distributors){
                    let level = order.distributors.indexOf(distributorId) + 1;
                    let cmType = order.bespeak.product['upLine' + level + 'CommissionType'];
                    let cmValue = order.bespeak.product['upLine' + level + 'CommissionValue'];
                    if(cmType === CommissionType.Percent.value()){
                        payment = parseFloat(order.finalPrice, 10) * (parseFloat(cmValue, 10)/100);
                    }else{
                        payment = parseFloat(cmValue, 10);
                    }
                    responseText = "尊贵的经纪人 " + distributor.user.nickname + "\n" +
                        "客户 [ " + order.bespeak.user.nickname + " ] 购买了您分享的 " + order.bespeak.product.name + '\n' +
                        "您此单收入 " + payment;
                }
                yield wechatApi.sendTextAsync(distributor.user.openid, responseText);
            }
            done(null);
        }catch (e){
            me.context.logger.error('Failed to checkout by distributorId ' + util.inspect(e));
            done(e);
        }
    });
};

Service.prototype.findByUserIdAndMediaId = function(userId, mediaId, callback){
    var membershipKv = this.context.kvs.membership;
    var Membership = this.context.models.Membership;
    Membership.find({user: userId, media: mediaId})
        .exec(function(err, docs){
            if(err){
                return callback(err)
            }
            if(!docs.length){
                return callback(null, null)
            }
            callback(null, docs);
        })
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
        docs = docs.filter(function(doc){
            return doc.media;
        });
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
        console.log("**************")
        console.log(index)
        console.log(len);
        console.log(curr);
        if(!curr || index > len){
            return callback(null, doc);
        }
        let populateStr = _.range(index).map(function(){return 'upLine'}).join('.');
        console.log(populateStr);
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

Service.prototype.loadUserInfoById = function(id, callback){
    var membershipKv = this.context.kvs.membership;
    var Membership = this.context.models.Membership;

    Membership.findById(id, null, {lean: true})
        .populate({
            path: 'user',
            model: 'TenantUser'
        })
        .exec(callback);
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
    membershipKv.saveById(id, json, function(err, result){
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