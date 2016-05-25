"use strict";
var co = require('co');
var cbUtil = require('../../../../framework/callback');
var typeRegistry = require('../../../common/models/TypeRegistry');
var Promise = require('bluebird');

var Service = function(context){
    this.context = context;
};

Service.prototype.create = function(wechatId, json, callback){
    var pointsKv = this.context.kvs.points;
    var Points = this.context.models.Points;

    var points = new Points(json);
    points.save(function (err, result, affected) {
        cbUtil.logCallback(
            err,
            'Fail to save points: ' + err,
            'Succeed to save points');

        cbUtil.handleAffected(function(err, doc){
            var obj = doc.toObject({virtuals: true});
            pointsKv.saveById(wechatId, obj._id, obj, function(err, obj){
                if(callback) callback(err, obj);
            });
        }, err, result, affected);
    });
};

Service.prototype.findByTenantId = function(tenantId, params, callback){
    var me = this;
    var Points = this.context.models.Points;

    var query = Points.find();
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

Service.prototype.find = function (params, callback) {
    var Points = this.context.models.Points;
    var logger = this.context.logger;
    co(function*(){
        var query = Points.find();

        if (params.options) {
            query.setOptions(params.options);
        }

        if (params.sort) {
            query.sort(params.sort);
        }

        if (params.page) {
            var skip = (params.page.no - 1) * params.page.size;
            var limit = parseInt(params.page.size, 10);
            if (skip) query.skip(skip);
            if (limit) query.limit(limit);
        }

        if (params.conditions) {
            query.find(params.conditions);
        }

        if(params.populates) {
            params.populates.forEach(function(i){
                console.log(i);
                query.populate(i)
            })
        }

        //query.lean(true);
        var pageDocs = yield query.exec();
        pageDocs = pageDocs.map(function(doc){
            return doc.toObject({virtuals: true})
        });


        var allQuery = Points.find();

        if (params.options) {
            allQuery.setOptions(params.options);
        }

        if (params.sort) {
            allQuery.sort(params.sort);
        }
        if (params.conditions) {
            allQuery.find(params.conditions);
        }

        if(params.populates) {
            params.populates.forEach(function(i){
                query.populate(i)
            })
        }
        var allDocs = allQuery.exec();

        var data = {
            pageDocs: pageDocs,
            allDocs: allDocs
        };
        if(callback) callback(null, data);

    }).catch(function(e){
        logger.error('find points error: ' + e);
        logger.error(e.stack);
        if(callback) callback(e, null);
    })
};

Service.prototype.add = function(json, callback){
    var Points = this.context.models.Points;
    var org = json.org;
    var membership = json.membership;
    var media = json.media;
    var val = json.points;
    co(function*(){
        try{
            var points = yield Points.findOneAndUpdate(
                {org: org, membership: membership, media: media},
                {$inc: {rest: val}},
                {new: true}
            ).exec();
            callback && callback(null, points);
        }catch (e) {
            this.context.logger.error(e);
            callback && callback(e);
        }
    });
};

Service.prototype.loadById = function(id, callback){
    var pointsKv = this.context.kvs.points;
    var Points = this.context.models.Points;
    pointsKv.loadById(id, function(e, o){
        if(e){
            return callback(e);
        }
        if(o){
            return callback(null, o);
        }
        Points.findById(id, null).exec(function(err, doc){
            callback(err, doc.toObject({virtuals: true}))
        });
    });
};

Service.prototype.updateById = function(id, json, callback){
    var Points = this.context.models.Points;
    var pointsKv = this.context.kvs.points;
    !json['_id'] && (json['_id'] = id);
    pointsKv.saveById(json, function(err, result){
        if(err){
            return callback(err);
        }
        Points.findByIdAndUpdate(id, json, {new: true}).exec(function(err, doc){
            if(doc){
                doc = doc.toObject({virtuals: true});
            }
            callback(err, doc);
        });
    })
};

Service.prototype.removeById = function(id, callback){
    var Points = this.context.models.Points;
    var pointsKv = this.context.kvs.points;
    Points.findByIdAndUpdate(id, {lFlg: 'd'})
        .exec(function(err){
            if(err){
                console.error(err);
            }else{
                pointsKv.delById(id, function(err, obj){
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