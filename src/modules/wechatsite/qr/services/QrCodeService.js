var logger = require('../../../../../src/app/logging').logger;
var QrCode = require('../models/QrCode').model;
var wechat = require('../../../../../src/modules/wechat/common/api');
var _ = require('underscore');
var Promise = require('bluebird');
var Service = {};

var createLimitQRCode = function(sceneId, callback){
    wechat.api.createLimitQRCode(sceneId, function(err, result){
        if(err){
            if(callback) callback(err);
        }
        else{
            if(callback) callback(null, result.ticket);
        }
    });
};

var createTempQRCode = function(sceneId, callback){
    wechat.api.createTmpQRCode(sceneId, 30*24*3600, function(err, result){
        if(err){
            if(callback) callback(err);
        }
        else{
            if(callback) callback(null, result.ticket);
        }
    });
};

var createLimitQRCodeAsync = Promise.promisify(createLimitQRCode);
var createTempQRCodeAsync = Promise.promisify(createTempQRCode);

Service.create = function(json, callback){
    var qrCode = new QrCode(json);
    qrCode.save(function (err, doc, numberAffected) {
        if (err) {
            if (callback) callback(err);
            return;
        }
        if (numberAffected) {
            logger.debug('Succeed to create qrCode: ' + require('util').inspect(doc) + '\r\n');
            if (callback) callback(null, doc);
        }
        else {
            logger.error('Fail to create qrCode: ' + require('util').inspect(doc) + '\r\n');
            if (callback) callback(new Error('Fail to create qrChannel'));
        }
    });
}

Service.createQrCode = function(forever, type, sceneId, customId){
    var createQrCode = this.temp ?  createTempQRCodeAsync : createLimitQRCodeAsync;
    var qrCode = new QrCode({
        forever: forever,
        type: type,
        customId: customId
    });

    createQrCode(sceneId)
        .then(function(ticket){
            qrCode.ticket = ticket;
            qrCode.save(function (err, doc, numberAffected) {
                if (err) {
                    if (callback) callback(err);
                    return;
                }
                if (numberAffected) {
                    logger.debug('Succeed to create qrCode: ' + require('util').inspect(doc) + '\r\n');
                    if (callback) callback(null, doc);
                }
                else {
                    logger.error('Fail to create qrCode: ' + require('util').inspect(doc) + '\r\n');
                    if (callback) callback(new Error('Fail to create qrCode'));
                }
            });
        })
};

Service.updateBySceneId = function(sceneId, json, callback){
    QrCode.findOneAndUpdate({scene_id: sceneId}, _.omit(json, '_id', 'views', 'crtOn'), {lean: true, new: true}).exec(function(err, doc){
        if(err){
            console.error(err)
            if(callback) callback(err);
        }
        else{
            if(callback) callback(null, doc);
        }
    })
};

Service.updateById = function(json, callback){
    QrCode.findByIdAndUpdate(json.id, json, {lean: true, new: true}).exec(function(err, doc){
        if(err){
            if(callback) callback(err);
        }
        else{
            if(callback) callback(null, doc);
        }
    })
};

Service.loadBySceneId = function (sceneId, callback) {
    QrCode.findOneAndUpdate({scene_id: sceneId}, {$inc: {'views': 1}}, function(err, doc){
        if(err){
            if(callback) callback(err);
        }
        else{
            if(callback) callback(null, doc);
        }
        //TODO: update to increase views by one
    });
}

Service.loadById = function (id, callback) {
    QrCode.findByIdAndUpdate(id, {$inc: {'views': 1}}, function(err, doc){
        if(err){
            if(callback) callback(err);
        }
        else{
            if(callback) callback(null, doc);
        }
        //TODO: update to increase views by one
    });
}

Service = Promise.promisifyAll(Service);

module.exports = Service;


