var context = require('../../../context/context');

module.exports = function storeCreator(wechatId){

    var kv = context.kvs.tenantWechatToken;

    return {
        getAccessToken: function(callback){
            kv.getAccessToken(wechatId, callback);
        },
        saveAccessToken: function(json, callback){
            kv.saveAccessToken(wechatId, json, callback);
        },
        getTicketToken: function(callback){
            kv.getTicketToken(wechatId, callback);
        },
        saveTicketToken: function(json, callback){
            kv.saveTicketToken(wechatId, json, callback);
        }
    }
};