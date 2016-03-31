var WechatTokenMulti = require('../../wechat/kvs/WechatTokenMulti');

var storeCreator = function(context){
    return {
        create: function(wechatId){
            return new WechatTokenMulti(context, wechatId);
        }
    }
};

module.exports = storeCreator;