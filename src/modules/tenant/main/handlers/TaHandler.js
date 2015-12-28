var co = require('co');
var wechatApi = require('../../../wechat/common/api').api;

var CommandRegistry = require('../../../../framework/wechat/command-registry');
var registry = new CommandRegistry();
registry.addCommand('绑定微信号二维码', require('../commands/requestBindBotQrCodeCommand'));
registry.addCommand('绑定这个微信号', require('../commands/requestBindThisBotCommand'));
registry.addCommand('状态', require('../commands/viewingBotStatusCommand'));
registry.addCommand('启动', require('../commands/startBotCommand'));
registry.addCommand('停止', require('../commands/stopBotCommand'));
registry.addCommand('重启', require('../commands/restartBotCommand'));
registry.addCommand('同步联系人', require('../commands/syncContacts'));
registry.addCommand('同步群组', require('../commands/syncGroups'));

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