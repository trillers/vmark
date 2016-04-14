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
            docs = docs.filter(function(doc){return doc.product});
        }
        callback(null, docs);
    })

};

Service.prototype.findByRelatedDistributor = function(distributorId, status, callback){
    var Order = this.context.models.Order;
    var done = callback || function noop(){};

    Order.find({status: status, distributors: {$all: [distributorId]}}, null, {lean: true})
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
    }).exec(done)
};

Service.prototype.finishByDistributorIdAndTenantIdAndMediaId = function(distributorId, tenantId, mediaId, callback){
    var me = this;
    var Order = this.context.models.Order;

    var query = Order.find({org: tenantId, distributors: { $all: [distributorId]}});
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
                    doc.status = OrderStatus.finish.value();
                    promises.push(doc.save());
                });
                Promise.all(promises).then(function(err, doc){
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
            callback(null, doc);
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
            params.populates.forEach(i=>{
                query.populate(i)
            })
        }

        query.lean(true);
        var docs = yield query.exec();
        var count = yield Order.count(params.conditions).exec();
        var data = {
            docs: docs,
            count: count
        }
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
        Order.findById(id, null, {lean: true}).exec(callback);
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
        Order.findByIdAndUpdate(id, json, {lean: true, new: true}).exec(callback);
    })
};

Service.prototype.removeById = function(id, callback){
    var Order = this.context.models.Order;
    var orderKv = this.context.kvs.order;
    Order.findByIdAndUpdate(id, {lFlg: 'd'}, {lean: true})
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