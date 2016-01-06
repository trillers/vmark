var QrTypeRegistry = require('./QrTypeRegistry');
var qrRegistry = new QrTypeRegistry();

var testType = qrRegistry.newType('test');
testType.onAccess(function(){

});
testType.onExpire(function(){

});

module.exports = qrRegistry;