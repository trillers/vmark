var co = require('co');
//var cbUtil = require('../../../../framework/callback');
//var typeRegistry = require('../../../common/models/TypeRegistry');
//var OrgMemberRole = typeRegistry.item('OrgMemberRole');

var Service = function(context){
    this.context = context;
};

Service.prototype.findTenants = function(params, callback) {
    var logger = this.context.logger;
    var Org = this.context.models.Org;
    var query = Org.find();

    params.sort = {lFlg: 1, crtOn: -1};
    params.page = null;
    params.populations = null;
    params.conditions = {administrative: false};

    if (params.options) {
        query.setOptions(params.options);
    }

    if (params.sort) {
        query.sort(params.sort);
    }

    if (params.page) {
        var skip = (params.page.no - 1) * params.page.size;
        var limit = params.page.size;
        if (skip) query.skip(skip);
        if (limit) query.limit(limit);
    }

    if (params.conditions) {
        query.find(params.conditions);
    }

    if (params.populations) {
        params.populate.forEach(function(item){
            query.populate(item);
        })
    }
    query.lean(true);
    query.exec(function (err, docs) {
        if (err) {
            logger.error('Fail to filter tenants: ' + err);
            if(callback) callback(err);
            return;
        }

        if(callback) callback(null, docs);
    });
};



module.exports = Service;