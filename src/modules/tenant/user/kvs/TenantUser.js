var keyHelper = require('./keyHelper');
var helper = require('../../../common/kvs/tenantHelper');

var idToObjKey = function(wechatId, id){
    return keyHelper.userBaseKey(wechatId) +  ':o:id:' + id;
};

var Kv = function(context){ this.context = context; };

var config = {
    keyName: 'tenant user id',
    valueName: 'tenant user object',
    keyGenerator: idToObjKey
}
Kv.prototype.loadById = helper.generateLoader(config);

Kv.prototype.saveById = helper.generateSaver(config);

Kv.prototype.deleteById = helper.generateDeleter(config);

module.exports = Kv;