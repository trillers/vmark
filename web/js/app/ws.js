"use strict";
var SockJS = require('sockjs');
console.log(new SockJS('/bot'));
var riot = require('seedriot');

var default_Url = '/bot';

function WebSocket(client){
    this.ws = client;
    this.ready = false;
    this.cache = [];
    this.emitter = riot.observable({});
}
WebSocket.prototype.onOpen = function(cb){
    var me = this;
    this.ws.onopen = function(){
        me.ready = true;
        me.cache.forEach(function(msg){
            me.handleMsg(msg);
        });
        me.listenServer();
        me.ws.send(JSON.stringify({method: 'connect',prefix: '/bot'}));
        cb();
    };
};
WebSocket.prototype.broadcast = function(rooms, data){
    var currRoom = '';
    for(var i=0, len=rooms.length; i<len; i++){
        currRoom += '/' + rooms[i];
        this.emitter.trigger(currRoom, data);
    }
};
WebSocket.prototype.handleMsg = function(data){
    var rooms = this.parseChannel(data.channel);
    this.broadcast(rooms, data.data)
}
WebSocket.prototype.parseChannel = function(channel){
    var rooms = channel.split('/');
    rooms.splice(0, 1);
    return rooms;
};
WebSocket.prototype.subscribe = function(room, cb){
    this.emitter.on(room, cb);
};
WebSocket.prototype.listenServer = function(){
    var me = this;
    this.ws.onmessage = function(data){
        var json = JSON.parse(data.data);
        if(!me.ready){
            return me.cache.push(json);
        }
        me.handleMsg(json);
    }
};
module.exports = new WebSocket(new SockJS(default_Url));