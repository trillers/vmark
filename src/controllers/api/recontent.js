"use strict";
var context = require('../../context/context');
var typeRegistry = require('../../modules/common/models/TypeRegistry');
//var GroupType = typeRegistry.item('GroupType');
var recontentService = context.services.recontentService;

module.exports = function (router) {

    router.get('/_:id', function*(){
        try{
            var id = this.params.id;
            var adlink = yield recontentService.loadByIdAsync(id);
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
            var adlink = yield recontentService.createAsync(json);
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

            var adlink = yield recontentService.updateByIdAsync(id, json);
            this.body = adlink;
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

    router.get('/tenant-:id', function*(){
        try{
            var tenantId = this.params.id;
            this.body = yield recontentService.findTenantRecontentsAsync(tenantId);
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

};