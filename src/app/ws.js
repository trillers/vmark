var webSocketFactory = require('../modules/websocket/WebSocket');

module.exports = function(app){
    var ws = webSocketFactory(null, app);
    setTimeout(function(){
        ws.of('/bot').clients().emit({test: '111111'})
    }, 3000)
    return ws;
};
