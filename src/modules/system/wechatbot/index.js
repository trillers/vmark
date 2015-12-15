var context = require('../../../index');

var wechatBotManager = new WechatBotManager(
    context, {
        interval: 10000
    });
module.exports = wechatBotManager;

