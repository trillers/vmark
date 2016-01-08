"use strict";
var context = require('../../context/context');
var typeRegistry = require('../../modules/common/models/TypeRegistry');
//var GroupType = typeRegistry.item('GroupType');
var adlinkService = context.services.adlinkService;

module.exports = function (router) {

    router.get('/_:id', function*(){
        try{
            var id = this.params.id;
            var adlink = yield adlinkService.loadByIdAsync(id);
            if(adlink){
                this.body = adlink;
            }
            else{
                this.body = {_id: id};
            }
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

    router.post('/', function*(){
        try{
            var json = this.request.body;
            var adlink = yield adlinkService.createAsync(json);
            this.body = adlink;
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

    router.put('/_:id', function*(){
        try{
            var id = this.params.id;
            var json = this.request.body;

            var adlink = yield adlinkService.updateByIdAsync(id, json);
            this.body = adlink;
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

    router.get('/tenant-:id', function*(){
        try{
            var tenantId = this.params.id;
            //var tenantId = 'MLeds'; //this.query.tenantId;
            //var auth = this.session && this.session.auth;
            //if(!auth){
            //    this.redirect('/login');
            //    return;
            //}
            //var tenantId = auth.tenantId;

            this.body = yield adlinkService.findTenantAdlinksAsync(tenantId);
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

};