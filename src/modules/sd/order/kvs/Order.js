var helper = require('../../../common/kvs/tenantHelper');

var idToObjKey = function(wechatId, id){
    return 'sd:order:' + wechatId + ':id:' + id;
};

var Kv = function(context){
    this.context = context;
};

var config = {
    keyName: 'order id',
    valueName: 'order object',
    keyGenerator: idToObjKey
};

Kv.prototype.loadById = helper.generateLoader(config);

Kv.prototype.saveById = helper.generateSaver(config);

Kv.prototype.delById = helper.generateDeleter(config);

module.exports = Kv;