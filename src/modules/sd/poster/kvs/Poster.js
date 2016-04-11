var helper = require('../../../common/kvs/helper');

var idToObjKey = function(id){
    return 'sd:poster:o:id:' + id;
};

var Kv = function(context){
    this.context = context;
};

var config = {
    keyName: 'poster id',
    valueName: 'poster object',
    keyGenerator: idToObjKey
};

Kv.prototype.loadById = helper.generateLoader(config);

Kv.prototype.saveById = helper.generateSaver(config);

Kv.prototype.delById = helper.generateDeleter(config);

module.exports = Kv;