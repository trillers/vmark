var webSocketFactory = require('../modules/websocket/WebSocket');

module.exports = function(app){
    var ws = webSocketFactory(null, app);
    return ws;
};
