var app = require('./application');
require('./bot-manager');
var settings = require('vmark-settings');
var logger = require('./logging').logger;
var system = require('./system');
var application = require('./application');
var context = require('../.');
var redisClient = require('./redis-client');
redisClient('default');
redisClient('sub');
redisClient('pub');
require('../modules/system/wechatbot');

system.addMember('application', application);
system.startup();
system.on('up', function(){
    logger.info('system is up!!!');
});
system.on('down', function(){
    logger.info('system is down!!!');
});
