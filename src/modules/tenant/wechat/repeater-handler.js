var emitter = require('../../system/wechatsite/wechatEmitter');
var handler = function(ctx, next) {
    emitter.relay(ctx);
    !ctx.body && (ctx.body = '');
};
module.exports = handler;