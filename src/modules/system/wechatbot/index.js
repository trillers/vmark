var context = require('../../../context/context');

var wechatBotManager = new WechatBotManager(
    context, {
        interval: 10000
    });
module.exports = wechatBotManager;

