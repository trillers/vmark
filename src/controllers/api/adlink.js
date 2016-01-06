"use strict";
var context = require('../../context/context');
var typeRegistry = require('../../modules/common/models/TypeRegistry');
//var GroupType = typeRegistry.item('GroupType');
var adlinkService = context.services.adlinkService;

module.exports = function (router) {

    router.get('/filter', function*(){
        try{

            var tenantId = 'MLeds'; //this.query.tenantId;
            var auth = this.session && this.session.auth;
            if(!auth){
                this.redirect('/login');
                return;
            }

            var tenantId = auth.tenantId;
            var adlinks = yield adlinkService.findTenantAdlinksAsync(tenantId);
            //var adlinks = [{
            //    name: '寒假提高班',
            //    Adwords: '新东方北京提高',
            //    AdUrl: 'http://bj.xdf.cn',
            //    layout: 'bottom',
            //    lFlg: 'a'
            //}, {
            //    name: '寒假培优班',
            //    Adwords: '新东方北京培优',
            //    AdUrl: 'http://bj.xdf.cn',
            //    layout: 'bottom',
            //    lFlg: 'a'
            //}
            //];
            this.body = adlinks;
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
};