var assert = require('assert');
var request = require('request');
var fs = require('fs');
var wechatApi = require('../../../src/modules/wechat/common/api').api;
var co = require('co');

describe.only('file upload', function(){
    it('success upload image file', function(done){
        var formData = {
            mediaId: '123',
            file: fs.createReadStream(__dirname + '/test.jpeg')
        }
        request.post({url:'http://localhost:3040/api/file/upload', formData: formData}, function optionalCallback(err, httpResponse, body) {
            console.log(err);
            console.log(body);
            assert.ok(!err);
            assert.ok(JSON.parse(body).custom_id);
            assert.ok(JSON.parse(body).media_id);
            assert.ok(JSON.parse(body).wx_media_id);
            done();
        });
    });

    it('success upload voice file', function(done){
        var formData = {
            mediaId: '123',
            file: fs.createReadStream(__dirname + '/test.amr')
        }
        request.post({url:'http://localhost:3040/api/file/upload', formData: formData}, function optionalCallback(err, httpResponse, body) {
            console.log(err);
            console.log(body);
            assert.ok(!err);
            assert.ok(JSON.parse(body).media_id);
            assert.ok(JSON.parse(body).custom_id);
            assert.ok(JSON.parse(body).wx_media_id);
            done();
        });
    });

});
//
//describe('get file', function(){
//    var media_id = '';
//    before(function(done){
//        var formData = {
//            file: fs.createReadStream(__dirname + '/test.png')
//        }
//        request.post({url:'http://localhost:3020/api/file/upload', formData: formData}, function optionalCallback(err, httpResponse, body) {
//            console.log(err);
//            assert.ok(!err);
//            var data = JSON.parse(body);
//            assert.ok(data.media_id);
//
//            media_id = data.media_id
//            done();
//        });
//    })
//    it('success get file', function(done){
//        var url = 'http://localhost:3020/api/file/?media_id=' + media_id;
//        request(url, function(error, response, body){
//            assert.ok(!error);
//            console.log(body);
//            done();
//        })
//    })
//})
//
//describe('upload media file', function(){
//    var mediaId = '';
//    before(function(done){
//        wechatApi.uploadMedia(__dirname + '/test.png', 'image', function(err, result){
//            assert.ok(!err);
//            mediaId = result.media_id;
//            done();
//        })
//    });
//
//    it('success upload media file', function(done){
//        wechatApi.getLatestToken(function(err, token){
//            var url = 'https://api.weixin.qq.com/cgi-bin/media/get?access_token='+ token.accessToken + '&media_id=' + mediaId;
//
//            assert.ok(!err);
//            var formData = {
//                file: {
//                    value: request(url),
//                    options: {
//                        filename:  mediaId + '.jpeg',
//                        contentType: 'image/jpeg'
//                    }
//                }
//                //file: request(url)
//            }
//            request.post({url:'http://localhost:3020/api/file/upload', formData: formData}, function optionalCallback(err, httpResponse, body) {
//                console.log(err);
//                console.log(body);
//                assert.ok(!err);
//                assert.ok(JSON.parse(body).media_id);
//                done();
//            });
//        });
//    });
//});