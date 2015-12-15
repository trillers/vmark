var botManagerContainer = require('../../../app/bot-manager');
var context = require('../../../index');
var orgMediaService = context.services.orgMediaService;
var clients = {};
var WechatBotManager = require('./WechatBotManager');
setImmediate(function() {
    orgMediaService.loadAllBot(function (err, bots) {
        if (err) {
            return console.error('load bot err: ' + err);
        }
        var botManager = botManagerContainer.botManager;
        bots.forEach(function (item) {
            if(item.media && item.media.customId) {
                clients[item.media.customId] = botManager.getBot(item.media.customId);
            }
        });
    })
});

var _getBot = function(botId) {
    if (clients[botId]) return clients[botId];
    return clients[botId] = botManager.getBot(botId);
}

var wechatBotManager = new WechatBotManager(
    context, {
        interval: 10000
    });
module.exports = wechatBotManager;

