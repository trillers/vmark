var co = require('co');
var cbUtil = require('../../../../framework/callback');
var typeRegistry = require('../../../common/models/TypeRegistry');

var Service = function(context){
    this.context = context;
};

Service.prototype.create = function(json, callback){
    var catalogKv = this.context.kvs.catalog;
    var Catalog = this.context.models.Catalog;
    var catalog = new Catalog(json);
    catalog.save(function (err, result, affected) {
        cbUtil.logCallback(
            err,
            'Fail to save catalog: ' + err,
            'Succeed to save catalog');

        cbUtil.handleAffected(function(err, doc){
            var obj = doc.toObject({virtuals: true});
            catalogKv.saveById(obj, function(err, obj){
                if(callback) callback(err, obj);
            });
        }, err, result, affected);
    });
};

Service.prototype.find = function (params, callback) {
    var Catalog = this.context.models.Catalog;
    var query = Catalog.find();

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

    if(params.populate) {
        params.populate.forEach(i=>{
            query.populate(i)
        })
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

Service.prototype.loadFullInfoById = function(id, callback){
    var Catalog = this.context.models.Catalog;
    Catalog.findById(id, null, {lean: true})
        .populate({path: 'tenant'})
        .populate({path: 'media', model:'WechatMedia'})
        .populate({path: 'products'})
        .exec(callback);
};

Service.prototype.loadById = function(id, callback){
    var catalogKv = this.context.kvs.catalog;
    var Catalog = this.context.models.Catalog;
    catalogKv.loadById(id, function(e, o){
        if(e){
            return callback(e);
        }
        if(o){
            return callback(null, o);
        }
        Catalog.findById(id, null, {lean: true}).exec(callback);
    });
};

Service.prototype.updateById = function(id, json, callback){
    var Catalog = this.context.models.Catalog;
    var catalogKv = this.context.kvs.catalog;
    !json['_id'] && (json['_id'] = id);
    catalogKv.saveById(json, function(err, result){
        if(err){
            return callback(err);
        }
        Catalog.findByIdAndUpdate(id, json, {lean: true, new: true}).exec(callback);
    })
};

Service.prototype.removeCatalogById = function(id, callback){
    var Catalog = this.context.models.Catalog;
    var catalogKv = this.context.kvs.catalog;
    Catalog.findByIdAndUpdate(id, {lFlg: 'd'}, {lean: true})
        .exec(function(err){
            if(err){
                console.error(err);
            }else{
                catalogKv.delById(id, function(err, obj){
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