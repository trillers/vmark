function WebSocketClient(id, conn, server){
    this.id = id;
    this.ctx = server;
    this.client = conn;
}

WebSocketClient.prototype.emit = function(data){
    var str = data;
    if(typeof data === 'object'){
        str = JSON.stringify(data);
    }
    this.client.write(str);
};

/**
 * Allow a socket join a room
 * @param room
 */
WebSocketClient.prototype.join = function(room){
    var me = this;
    var ctx = this.ctx;
    if(!ctx.rooms[room]){
        ctx.rooms[room] = [];
    }
    ctx.rooms[room].push(me.id);
};

/**
 * Leave a room
 * @param room
 */
WebSocketClient.prototype.leave = function(room){
    var me = this;
    var ctx = this.ctx;
    if(ctx.rooms[room]){
        if(ctx.rooms[room].indexOf(me.id)){
            if(ctx.rooms[room].length === 1){
                delete ctx.rooms[room]
            }else{
                ctx.rooms[room].splice(ctx.rooms[room].indexOf(me.id), 1);
            }
        }
    }
};

/**
 * A list of strings identifying the rooms this socket is in.
 * arr <WebSocketClient>
 */
WebSocketClient.prototype.rooms = function(){
    var ctx = this.ctx;
    var me = this;
    var arr = [];
    for(var name in ctx.rooms){
        var room = ctx.rooms[name];
        if(room.indexOf(me.id)>=0){
            arr.push(name);
        }
    }
    return arr;
};

var WebSocketClientContainer = function(pathname, arr){
    if(arr && !Array.isArray(arr)){
        throw new Error('WebSocketClientContainer accept Array only.');
    }
    this.pathname = pathname;
    this.sockets = arr;
};

WebSocketClientContainer.prototype.emit = function(data){
    var me = this;
    if(this.sockets && this.sockets.length>0){
        this.sockets.forEach(function(socket){
            socket.emit({
                channel: me.pathname,
                data: data
            });
        })
    }
};

module.exports = WebSocketClient;
module.exports.WebSocketClientContainer = WebSocketClientContainer;