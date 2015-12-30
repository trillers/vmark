var webSocketFactory = require('../modules/websocket/WebSocket');
var ws = null;

module.exports = function(app){
    if(!app){
        return ws;
    }
    ws = webSocketFactory(null, app);
    return ws;
};
