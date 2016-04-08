var PosterType = require('../../common/models/TypeRegistry').item('PosterType');
var wechatApiCache = require('../../tenant/wechat/api-cache');
var qrTypeRegistry = require('../../wechatsite/qr/QrTypeRegistries').tenantQrTypeRegistry;
require('../../wechatsite/qr/qr-center');
var context = require('../../../context/context');
var request = require('request');
var Promise = require('bluebird');
var co = require('co');
var fs = Promise.promisifyAll(require('fs'));
var path = require('path');

var Canvas = require('canvas')
    , Image = Canvas.Image
    , canvas = new Canvas(600, 900)
    , ctx = canvas.getContext('2d');

var fetchPoster = function* (posterMeta, wechatId, user){
    if(typeof posterMeta != 'object'){
        throw new Error('fetchPoster\'s param [posterMeta] expected to be a object.');
    }
    if(typeof posterMeta.product != 'object'){
        throw new Error('product in posterMeta expected to be a object');
    }
    var poster = yield context.services.posterService.loadByProductId(posterMeta.product._id);
    if(poster){
        return poster;
    }
    var bgImg = posterMeta.product.poster;
    var product = posterMeta.product._id;
    var tenantUser = null;
    if(typeof user=== 'object'){
        tenantUser = user;
    }else{
        tenantUser = yield context.services.tenantUserService.loadById(user);
    }
    var qrType = qrTypeRegistry.getQrType('distributorCreateType');
    var qr = qrType.createQrAsync({wechatId: wechatId});

};

module.exports = Handler;