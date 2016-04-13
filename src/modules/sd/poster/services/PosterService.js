"use strict";
var cbUtil = require('../../../../framework/callback');
var qrTypeRegistry = require('../../../wechatsite/qr/QrTypeRegistries').tenantQrTypeRegistry;
var posterBrush = require('../../../marketing/poster');
var _ = require('underscore');
var co = require('co');
var context = require('../../../../context/context');
var Promise = require('bluebird');
var settings = require('@private/vmark-settings');
var path = require('path');
var util = require('util');


function Service(context){ this.context = context}

Service.prototype.loadByQrCodeId = function(qrCodeId, callback){
    var posterKv = this.context.kvs.poster;
    var Poster = this.context.models.Poster;

    Poster.findOne({qr: qrCodeId})
    .populate({
        path: 'qr'
    }).exec(callback);
};

Service.prototype.loadByProductIdAndWechatIdAndUserId = function(productId, wechatId, userId, callback){
    var Poster = this.context.models.Poster;

    var query = Poster.find({product: productId, user: userId});
    query.populate({
        path: 'qr',
        match: {
            wechatId: wechatId
        }
    }).exec(function(err, docs){
        docs = docs.filter(function(doc){
            return doc.qr
        });
        context.logger.info('Succeed to load poster by productId and wechatId' + util.inspect(docs));
        callback(err, docs)
    });
};

Service.prototype.fetch = function(posterRaw, wechatId, user, callback){
    co(function*(){
        try{
            if(typeof posterRaw != 'object'){
                throw new Error('fetchPoster\'s param [posterMeta] expected to be a object.');
            }
            if(typeof posterRaw.product != 'object'){
                throw new Error('product in posterMeta expected to be a object.');
            }
            if(!posterRaw.product.poster){
                var error = new Error('fetch poster expected a bg image.');
                error.code = 801;
                throw error;
            }
            var posters = yield context.services.posterService.loadByProductIdAndWechatIdAndUserIdAsync(posterRaw.product._id, wechatId, user._id || user);
            if(posters && posters.length){
                return callback && callback(null, posters[0]) || posters[0];
            }
            let product = posterRaw.product;
            let tenantUser = null;
            if(typeof user=== 'object'){
                tenantUser = user;
            }else{
                tenantUser = yield context.services.tenantUserService.loadByIdAsync(user);
            }
            let qrType = qrTypeRegistry.getQrType('sdpp');
            let qr = yield qrType.createQrAsync({wechatId: wechatId, temp: true});
            let bgImg = settings.api.url + '/file?media_id=' + posterRaw.product.poster;
            let posterMeta = {
                qr: qr,
                product: product,
                user: tenantUser,
                bgImg: bgImg,
                wechatId: wechatId
            };
            let persistedPoster = yield context.services.posterService.createAsync(posterMeta);
            return callback && callback(null, persistedPoster) || persistedPoster;
        }catch(e){
            console.error(e);
            callback(e);
        }
    });
};

Service.prototype.filter = function(params, callback){
    var query = File.find();

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

Service.prototype.create = function(json, callback){
    var posterKv = this.context.kvs.sdPoster;
    var Poster = this.context.models.Poster;
    let meta = _.pick(json, "qr", "user", "bgImg", "wechatId");
    var callback  = callback || function noop(){};
    co(function*(){
        try{
            let result = yield posterBrush.drawSdParticipantPoster(meta);
            var poster = new Poster({
                user: json.user._id,
                product: json.product._id,
                qr: json.qr._id,
                mediaId: result.mediaId,
                fsPath: result.fsPath
            });
            poster.save(function (err, result, affected) {
                cbUtil.logCallback(
                    err,
                    'Fail to save poster: ' + err,
                    'Succeed to save poster');

                cbUtil.handleAffected(function(err, doc){
                    var obj = doc.toObject({virtuals: true});
                    posterKv.saveById(obj._id, obj, function(err, obj){
                        obj.ticket = json.qr.ticket;
                        callback(err, obj);
                    });
                }, err, result, affected);
            });
        }
        catch(e){
            callback(e);
        }
    })

};

module.exports = Service;