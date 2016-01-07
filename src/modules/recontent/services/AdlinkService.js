var cbUtil = require('../../../framework/callback');
//var OrgType = require('../../common/models/TypeRegistry').item('OrgType');

var Service = function(context){
    this.context = context;
};

Service.prototype.create = function(json, callback){
    var Adlink = this.context.models.Adlink;
    var adlink = new Adlink(json);

    adlink.save(function (err, result, affected) {
        cbUtil.logCallback(
            err,
            'Fail to save adlink: ' + err,
            'Succeed to save adlink');

        cbUtil.handleAffected(function(err, doc){
            var obj = !err && doc && doc.toObject({virtuals: true});
            if(callback) callback(err, obj);
        }, err, result, affected);
    });
};


Service.prototype.updateById = function(id, update, callback){
    var Adlink = this.context.models.Adlink;
    Adlink.findByIdAndUpdate(id, update, {new: true}, function (err, result) {
        cbUtil.logCallback(
            err,
            'Fail to update adlink: ' + err,
            'Succeed to update adlink');

        cbUtil.handleSingleValue(function(err, doc){
            var obj = !err && doc && doc.toObject({virtuals: true});
            if(callback) callback(err, obj);
        }, err, result);
    });
};

Service.prototype.loadById = function(id, callback){
    var Adlink = this.context.models.Adlink;
    Adlink.findById(id, function (err, doc) {
        cbUtil.logCallback(
            err,
            'Fail to load adlink by id ' +id+': ' + err,
            'Succeed to load adlink by id ' +id);

        cbUtil.handleSingleValue(function(err, doc){
            var obj = !err && doc && doc.toObject({virtuals: true});
            if(callback) callback(err, obj);
        }, err, doc);
    });
};

Service.prototype.findTenantAdlinks = function(tenantId, callback){
    var params = {
        conditions: {
            org: tenantId
        },
        sort: {lFlg: 1, crtOn: -1}
    };
    this.filter(params, callback);
};

Service.prototype.filter = function(params, callback){
    var logger = this.context.logger;
    var Adlink = this.context.models.Adlink;
    var query = Adlink.find();

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
            logger.error('Fail to filter tenant adlinks: ' + err);
            if(callback) callback(err);
            return;
        }
        if(callback) callback(null, docs);
    });
};

module.exports = Service;