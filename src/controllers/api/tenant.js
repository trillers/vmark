"use strict";
var typeRegistry = require('../../modules/common/models/TypeRegistry');
var MembershipType = typeRegistry.item('MembershipType');
var context = require('../../context/context');
var qrTypeRegistry = require('../../modules/wechatsite/qr/QrTypeRegistries').tenantQrTypeRegistry;
var qrType = qrTypeRegistry.getQrType('sdpp');
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
            let conditions = this.request.body;
            let filter = {
                conditions: conditions
            };
            let tenants = yield tenantOrgService.findTenantsAsync(filter);
            this.body = {tenants: tenants, error: null};
        }catch(e){
            this.body = {error: e};
        }
    });

    router.get('/sd/course/_:id', function*(){
        try{
            let courseId = this.params.id;
            let course = yield courseService.loadByIdAsync(courseId);
            this.body = {course: course, error: null};
        }catch(e){
            logger.error(e);
            this.body = {error: e};
        }
    });

    router.put('/sd/course/_:id', function*(){
        try{
            let courseId = this.params.id;
            let json = this.request.body.o;
            let intention = this.request.body.intention;
            json['updOn'] = new Date();
            if(intention === 'GoLiveOrSunset'){
                json['actionTime'] = new Date();
            }
            let course = yield courseService.updateByIdAsync(courseId, json);
            this.body = {course: course, error: null};
        }catch(e){
            logger.error(e);
            this.body = {error: e};
        }
    });

    router.post('/sd/course', function*(){
        try{
            let course = this.request.body;
            try{
                course.operator = this.session.auth.post.member;
            }catch (e){
                this.throw('have not enough info in session [field]=auth.post.member');
            }
            let coursePersisted = yield courseService.createAsync(course);
            this.body = {course: coursePersisted, error: null};
        }catch(e){
            logger.error(e);
            this.body = {error: e};
        }
    });

    router.put('/sd/course/_:id/goLive', function*(){
        try{
            let courseId = this.params.id;
            let json = this.request.body.o;
            json['updOn'] = new Date();

            let course = yield courseService.updateByIdAsync(courseId, json);
            this.body = {course: course, error: null};
        }catch(e){
            logger.error(e);
            this.body = {error: e};
        }
    });

    router.post('/sd/courses', function*(){
        try{
            let tenant = this.request.body.tenant;
            let params = {};
            params.conditions = this.request.body.filter || {};
            params.conditions['tenant'] = tenant;
            params.conditions['lFlg'] = 'a';
            params.sort = {
                crtOn: -1
            };
            let courses = yield courseService.findAsync(params);
            this.body = {courses: courses, error: null};
        }catch(e){
            logger.error(e);
            this.body = {error: e};
        }
    });

    router.get('/sd/catalog', function*(){
        try{
            let query = this.request.query;
            let params = {
                conditions: query,
                populate: [
                    {path: 'tenant'},
                    {path: 'product'},
                    {path: 'media'}
                ]
            };
            let catalogs = yield context.services.catalogService.findAsync(params);
            this.body = {catalogs: catalogs, error: null};
        }catch(e){
            logger.error(e);
            this.body = {error: e};
        }
    });

    router.get('/sd/catalog/_:id', function*(){
        try{
            let catalogId = this.params.id;
            let catalog = yield context.services.catalogService.loadFullInfoByIdAsync(catalogId);
            this.body = {catalog: catalog, error: null};
        }catch(e){
            logger.error(e);
            this.body = {error: e};
        }
    });

    router.put('/sd/catalog/_:id', function*(){
        try{
            let catalogId = this.params.id;
            let catalog = this.request.body.o;
            let catalogUpdated = yield context.services.catalogService.updateByIdAsync(catalogId, catalog);
            this.body = {catalog: catalogUpdated, error: null};
        }catch(e){
            logger.error(e);
            this.body = {error: e};
        }
    });

    router.post('/sd/catalog/poster', function*(){
        try{
            let product = this.request.body.product;
            let media = this.request.body.media;
            var poster = yield context.services.posterService.fetchAsync({product: product}, media.originalId, this.session.auth.user);
            if(poster){
                return this.body = {error: null, poster: poster}
            }
            else{
                return this.body = {error: 'failed to get poster'};
            }
        }catch(e){
            logger.error(e);
            this.body = {error: e};
        }
    });

    router.post('/sd/catalog', function*(){
        try{
            let catalog = this.request.body;
            let catalogPersisted = yield context.services.catalogService.createAsync(catalog);
            this.body = {courses: catalogPersisted, error: null};
        }catch(e){
            logger.error(e);
            this.body = {error: e};
        }
    });

    router.post('/sd/bespeak', function*(){
        try{
            let bespeak = this.request.body;
            yield context.services.bespeakService.createAsync({
                product: bespeak.product._id,
                media: bespeak.media,
                user: bespeak.user._id,
                telephone: bespeak.telephone
            });
            this.body = {error: null}
        }catch(e){
            logger.error(e);
            this.body = {error: e}
        }
    });

    router.get('/sd/bespeak', function*(){
        try{
            let query = this.request.query;
            let tenantId = query.tenant;
            delete query['tenant'];
            let params = {
                conditions: query
            };
            let bespeaks = yield context.services.bespeakService.findByTenantIdAsync(tenantId, params);
            this.body = {bespeaks: bespeaks, error: null};
        }catch(e){
            logger.error(e);
            this.body = {error: e};
        }
    });

    router.get('/sd/distributors/count', function*() {
        try {
            let tenantId = this.request.query.tenant;
            let count = yield context.services.membershipService.findCountByTenantIdAsync(tenantId);
            this.body = {error: null, count: count};
        }catch (e){
            logger.error(e);
            this.body = {error: e};
        }
    });

    router.get('/sd/distributors', function*(){
        try{
            let tenantId = this.request.query.tenant;
            let options = {
                tenantId: tenantId,
                page: {
                    no: this.request.query.no,
                    size: this.request.query.size
                },
                conditions: {
                    type: MembershipType.Distributor.value()
                },
                populates: [
                    {path:'user', model: 'TenantUser'},
                    {
                        path: 'upLine',
                        model: 'Membership',
                        populate: [{
                            path: 'user',
                            model: 'TenantUser'
                        },{
                            path: 'media',
                            model: 'WechatMedia'
                        }]
                    },
                    {path: 'media'}
                ]
            };
            let distributors = yield context.services.membershipService.findAsync(options);
            this.body = {distributors: distributors, error: null};
        } catch (e){
            logger.error(e);
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