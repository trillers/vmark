var BotManagerFactory = require('vk');
var rabbitmq = require('base-settings').rabbitmq;
var url = 'amqp://' + rabbitmq.username + ':' + rabbitmq.password + '@' + rabbitmq.host + ':' + rabbitmq.port + '/' + rabbitmq.vhost;
var open = require('amqplib').connect(url);
var botManagerPromise = BotManagerFactory.create(open);
var _exports = {};

botManagerPromise.then(function (botManager) {
    _exports.botManager = botManager;
});

module.exports = _exports;
