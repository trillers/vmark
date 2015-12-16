var IntentionStatus = require('../../common/models/TypeRegistry').item('IntentionStatus');
var WechatBotStatus = require('../../common/models/TypeRegistry').item('WechatBotStatus');

var WechatBotManager = function(context, options){
    this.timerId = null;
    this.context = context;
    this.api = this.context.botManager;
    this.options = options || {
            interval: 200000
        };
};

WechatBotManager.prototype.start = function(){
    if(!this.timerId){
        this._init();
        setTimeout(this._routines.bind(this), 2000);
        this.timerId = setInterval(this._routines.bind(this), this.options.interval);
    }
    else{
        console.warn('started already! duplicated call');
    }
};

WechatBotManager.prototype.stop = function(){
    if(this.timerId){
        clearInterval(this.timerId);
        this.timerId = null;
        this._uninit();
    }
    else{
        console.warn('stopped already! duplicated call');
    }
};

WechatBotManager.prototype.bindBot = function(botInfo){
    this._initBot(botInfo);
};

WechatBotManager.prototype.getWechatBot = function(id){
    return this.context.botManager.getBot(id);
};

WechatBotManager.prototype._initBot = function(botInfo){
    var botManager = this.context.botManager;
    var logger = this.context.logger;
    var bot = botManager.getBot(botInfo.customId);

    bot.onClientActionIn(function(err, data){
        if(err){
            logger.error('bot on action in err: ' + err);
            return;
        }
        switch(data.Action){
            case 'need-login':
                require('./handlers/needLoginHandler')(data);
                break;
        }
    })

    bot.onClientActionFeedback(function(err, data){
        if(err){
            logger.error('bot on action feedback in err: ' + err);
            return;
        }
        switch(data.NewStatus){
            case 'aborted':
                bot.start();
                break;
        }
    })

    bot.onAgentStatusChange(function(err, data){
        if(err){
            logger.error('bot onAgentStatusChange err: ' + err);
            return;
        }
        require('./handlers/statusChangeHandler')(data);
    })
};

WechatBotManager.prototype._init = function(){
    var logger = this.context.logger;
    logger.info('initiating...');
    var orgMediaService = this.context.services.orgMediaService;
    var me = this;
    orgMediaService.loadAllBot(function (err, orgMedias) {
        if (err) {
            return console.error('load bot err: ' + err);
        }
        logger.debug('the count of all active bots: ' + orgMedias.length);
        orgMedias.forEach(function (orgMedia) {
            if (orgMedia.media && orgMedia.media.customId) {
                me._initBot(orgMedia.media);
            }
        });
    })
};

WechatBotManager.prototype._uninit = function(){
    console.info('un-initiating...');
    //TODO
};


/**
 * TODO: start or stop bot in ordr to revise bot status
 * @private
 */
WechatBotManager.prototype._routines = function(){
    var logger = this.context.logger;
    logger.debug('checking status...');
    var orgMediaService = this.context.services.orgMediaService;
    var wechatMediaService = this.context.services.wechatMediaService;
    var botManager = this.context.botManager;
    orgMediaService.loadAllBot(function (err, orgMedias) {
        if (err) {
            return logger.error('load bot err: ' + err);
        }
        orgMedias.forEach(function (orgMedia) {
            var botInfo = orgMedia.media;
            if(orgMedia.intentionStatus !== botInfo.status){
                var bot = botManager.getBot(botInfo.customId);
                if(orgMedia.intentionStatus === IntentionStatus.Logged.value() &&
                    (botInfo.status === WechatBotStatus.Exceptional.value() ||
                    botInfo.status === WechatBotStatus.Exited.value() ||
                    botInfo.status === WechatBotStatus.Aborted.value())){
                    var options = {
                        intention: 'login',
                        mode: 'untrusted',
                        nickname: botInfo.name,
                        sex: botInfo.sex
                    };
                    logger.debug('Start bot ' + botInfo.customId + ': ' + JSON.stringify(options));
                    bot.start(options);
                    wechatMediaService.updateStatusById(botInfo._id, WechatBotStatus.Starting.value());
                }else if(orgMedia.intentionStatus === IntentionStatus.Exited.value()){
                    logger.debug('Stop bot ' + botInfo.customId);
                    bot.stop();
                }
            }
        });
    })
};

module.exports = WechatBotManager;