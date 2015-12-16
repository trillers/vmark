var context = require('../../../context/context');
var WechatBotManager = require('./WechatBotManager');
var wechatBotManager = new WechatBotManager(
    context, {
        interval: 10000
    });

context.wechatBotManager = wechatBotManager;
module.exports = wechatBotManager;

