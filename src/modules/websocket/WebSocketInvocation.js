function WebSocketInvocation(ctx){
    this.ctx = ctx;
}
WebSocketInvocation.prototype.setChannel = function(channel){
    this.channel = channel;
    return this;
};
WebSocketInvocation.prototype.setConns = function(conns){
    this.conns = conns;
    return this;
};
WebSocketInvocation.prototype.of = function(channel){
    this.setChannel(channel);
    return this;
};
WebSocketInvocation.prototype.in = function(room){
    var conns = this.ctx.rooms[room];
    this.setConns(conns);
    return this;
};
WebSocketInvocation.prototype.clients = function(){
    var me = this;
    return this.ctx.clients(me);
};
module.exports = WebSocketInvocation;