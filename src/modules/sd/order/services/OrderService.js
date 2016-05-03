"use strict";
var co = require('co');
var cbUtil = require('../../../../framework/callback');
var typeRegistry = require('../../../common/models/TypeRegistry');
var OrderStatus = typeRegistry.item('OrderStatus');
var Promise = require('bluebird');

var Service = function(context){
    this.context = context;
};

Service.prototype.create = function(wechatId, json, callback){
    var orderKv = this.context.kvs.order;
    var Order = this.context.models.Order;

    var order = new Order(json);
    order.save(function (err, result, affected) {
        cbUtil.logCallback(
            err,
            'Fail to save order: ' + err,
            'Succeed to save order');

        cbUtil.handleAffected(function(err, doc){
            var obj = doc.toObject({virtuals: true});
            orderKv.saveById(wechatId, obj._id, obj, function(err, obj){
                if(callback) callback(err, obj);
            });
        }, err, result, affected);
    });
};

Service.prototype.findByTenantId = function(tenantId, params, callback){
    var me = this;
    var Order = this.context.models.Order;

    var query = Order.find();
    query
        .populate({
            path: 'product',
            match:{
                tenant: tenantId
            }
        })
        .populate({
            path: 'user',
            model: 'TenantUser'
        })
        .exec(function(err, docs){
        if(err){
            me.context.logger.error(err);
            return callback(err);
        }
        if(docs && docs.length){
            docs = docs.filter(function(doc){return doc.product}).map(function(doc){
                return doc.toObject({virtuals: true})
            });
        }
        callback(null, docs);
    })

};

Service.prototype.getClearPriceAndUnclearPriceOfOrdersByOrdersAndDistributorId = function(orders, distributorId){
    if(!orders.length){
        return {};
    }
    let prices = orders
        .filter(function(order){ return order.bespeak && order.bespeak.product })
        .map(function(order){
            let product = order.bespeak.product;
            var level = null;
            var price = null;
            var type = null;
            if(order.closingDistributors && order.closingDistributors.indexOf(distributorId) > 0){
                level = order.closingDistributors.indexOf(distributorId) + 1;
                type = 'clear';
            }else{
                level = order.distributors.indexOf + 1;
                type = 'unclear';
            }
            if(product['upLine' + level + 'CommissionType'] === 'c'){
                price = parseInt(product['upLine' + level + 'CommissionValue'], 10);
            }
            else{
                price = product.finalPrice * parseInt(product['upLine' + level + 'CommissionValue'], 10)/100;
            }
            console.log("@@@@@@@@@@@@@@@@");
            console.log(price)
            return {
                type: type,
                price: price
            }
    });
    let clearPrice = prices.filter(function(pair){ return pair.type === 'clear' }).reduce(function(acc, curr){ return acc + curr.price }, 0);
    let unClearPrice = prices.filter(function(pair){ return pair.type === 'unclear' }).reduce(function(acc, curr){ return acc + curr.price }, 0);
    return {
        clear: clearPrice,
        unclear: unClearPrice
    }
};

Service.prototype.findByRelatedDistributor = function(distributorId, status, callback){
    var Order = this.context.models.Order;
    if(typeof callback === 'undefined'){
        callback = status;
        status = undefined;
    }
    var params = {distributors: {$all: [distributorId]}};

    status && (params['status'] = status);

    Order.find(params, null)
    .populate({
        path: 'bespeak',
        model: 'Bespeak',
        populate: [
            {
                path: 'product',
                model: 'Course'
            },
            {
                path: 'user',
                model: 'TenantUser'
            }
        ]
    }).exec(function(err, docs){
        if(err){
            return callback(err)
        }
        if(docs && docs){
            docs.forEach(function(doc){
                doc.toObject({virtuals: true})
            });
        }
        callback(null, docs);
    })
};

Service.prototype.finishByDistributorIdAndTenantIdAndMediaId = function(distributorId, tenantId, mediaId, callback){
    var me = this;
    var Order = this.context.models.Order;

    var query = Order.find(
        {
            org: tenantId,
            status: OrderStatus.unFinish.value(),
            distributors: distributorId,
            closingDistributors: { $nin: [distributorId]}
        });
    query
        .populate({
            path: 'bespeak',
            match: {
                media: mediaId
            }
        })
        .exec(function(err, docs){
            if(err){
                return callback(err)
            }
            if(docs && docs.length){
                docs = docs.filter(function(doc){
                    return doc.bespeak;
                });
                var promises = [];
                docs.forEach(function(doc){
                    doc.closingDistributors.push(distributorId);
                    if(doc.closingDistributors.length === doc.distributors.length){
                        doc.status = OrderStatus.finish.value();
                    }
                    promises.push(doc.save());
                });
                Promise.all(promises).then(function(err, doc){
                    docs = docs.map(function(doc){ return doc.toObject({virtuals: true})})
                    callback(null, docs);
                });
            }else{
                callback(null, docs);
            }
        });
};

Service.prototype.loadFullInfoById = function(id, callback){
    var me = this;
    var Order = this.context.models.Order;
    var query = Order.findById(id);
    query
        .populate({
            path: 'bespeak',
            populate: [
                {
                    path: 'user',
                    model: 'TenantUser'
                },
                {
                    path: 'product',
                    model: 'Course'
                }
            ]
        })
        .exec(function(err, doc){
            if(err){
                me.context.logger.error(err);
                return callback(err);
            }
            if(doc){
                doc = doc.toObject({virtuals: true})
            }
            callback(null, doc);
        })
};

Service.prototype.filter = function (params, callback) {
    var Order = this.context.models.Order;
    var logger = this.context.logger;
    co(function*(){
        var query = Order.find();

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

        if(params.populates) {
            params.populates.forEach(function(i){
                query.populate(i)
            })
        }

        //query.lean(true);
        var docs = yield query.exec();
        docs = docs.filter(function(doc){
            return doc.bespeak;
        });
        if(callback) callback(null, docs);

    }).catch(function(e){
        logger.error('find orders error: ' + e);
        logger.error(e.stack);
        if(callback) callback(e, null);
    })
};

Service.prototype.find = function (params, callback) {
    var Order = this.context.models.Order;
    var logger = this.context.logger;
    co(function*(){
        var query = Order.find();

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

        if(params.populates) {
            params.populates.forEach(function(i){
                query.populate(i)
            })
        }

        //query.lean(true);
        var docs = yield query.exec();
        docs = docs.map(function(doc){
            return doc.toObject({virtuals: true})
        });
        var count = yield Order.count(params.conditions).exec();
        var data = {
            docs: docs,
            count: count
        };
        if(callback) callback(null, data);

    }).catch(function(e){
        logger.error('find orders error: ' + e);
        logger.error(e.stack);
        if(callback) callback(e, null);
    })
};

Service.prototype.loadById = function(id, callback){
    var orderKv = this.context.kvs.order;
    var Order = this.context.models.Order;
    orderKv.loadById(id, function(e, o){
        if(e){
            return callback(e);
        }
        if(o){
            return callback(null, o);
        }
        Order.findById(id, null).exec(function(err, doc){
            callback(err, doc.toObject({virtuals: true}))
        });
    });
};

Service.prototype.updateById = function(id, json, callback){
    var Order = this.context.models.Order;
    var orderKv = this.context.kvs.order;
    !json['_id'] && (json['_id'] = id);
    orderKv.saveById(json, function(err, result){
        if(err){
            return callback(err);
        }
        Order.findByIdAndUpdate(id, json, {new: true}).exec(function(err, doc){
            if(doc){
                doc = doc.toObject({virtuals: true});
            }
            callback(err, doc);
        });
    })
};

Service.prototype.removeById = function(id, callback){
    var Order = this.context.models.Order;
    var orderKv = this.context.kvs.order;
    Order.findByIdAndUpdate(id, {lFlg: 'd'})
        .exec(function(err){
            if(err){
                console.error(err);
            }else{
                orderKv.delById(id, function(err, obj){
                    if(callback) callback(err, obj);
                });
            }
        });
};

function mixin(t, s){
    for(var p in s){
        t[p] = s[p];
    }
}

module.exports = Service;