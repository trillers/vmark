var util = require('util');
var logger = require('../../../app/logging').logger;
var FileService = require('../../file/services/FileService');
var wechatApi = require('../../wechat/common/api').api;
var fs = require('fs');
var path = require('path');
var thunkify = require('thunkify');
var qnClient = require('../../../app/qnClient');
var co = require('co');

var Service = function(context){
    this.context = context;
};

Service.prototype.uploadImg = function(mediaId, callback){
    co(function*(){
        try{
            var imageBuffer = yield wechatApi.getMediaAsync(mediaId);
            var res = yield qnClient.uploadBufAsync(imageBuffer[0], mediaId + '.jpg');
            callback(null, res.url);
        }catch(e){
            logger.error(e);
            callback(e);
        }
    });
};

module.exports = Service;