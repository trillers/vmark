var util = require('util');
var logger = require('../../app/logging').logger;
var FileService = require('../../modules/file/services/FileService');
var wechatApi = require('../../modules/wechat/common/api').api;
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var path = require('path');
//var thunkify = require('thunkify');
//var readFile = thunkify(fs.readFile);

module.exports = function(router){
    /**
     * get file
     * */
    router.get('/', function* (){
        var self = this;
        console.log(self.query);
        var media_id = self.query.media_id;
        try {
            var file = yield FileService.loadAsync(media_id);
            var stats = yield fs.statAsync(file.path);
            self.set('Last-Modified', stats.mtime.toUTCString());
            self.set('Content-Length', stats.size);
            self.type = file.mimeType;
            self.body = fs.createReadStream(file.path);
        }catch(err){
            console.error(err.stack);
            self.body = '404';
        }
    });

    router.post('/uploads', function* (){
        var self = this;
        var metas = [];
        var files = self.request.body.files.files;
        files = Array.isArray(files) ? files : [files];

        try{
            for(var i=0, len=files.length; i<len; i++){
                var file = files[i];
                var fileType = file.type && file.type.split('/')[0];
                var ext = '';
                var pos = file.name.lastIndexOf('.');
                if(pos != -1){
                    ext = file.name.substring(pos + 1, file.name.length);
                }
                if(fileType === 'image' || fileType === 'audio' || ext === 'amr') {
                    if(ext === 'amr'){
                        file.type = 'audio/amr'
                    }
                    var fileJson = {
                        name: file.name,
                        ext: ext,
                        size: file.size,
                        path: file.path,
                        mimeType: file.type
                    };
                    try {
                        var result = yield FileService.createAsync(fileJson);
                        metas.push({media_id: result._id, custom_id: result.custom_id})
                    } catch (err) {
                        logger.error('save file info err:' + err);
                        this.body = {err: err, metas: metas};
                        return;
                    }
                } else {
                    logger.error('save file info err: file type invalid');
                    this.body = {err: 'file_type_invalid', metas: metas};
                    return;
                }
            }
            this.body = {err: null, metas: metas}
        }catch(e){
            logger.error('save file info err: file type invalid');
            this.body = {err: e, metas: metas};
        }
    });

    /**
     * upload file
     * */
    router.post('/upload', function* (){
        var self = this;
        console.error(self.request.body.files);

        if(self.request.body.files) {
            var file = self.request.body.files.file;
            var mediaId = self.request.body.fields.mediaId;
            var fileType = file.type && file.type.split('/')[0];
            var ext = '';
            var pos = file.name.lastIndexOf('.');
            if(pos != -1){
                ext = file.name.substring(pos + 1, file.name.length);
            }
            if(fileType === 'image' || fileType === 'audio' || ext === 'amr') {
                if(ext === 'amr'){
                    file.type = 'audio/amr'
                }
                var fileJson = {
                    name: file.name,
                    ext: ext,
                    size: file.size,
                    path: file.path,
                    mimeType: file.type
                }
                if(mediaId){
                    fileJson.custom_id = mediaId;
                }
                console.log('*************************************');
                console.log(fileJson);
                try {
                    var wx_media_id = 'default';
                    //if (file.type && file.size > 0 && fileType === 'image') {
                    //    console.log('upload image');
                    //    var imageData = yield wechatApi.uploadMediaAsync(file.path, 'image');
                    //    wx_media_id = imageData[0].media_id;
                    //} else if (file.type && file.size > 0 && fileType === 'audio' || ext === 'amr') {
                    //    console.log('upload voice');
                    //    var voiceData = yield wechatApi.uploadMediaAsync(file.path, 'voice');
                    //    wx_media_id = voiceData[0].media_id;
                    //}
                    fileJson.wx_media_id = wx_media_id;
                    var result = yield FileService.createAsync(fileJson);
                    console.log('++++++');
                    console.log(result);
                    this.body = {err: null, media_id: result._id, wx_media_id: wx_media_id, custom_id: result.custom_id};
                } catch (err) {
                    logger.error('save file info err:' + err);
                    this.body = {err: err, media_id: null, wx_media_id: null, custom_id: null};
                }
            } else {
                logger.error('save file info err: file type invalid');
                this.body = {err: 'file_type_invalid', media_id: null, wx_media_id: null, custom_id: null};
            }
        }else{
            this.body = {error: 'no file'}
        }
    });

};