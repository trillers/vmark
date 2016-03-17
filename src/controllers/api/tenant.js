"use strict";
var context = require('../../context/context');
var tenantOrgService = context.services.tenantOrgService;

module.exports = function (router) {

    router.get('/_:id', function*(){
        try{
            let tenant = yield tenantOrgService.loadByIdAsync(this.params.id);
            this.body = {tenant: tenant, error: null};
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

    router.put('/_:id', function*(){
        try{
            if(this.request.body.id){
                delete this.request.body['id'];
            }
            let tenantUpdated = yield tenantOrgService.updateByIdAsync(this.params.id, this.request.body);
            console.log(tenantUpdated);
            this.body = {error: null};
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

    router.post('/filter', function*(){
        try{
            let filter = {
                conditions: this.request.body
            };
            let tenants = yield tenantOrgService.findTenantsAsync(filter);
            this.body = {tenants: tenants, error: null};
        }catch(e){
            this.body = {error: e};
        }
    });

    router.post('/add-wechatsite', function*(){
        try{
            let filter = {
                conditions: this.request.body
            };
            let tenants = yield tenantOrgService.findTenantsAsync(filter);
            this.body = {tenants: tenants, error: null};
        }catch(e){
            this.body = {error: e};
        }
    });

};