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
            var res = yield qnClient.uploadBufAsync(imageBuffer[0], 'qn/image/' + mediaId + '.jpg');
            callback(null, res.url);
        }catch(e){
            if(e.code === 614){
                return callback(e);
            }
            logger.error(e);
            callback(e);
        }
    });
};

Service.prototype.getByNameAndType = function(name, type){
    if(!['image', 'voice'].indexOf(type) <0){
        throw new Error('file type expected to be image or voice.');
    }
    var suffix = type === 'image' ? '.jpg' : '.amr';
    return qnClient.getByName('qn/' + type  + '/' + name + suffix);
};

module.exports = Service;