var sockjs = require('sockjs');
var http = require('http');
var logger = require('./logging').logger;
var url = require('url');
var queryString = require('querystring');
var wsConns = require('./wsConns');

module.exports = function(app){
    var echo = sockjs.createServer({ sockjs_url: 'http://cdn.jsdelivr.net/sockjs/1.0.1/sockjs.min.js' });
    echo.on('connection', function(conn) {
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
    });
    var server = http.createServer(app.callback());

    echo.installHandlers(server, {prefix:'/echo'});
    echo.installHandlers(server, {prefix:'/bot'});
    return server;
}

function getId(conn){
    var query = url.parse(conn.url).query;
    return queryString.parse(query).id;
}
