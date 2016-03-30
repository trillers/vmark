var keyHelper = require('./keyHelper');
var helper = require('../../../common/kvs/tenantHelper');

var otToOpenidKey = function(wechatId, ot){
    return keyHelper.userBaseKey(wechatId) +  ':oid:ot:' + ot;
};

var Kv = function(context){ this.context = context; };

var config = {
    keyName: 'tenant user open taken',
    valueName: 'tenant user openid',
    keyGenerator: otToOpenidKey
}
Kv.prototype.get = helper.generateGetter(config);

Kv.prototype.set = helper.generateSetter(config);

Kv.prototype.delete = helper.generateDeleter(config);


module.exports = Kv;