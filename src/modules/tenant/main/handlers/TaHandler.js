var co = require('co');
var wechatApi = require('../../../wechat/common/api').api;

var CommandRegistry = require('../../../../framework/wechat/command-registry');
var registry = new CommandRegistry();
registry.addCommand('绑定微信号二维码', require('../commands/requestBindBotQrCodeCommand'));

module.exports = function(emitter){
    emitter.ta(function(event, context){
        co(function*(){
            var handler = registry.extractCommandFromContext(context);
            if(handler){
                handler();
            }
            else{

            }
        });
    });
};