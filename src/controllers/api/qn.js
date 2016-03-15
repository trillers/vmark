var util = require('util');
var logger = require('../../app/logging').logger;
var FileService = require('../../modules/file/services/FileService');
var wechatApi = require('../../modules/wechat/common/api').api;
var fs = require('fs');
var path = require('path');
var thunkify = require('thunkify');
var readFile = thunkify(fs.readFile);
var qnClient = require('../../app/qnClient');

module.exports = function(router){
    /**
     * upload voice api
     * */
    router.post('/voice', function* (){
        var self = this;
        var media_id = self.request.body.media_id;
        try {
            var voiceBuffer = yield wechatApi.getMediaAsync(media_id);
            console.log(voiceBuffer[0]);
            var res = yield qnClient.uploadBufAsync(voiceBuffer[0], 'qn/voice/' + media_id + '.amr');
            console.error(res);
            this.body = {url: res.url};
        }catch(err){
            console.log(err);
            this.body = '404';
        }
    });
    router.post('/image', function* (){
        var self = this;
        var media_id = self.request.body.media_id;
        try {
            var imageBuffer = yield wechatApi.getMediaAsync(media_id);
            var res = yield qnClient.uploadBufAsync(imageBuffer[0], 'qn/image/' + media_id + '.jpg');
            console.error(res);
            this.body = {url: res.url};
        }catch(err){
            console.log(err);
            this.body = '404';
        }
    });
};