var settings = require('@private/vmark-settings');
var WechatApi = require('./WechatApi');
var context = require('../../../context/context');
var WechatToken = require('../kvs/WechatToken');
var wechatTokenKv = new WechatToken(context);

var wechatApi = new WechatApi(
    settings.wechat.appKey,
    settings.wechat.appSecret,
    wechatTokenKv
);

module.exports = wechatApi;