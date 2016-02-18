var BotManagerFactory = require('vk');
var rabbitmq = require(' @private/base-settings').rabbitmq;
var logger = require('./logging').logger;
var url = 'amqp://' + rabbitmq.username + ':' + rabbitmq.password + '@' + rabbitmq.host + ':' + rabbitmq.port + '/' + rabbitmq.vhost;
var open = require('amqplib').connect(url);
open.then(function(conn){
    logger.info('RabbitMQ client is connected to ' + url);
    return conn;
});
var botManagerPromise = BotManagerFactory.create(open);
module.exports = botManagerPromise;
