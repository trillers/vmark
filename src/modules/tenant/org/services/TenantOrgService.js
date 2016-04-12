var util = require('util');
var cbUtil = require('../../../../framework/callback');
var PartyType = require('../../../common/models/TypeRegistry').item('PartyType');
var OrgService = require('./../../../org/services/OrgService');

var Service = function(context){
    this.context = context;
};

util.inherits(Service, OrgService);

Service.prototype.createPersonalTenant = function(orgJson, callback){
    orgJson.type = PartyType.Personal.value();
    this.createTenant(orgJson, callback);
};

Service.prototype.createOrganizationalTenant = function(orgJson, callback){
    orgJson.type = PartyType.Organizational.value();
    this.createTenant(orgJson, callback);
};

Service.prototype.loadByWechatId = function(wechatId, callback){
    var me = this;
    me.context.services.tenantWechatSiteService.loadTenantWechatSiteByOriginalId(wechatId, function(err, media){
        if(err){
            return callback(err);
        }
        if(typeof media.org === 'object'){
            return callback(null, media.org)
        }
        else if(typeof media.org === 'string'){
            me.loadById(media.org, callback);
        }
        else{
            callback(new Error('Failed to load tenant by wechat id, media has no org field'));
        }
    })
};

Service.prototype.createTenant = function(orgJson, callback){
    orgJson.administrative = false;
    this.create(orgJson, callback);
};

Service.prototype.findTenants = function(params, callback) {
    var logger = this.context.logger;
    var Org = this.context.models.Org;
    var query = Org.find();

    params.sort = {lFlg: 1, crtOn: -1};
    params.page = null;
    params.populations = null;
    if(params.conditions){
        params.conditions.administrative = false;
    }else{
        params.conditions = {administrative: false};
    }

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