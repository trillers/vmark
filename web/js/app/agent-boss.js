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
nest = require('./nest');
$ = jquery;
require('./jssdk');
domain = require('../domain/index');

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