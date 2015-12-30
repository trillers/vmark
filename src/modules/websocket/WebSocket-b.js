var sockjs = require('sockjs');
var http = require('http');
var url = require('url');
var queryString = require('querystring');
var context = require('../context').context;
var wsConns = require('../../app/wsConns');

module.exports = function(app){
    var socketServer = sockjs.createServer({ sockjs_url: 'http://cdn.jsdelivr.net/sockjs/1.0.1/sockjs.min.js' });
    socketServer.on('connection', function(conn) {
        if(conn.prefix === '/echo'){
            var id = getId(conn);
            wsConns[id] = conn;

            conn.on('data', function(message) {
                console.error(message);
                var json = JSON.parse(message);
                if(json.method === 'connect'){
                    wsConns[json.prefix] = conn;
                }
            });
            conn.on('close', function() {
                var id = getId(this);
                delete wsConns[id];
                console.error('connection closed');
            });
            return;
        }
        if(conn.prefix === '/bot'){
            //save connection
            conn.on('data', function(message){

            });
            conn.on('close', function(){
                //delete connection
            });
        }
    });
    var server = http.createServer(app.callback());

    socketServer.installHandlers(server, {prefix:'/echo'});
    socketServer.installHandlers(server, {prefix:'/bot'});
    socketServer.server = server;

    return socketServer;
};

function getId(conn){
    var query = url.parse(conn.url).query;
    return queryString.parse(query).id;
}
