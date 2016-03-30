var keyHelper = require('./keyHelper');
var helper = require('../../../common/kvs/tenantHelper');

var atToOpenidKey = function(wechatId, at){
    return keyHelper.userBaseKey(wechatId) +  ':oid:at:' + at;
};

var Kv = function(context){ this.context = context; };

var config = {
    keyName: 'tenant user agent token',
    valueName: 'tenant user openid',
    keyGenerator: atToOpenidKey
}
Kv.prototype.get = helper.generateGetter(config);

Kv.prototype.set = helper.generateSetter(config);

Kv.prototype.delete = helper.generateDeleter(config);


module.exports = Kv;