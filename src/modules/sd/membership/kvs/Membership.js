var helper = require('../../../common/kvs/helper');

var idToObjKey = function(id){
    return 'sd:m:o:id:' + id;
};

var Kv = function(context){
    this.context = context;
};

var config = {
    keyName: 'membership id',
    valueName: 'membership object',
    keyGenerator: idToObjKey
};

Kv.prototype.loadById = helper.generateLoader(config);

Kv.prototype.saveById = helper.generateSaver(config);

Kv.prototype.delById = helper.generateDeleter(config);

module.exports = Kv;