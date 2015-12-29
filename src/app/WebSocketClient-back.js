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

WebSocketClient.prototype.join = function(room){
    var channels = room.split('/');
    var me = this;
    var ctx = this.ctx;
    channels.splice(0, 1);
    var currChannel = '';
    for(var i=0, len=channels.length; i<len; i++){
        var channel = channels[i];
        currChannel+='/'+channel;
        if(!(currChannel in ctx.rooms)){
            ctx.rooms[currChannel] = [me.id];
        }
        if(ctx.rooms[currChannel].indexOf(me.id)<0){
            ctx.rooms[currChannel].push(me.id);
        }
    }
};

WebSocketClient.prototype.leave = function(){
    var ctx = this.ctx;
    var me = this;
    var nodes = sort();
    for(var i=0, len=nodes.length; i<len; i++){
        var room = nodes[i];
        var childs = ctx.rooms[room];
        if(childs && childs.length && childs.indexOf(me.id)>=0){
            if(childs.length === 1){
                delete ctx.rooms[room];
            }
        }
    }
    function sort(){
        var rooms = me.rooms();
        rooms.forEach(function(c, i, arr){
            if(i === arr.length-1){
                return arr;
            }
            if(c.length>arr[i+1].length){
                var tmp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = tmp;
            }
        });
        return rooms;
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