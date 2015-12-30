"use strict";
var context = require('../../context/context');
var typeRegistry = require('../../modules/common/models/TypeRegistry');
//var GroupType = typeRegistry.item('GroupType');
var bossTenantService = context.services.bossTenantService;

module.exports = function (router) {

    /**
     * Group routers
     */
    router.get('/filter', function*(){
        try{
            //var tenantId = this.query.tenantId;
            var tenants = yield bossTenantService.findTenantsAsync({});
            this.body = tenants;
            var mock = {tenants: [{
                name: '包三哥',
                type: 'p',
                lFlg: 'a'
            }, {
                name: '小小星星妹',
                type: 'p',
                lFlg: 'i'
            }
            ]};
        }catch(e){
            this.body = {error: e};
        }
    });

};