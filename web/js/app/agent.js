/**
 * SPA definition which is the single entry of our mobile site
 */
$ = require('../lib/jquery.cookie');
riot = require('seedriot');
util = require('./util');
require('./jssdk');
domain = require('../domain/index');


/*
* wechat js config
*/
var jsConfig = __page.jc;
if(jsConfig){
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
})($);

module.exports = agent;