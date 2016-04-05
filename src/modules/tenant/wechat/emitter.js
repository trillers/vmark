var WechatEmitter = require('../../../framework/WechatEmitter');
//var ContextDecorator = require('./common/ContextDecorator');

var wechatEmitter = new WechatEmitter();
//wechatEmitter.setContextDecorator(new ContextDecorator());

require('./handlers/messageHandler')(wechatEmitter);
require('./handlers/eventHandler')(wechatEmitter);
-
module.exports = wechatEmitter;