var botManager = require('../../../app/bot-manager');
var context = require('../../../index');

var clients = {};

botService.load(function(err, bots){
    if(err){
        return console.error('load bot err: ' + err);
    }
    bots.forEach(function(item){
        clients[item._id] = botManager.getBot(item._id);
    });
})

var _getBot = function(botId) {
    if (clients[botId]) return clients[botId];
    return clients[botId] = botManager.getBot(botId);
}

var _addBot = function(botId){
    clients[botId] = botManager.getBot(botId);
    return clients[botId];
}

module.exports.getBot = _getBot;
module.exports.addBot = _addBot;

