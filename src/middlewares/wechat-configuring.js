var settings = require('@private/vmark-settings');
var logger = require('../app/logging').logger;
var token = require('../modules/wechat/common/token');

var jsApiList = ['checkJsApi','chooseImage','previewImage','uploadImage','downloadImage','onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo','getNetworkType','startRecord','stopRecord','onVoiceRecordEnd','playVoice','pauseVoice','stopVoice','onVoicePlayEnd','uploadVoice','downloadVoice'];

var env = settings.env.NODE_ENV;
var debug = false;

var wechatConfiguring = function*(next) {
    var url = this.request.href;
    try {
        var jsConfig = yield token.getJc({url: url, jsApiList: jsApiList, debug: debug});
        this.state.__page.jc = jsConfig;
    }catch (err){
        logger.error('Fail to get jc: ' + err);
    }
    yield next;
};

module.exports = wechatConfiguring;