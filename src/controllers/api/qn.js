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
        console.log(self.request.body);
        var media_id = self.request.body.media_id;
        try {
            console.error(media_id);
            var voiceBuffer = yield wechatApi.getMediaAsync(media_id);
            console.log(voiceBuffer[0]);
            var res = yield qnClient.uploadBufAsync(voiceBuffer[0], 'qn/test/voice/' + media_id + '.amr', {key: 'qn/test/voice/' + media_id + '.mp3', persistentOps: 'avthumb/mp3'});
            //qnClient.uploadVoiceBuf(voiceBuffer[0], 'qn/test/voice/' + media_id + '.amr', {key: 'qn/test/voice/' + media_id + '.mp3', persistentOps: 'avthumb/mp3'}, function(err, res){
            //    console.error(res);
            //})
            console.error(res);
            self.body = res.url;
        }catch(err){
            console.log(err);
            self.body = '404';
        }
    });
};