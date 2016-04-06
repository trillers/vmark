var repeaterCache = require('../repeater-cache');
var logger = require('../../../../app/logging').logger;

var center = function* (next) {
    var repeater = yield repeaterCache.get(this.wechatId);
    if(!repeater){
        logger.error('Fail to get or load wechat ' + this.wechatId + ' repeater');
        return;
    }
    console.info("************");
    console.info(repeater);
    yield repeater(this, next);
};

module.exports = center;