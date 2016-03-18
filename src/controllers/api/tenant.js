"use strict";
var context = require('../../context/context');
var tenantOrgService = context.services.tenantOrgService;
var courseService = context.services.courseService;
var logger = context.logger;

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
            yield tenantOrgService.updateByIdAsync(this.params.id, this.request.body);
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

    router.post('/sd/course', function*(){
        try{
            let course = this.request.body;
            course.operator = this.session.auth.post.member;
            let coursePersisted = yield courseService.createAsync(course);
            this.body = {course: coursePersisted, error: null};
        }catch(e){
            this.body = {error: e};
        }
    });

    router.post('/sd/courses', function*(){
        try{
            let tenant = this.request.body.tenant;
            let params = {
                conditions: this.request.body.filter
            };
            let coursePersisted = yield courseService.findAsync(params);
            this.body = {course: coursePersisted, error: null};
        }catch(e){
            this.body = {error: e};
        }
    });

    router.post('/add-wechatsite', function*(){
        try{
            let json = this.request.body;
            let tenantWechatSiteService = context.services.tenantWechatSiteService;
            let wechatSite = yield tenantWechatSiteService.createTenantWechatSiteAsync(json);
            this.body = {wechatSite: wechatSite, error: null};
        }catch(e){
            logger.error('add wechat site err: ' + e);
            this.body = {error: 'failed add wechat site'};
        }
    });

    router.get('/wechatsite/loadAll', function*(){
        var logger = context.logger;
        try {
            var tenantId = this.request.query.tenant;
            let tenantWechatSiteService = context.services.tenantWechatSiteService;
            let wechatSites = yield tenantWechatSiteService.loadAllTenantWechatSiteAsync(tenantId);
            this.body = wechatSites;
        }catch(e){
            logger.error('load tenant wechat site err: ' + e);
            this.body = [];
        }
    })

    router.get('/wechatsite/load', function*(){
        var logger = context.logger;
        var id = this.request.query.id;

        try {
            let tenantWechatSiteService = context.services.tenantWechatSiteService;
            let wechatSite = yield tenantWechatSiteService.findByIdAsync(id);
            this.body = {wechatSite: wechatSite, error: null};
        }catch(e){
            logger.error('load tenant wechat site by id: ' + id + ' err: ' + e);
            this.body = {error: 'failed load wechat site'};
        }
    })

    router.put('/wechatsite/_:id', function*(){
        try{
            if(this.request.body.id){
                delete this.request.body['id'];
            }
            let tenantWechatSiteService = context.services.tenantWechatSiteService;

            let wechatSiteUpdated = yield tenantWechatSiteService.updateByIdAsync(this.params.id, this.request.body);
            this.body = {error: null};
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });
};