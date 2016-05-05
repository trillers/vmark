var keyHelper = require('./keyHelper');
var helper = require('../../../common/kvs/tenantHelper');

var openidToIdKey = function(wechatId, openid){
    return keyHelper.userBaseKey(wechatId) +  ':id:oid:' + openid;
};

var Kv = function(context){ this.context = context; };

var config = {
    keyName: 'tenant user openid',
    valueName: 'tenant user id',
    keyGenerator: openidToIdKey
}
Kv.prototype.get = helper.generateGetter(config);

Kv.prototype.set = helper.generateSetter(config);

Kv.prototype.delete = helper.generateDeleter(config);


module.exports = Kv;
