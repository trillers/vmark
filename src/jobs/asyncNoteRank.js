var schedule = require('node-schedule');
var rule = new schedule.RecurrenceRule();
var context = require('../context/context');
var rankKv = context.kvs.rankAction;
var noteService = context.services.noteService;
var logger = context.logger;
var co = require('co');

rule.second = [0, 30];
var j = schedule.scheduleJob(rule, function(){
    logger.info('async note rank job starting');
    co(function*(){
        var noteArr = yield rankKv.getRankChangedSetAsync();
        for(var i = 0; i < noteArr.length; i++){
            var noteId = noteArr[i];
            var rank = yield rankKv.getNoteRankAsync(noteId);
            yield noteService.updateByIdAsync(noteId, {rank: rank});
        }
        yield rankKv.delRankChangedSetAsync();
        logger.info('async note rank job end');
    }).catch(function(err){
        logger.error('async note rank job err:' + err);
    })
});
