var schedule = require('node-schedule');
var rule = new schedule.RecurrenceRule();
var context = require('../context/context');
var Promise = require('bluebird');
var util = require('util');
var kv = context.kvs.power;
var redis = context.redis.main;
redis.keysAsync = Promise.promisify(redis.keys);
var powerActivityService = context.services.powerActivityService;
var powerParticipantService = context.services.powerParticipantService;
var logger = context.logger;
var co = require('co');

rule.hour = 4;
schedule.scheduleJob(rule, function(){
    logger.info('sync power activity job starting');
    co(function*(){
        var activityKeys = yield redis.keysAsync('pw:act:id:*');
        var activityIdArr = activityKeys.map(function(item){
            return item.substr(10);
        })
        for(var i = 0; i < activityIdArr.length; i++){
            var activity = yield kv.loadActivityByIdAsync(activityIdArr[i]);
            //var today = new Date();
            //var active = today >= new Date(activity.startTime) && today <= new Date(activity.endTime);
            //if(active && activity.lFlg === 'a') {
                var update = {
                    views: activity.views,
                    participants_count: activity.participants_count
                }
                yield powerActivityService.syncById(activityIdArr[i], update);
                logger.info('success sync power activity :' + activityIdArr[i] + ', update:' + util.inspect(update));
            //}
        }
        logger.info('sync activity job job end');
    }).catch(function(err){
        logger.error('sync power activity job err:' + err);
    })
});

schedule.scheduleJob(rule, function(){
    logger.info('sync power participant job starting');
    co(function*(){
        var participantKeys = yield redis.keysAsync('pw:ptcp:id:*');
        var participantIdArr = participantKeys.map(function(item){
            return item.substr(11);
        })
        for(var i = 0; i < participantIdArr.length; i++){
            var participant = yield kv.loadParticipantByIdAsync(participantIdArr[i]);
            var help_friends = yield kv.getHelpFriendsSetAsync(participantIdArr[i]);
            var update = {
                total_power: participant.total_power,
                help_friends: help_friends
            }
            yield powerParticipantService.syncById(participantIdArr[i], update);
            logger.info('success sync power participant :' + participantIdArr[i] + ', update:' + util.inspect(update));
            //}
        }
        logger.info('sync power participant job job end');
    }).catch(function(err){
        logger.error('sync power participant job err:' + err);
    })
});
