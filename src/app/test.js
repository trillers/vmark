var server = require('http').createServer();
server.listen(3000);
var ws = require('./WebSocket')(server);
ws.onMessage(function(data){
    console.log('~~~')
    console.log(data);
});

