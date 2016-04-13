var co = require('co');
var wechatApi = require('../../../wechat/common/api').api;

var CommandRegistry = require('../../../../framework/wechat/command-registry');
var registry = new CommandRegistry();

module.exports = function(emitter){
    emitter.to(function(event, context){
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