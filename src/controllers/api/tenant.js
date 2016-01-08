"use strict";
var context = require('../../context/context');
var bossTenantService = context.services.bossTenantService;

module.exports = function (router) {

    router.get('/filter', function*(){
        try{
            this.body = yield bossTenantService.findTenantsAsync({});
        }catch(e){
            this.body = {error: e};
        }
    });

};