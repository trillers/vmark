var WechatBotManager = function(context, options){
    this.timerId = null;
    this.context = context;
    this.options = options || {
            interval: 100000
        };
};

WechatBotManager.prototype.start = function(){
    if(!this.timerId){
        this._init();
        this.timerId = setInterval(this._routines, this.options.interval);
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

WechatBotManager.prototype.registerBot = function(botInfo){
    this._initBot(botInfo);
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
        //TODO
    })

    bot.onClientActionFeedback(function(err, data){
        if(err){
            logger.error('bot on action feedback in err: ' + err);
            return;
        }
        //TODO
    })

};

WechatBotManager.prototype._init = function(){
    console.info('initiating...');
    var orgMediaService = this.context.services.orgMediaService;
    orgMediaService.loadAllBot(function (err, bots) {
        if (err) {
            return console.error('load bot err: ' + err);
        }
        bots.forEach(function (item) {
            if (item.media && item.media.customId) {
                this._initBot(item.media);
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
    console.info('checking status');
};

module.exports = WechatBotManager;