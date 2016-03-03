var schedule = require('node-schedule');
var rule = new schedule.RecurrenceRule();
var context = require('../context/context');
var Promise = require('bluebird');
var util = require('util');
var kv = context.kvs.redpacket;
var redis = context.redis.main;
redis.keysAsync = Promise.promisify(redis.keys);
var activityRedpacketService = context.services.activityRedpacketService;
var redpacketParticipantService = context.services.redpacketParticipantService;
var logger = context.logger;
var co = require('co');

rule.hour = 23;
schedule.scheduleJob(rule, function(){
    logger.info('sync activity job starting');
    co(function*(){
        var activityKeys = yield redis.keysAsync('rp:act:id:*');
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
                yield activityRedpacketService.syncById(activityIdArr[i], update);
                logger.info('success sync activity :' + activityIdArr[i] + ', update:' + util.inspect(update));
            //}
        }
        logger.info('sync activity job job end');
    }).catch(function(err){
        logger.error('sync activity job err:' + err);
    })
});

schedule.scheduleJob(rule, function(){
    logger.info('sync participant job starting');
    co(function*(){
        var participantKeys = yield redis.keysAsync('rp:ptcp:id:*');
        var participantIdArr = participantKeys.map(function(item){
            return item.substr(11);
        })
        for(var i = 0; i < participantIdArr.length; i++){
            var participant = yield kv.loadParticipantByIdAsync(participantIdArr[i]);
            var help_friends = yield kv.getHelpFriendsSetAsync(participantIdArr[i]);
            var update = {
                total_money: participant.total_money,
                help_friends: help_friends
            }
            yield redpacketParticipantService.syncById(participantIdArr[i], update);
            logger.info('success sync participant :' + participantIdArr[i] + ', update:' + util.inspect(update));
            //}
        }
        logger.info('sync participant job job end');
    }).catch(function(err){
        logger.error('sync participant job err:' + err);
    })
});
