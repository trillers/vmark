/**
 * SPA definition which is the single entry of our mobile site
 */
var jquery = require('jquery');
jquery = require('../lib/jquery.cookie');
util = require('./util');
var page = require('./page');
///*
// * import global variables
// */
riot = require('seedriot');
$ = jquery;
require('./jssdk');
domain = require('../domain/index');
/*
* wechat js config
*/
var jsConfig = __page.jc;
if(jsConfig){
    wx.chooseImageAsync = function(opts){
        return new Promise(function(resolve, reject){
            wx.chooseImage({
                count: opts.count,
                sizeType: opts.sizeType,
                sourceType: opts.sourceType,
                success: function (res) {
                  resolve(res.localIds);
              }
            })
        })
    };
    wx.uploadImageAsync = function(opts){
        return new Promise(function(resolve, reject){
            wx.uploadImage({
                localId: opts.localId,
                isShowProgressTips: opts.isShowProgressTips,
                success: function (res) {
                  resolve(res.serverId)
                }
            });
        })
    };
    wx.uploadImages = function(opts){
        var localIds = opts.localIds;
        var len = localIds.length;
        var serverIds = [];
        var successFn = opts.success;
        localIds.forEach(function(localId){
            wx.uploadImage({
                localId: localId,
                isShowProgressTips: opts.isShowProgressTips,
                success: function(){
                    serverIds.push(res.serverId);
                    if(serverIds.length === len){
                      successFn(serverIds);
                    }
                }
            })
        });
    };
    wx.uploadImagesAsync = function(opts){
        return new Promise(function(resolve, reject){
            var asyncArr = [];
            opts.localIds.forEach(function (localId) {
                asyncArr.push(wx.uploadImageAsync({
                    localId: localId,
                    isShowProgressTips: opts.isShowProgressTips
                }))
            });
            Promise.all(asyncArr).then(function(serverIds){
                resolve(serverIds)
            });
        })
    };
    wx.error(function(res){
        console.log(res);
    });
}
else{
    console.error('no js config found');
}

var agent = {
    init: function(){return this;}
};

(function($){
    //function onStart(event) {
    //    util.forbidOperation();
    //}
    //function onComplete(event, xhr, settings) {
    //    util.removeforbidOperation();
    //}
    //$(document).ajaxStart(onStart).ajaxComplete(onComplete);
    window.newActivity = {};
    window.revokedActivity = {};
    riot.observable(window.newActivity);
    riot.observable(window.revokedActivity);
})(jquery);

module.exports = agent;