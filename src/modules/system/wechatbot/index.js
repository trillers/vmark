var botManagerContainer = require('../../../app/bot-manager');
var context = require('../../../index');
var orgMediaService = context.services.orgMediaService;
var clients = {};

setImmediate(function() {
    orgMediaService.loadAllBot(function (err, bots) {
        if (err) {
            return console.error('load bot err: ' + err);
        }
        var botManager = botManagerContainer.botManager;
        bots.forEach(function (item) {
            clients[item._id] = botManager.getBot(item._id);
        });
    })
});

var _getBot = function(botId) {
    if (clients[botId]) return clients[botId];
    return clients[botId] = botManager.getBot(botId);
}

module.exports.getBot = _getBot;

