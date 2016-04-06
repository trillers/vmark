
module.exports = function(emitter){
    emitter.message(function(event, ctx){
        console.warn(ctx.weixin);
        console.warn(ctx.wechatId);
    });
};