"use strict";
var SockJS = require('sockjs');
var riot = require('seedriot');
var base_Url = '/bot';
console.log(__page.user)
var orgId = __page.user.posts[0].org;
console.log(orgId)
var default_Url = '/bot?r=' + orgId;

function WebSocket(client){
    this.prefix = base_Url;
    this.ws = client;
    this.ready = false;
    this.receiveCache = [];
    this.sendCache = [];
}
WebSocket.prototype = Object.create(riot.observable({}));
WebSocket.prototype.send = function(data){
    if(!this.ready){
        this.sendCache.push(data);
        return;
    }
    this.ws.send(JSON.stringify(data));
};
WebSocket.prototype.onOpen = function(cb){
    var me = this;
    this.ws.onopen = function(){
        me.ready = true;
        me.receiveCache.forEach(function(msg){
            me._handleMsg(msg);
        });
        me.sendCache.forEach(function(msg){
            me._handleSend(msg);
        });
        me._listenServer();
        cb();
    };
};
WebSocket.prototype.subscribe = function(room, cb){
    this.on(room, cb);
};
WebSocket.prototype._handleSend = function(data){
    this.ws.send(JSON.stringify({
        socketId: this.id,
        prefix: this.prefix,
        data: data}));
};
WebSocket.prototype._broadcast = function(rooms, data){
    var currRoom = '';
    for(var i=0, len=rooms.length; i<len; i++){
        currRoom += '/' + rooms[i];
        this.trigger(currRoom, data);
    }
};
WebSocket.prototype._handleMsg = function(data){
    var rooms = this._parseChannel(data.channel);
    this._broadcast(rooms, data.data)
};
WebSocket.prototype._parseChannel = function(channel){
    var rooms = channel.split('/');
    rooms.splice(0, 1);
    return rooms;
};
WebSocket.prototype._listenServer = function(){
    var me = this;
    this.ws.onmessage = function(data){
        var json = JSON.parse(data.data);
        if(!me.ready){
            return me.receiveCache.push(json);
        }
        me._handleMsg(json);
    }
};
module.exports = new WebSocket(new SockJS(default_Url));