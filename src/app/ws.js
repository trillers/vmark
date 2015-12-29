var webSocketFactory = require('./WebSocket');

module.exports = function(app){
    var ws = webSocketFactory(null, app);
    return ws;
};
