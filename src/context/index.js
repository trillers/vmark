var AllReady = require('../framework/allready');
var context = require('./context');
//var botManangerPromise = require('../app/bot-manager');
var redisMain = require('../app/redis-client')();
var mongooseMain = require('../app/mongoose');

var ar = new AllReady();
ar.add('redis', ar.redis(redisMain));
ar.add('mongoose', ar.mongoose(mongooseMain));
//ar.add('botManager', botManangerPromise,
//    function (promise) {
//        promise.then(function (botManager) {
//            ar.up('botManager');
//            context.botManager = botManager;
//        });
//    },
//    function (){}
//);

context.logger = require('../app/logging').logger;
context.redis.main = redisMain;
context.mongoose.main = mongooseMain;
context.domainBuilder.main = require('../framework/model/DomainBuilder');
ar.ready(function(){
    require('../modules');
    require('../jobs/syncPowerActivity');
    //context.wechatBotManager.start();
});

ar.context = context;
module.exports = ar;