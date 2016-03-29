var Bus = require('./PlatformWechatOAuthBus');

var Factory = function(options){
    this.registry = {};
    this.options = options;
    //this.wechatLoader = config.wechatLoader;
    //this.wechatAtGetter = config.wechatAtGetter;
    //this.wechatAtSetter = config.wechatAtSetter;
};

Factory.prototype.get = function(wechatId){
    var bus = this.registry[wechatId];
    if(!bus){
        bus = this.registry[wechatId] = new Bus(this.options, wechatId);
    }
    return bus;
};

module.exports = Factory;
