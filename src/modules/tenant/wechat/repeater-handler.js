var emitter = require('./emitter');
var handler = function(ctx, next) {
    console.log("emitter is emited..........");
    emitter.relay(ctx);
    !ctx.body && (ctx.body = '');
};
module.exports = handler;