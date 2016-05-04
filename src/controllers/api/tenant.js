"use strict";
var _ = require('underscore');
var typeRegistry = require('../../modules/common/models/TypeRegistry');
var MembershipType = typeRegistry.item('MembershipType');
var OrderStatus = typeRegistry.item('OrderStatus');
var context = require('../../context/context');
var qrTypeRegistry = require('../../modules/wechatsite/qr/QrTypeRegistries').tenantQrTypeRegistry;
var qrType = qrTypeRegistry.getQrType('sdpp');
var tenantOrgService = context.services.tenantOrgService;
var courseService = context.services.courseService;
var logger = context.logger;

module.exports = function (router) {
    //router.use(checkauth);
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
            if(!json.banners){
                json.banners = [];
            }
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
            params.populate = [{
                path: 'qr'
            }]
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
            let context = require('../../context/context');
            //let catalog = new context.models.Catalog(query);
            let params = {
                conditions: query,
                populate: [
                    {path: 'tenant'},
                    {path: 'product'},
                    {path: 'media'}
                ]
            };
            params.sort= {
                crtOn: -1
            };
            if(query.product){
                if(typeof query.product != 'string'){
                    this.throw(new Error('load catalog expected a product id'));
                }
                var addonConditions = {
                    products: {
                        $all: [query.product]
                    }
                };
                delete query['product'];
                _.extend(params.conditions, addonConditions);
            }
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
            catalog.products = Array.from(catalog.products).map(function(product){
                if(typeof product === 'object'){
                    return product._id
                }
                return product
            });

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

            let qrType = qrTypeRegistry.getQrType('sdp');
            let qr = yield qrType.createQrAsync({wechatId: media.originalId, temp: true});
            yield context.services.courseService.updateByIdAsync(product._id, {qr: qr._id});
            qr.toJson();
            product.qr = qr;

            if(qr){
                return this.body = {error: null, product: product}
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
            let wechatsite = yield context.services.tenantWechatSiteService.loadByIdAsync(bespeak.media);
            yield context.services.membershipService.ensureSignUpAsync(wechatsite.originalId, bespeak.user._id);
            yield context.services.bespeakService.createAsync({
                product: bespeak.product._id || bespeak.product,
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

    router.put('/sd/bespeaks/_:id', function*(){
        try{
            let id = this.params.id;
            let bespeak = this.request.body.o;
            let bespeakUpdated = yield context.services.bespeakService.updateByIdAsync(id, bespeak);
            this.body = {error: null, bespeak: bespeakUpdated}
        }catch(e){
            logger.error(e);
            this.body = {error: e}
        }
    });

    router.get('/sd/orders', function*(){
        try{
            let tenantId = this.request.query.tenant;
            let status = this.request.query.status;
            let options = {
                page: {
                    no: this.request.query.no,
                    size: this.request.query.size
                },
                conditions: {
                    org: tenantId
                },
                populates: [
                    {
                        path:'bespeak',
                        populate: [{
                            path: 'product',
                            model: 'Course',
                        },
                            {
                                path: 'media',
                                model: 'WechatMedia',
                            },
                            {
                                path: 'user',
                                model: 'TenantUser',
                            }
                        ]
                    }
                    ,{
                        "path": "distributors",
                        populate: {
                            path: 'user',
                            model: 'TenantUser'
                        }
                    }
                ]
            };
            if(status){
                options.conditions.status = status;
            }
            let data = yield context.services.orderService.findAsync(options);
            this.body = {orders: data.docs, count: data.count, error: null};
        } catch (e){
            logger.error(e);
            this.body = {error: e};
        }
    });

    router.get('/sd/orders/distributor', function*(){
        try{
            let distributorId = this.request.query.distributor;
            let status = this.request.query.status;

            let orders = yield context.services.orderService.findByRelatedDistributorAsync(distributorId, status);
            this.body = {orders: orders, error: null};
        }catch(e){
            logger.error(e);
            this.body = {error: e};
        }
    });

    router.post('/sd/order', function*(){
        try{
            let order = this.request.body;
            let tenantWechatSite = yield context.services.tenantWechatSiteService.loadByIdAsync(order.bespeak.media);
            let wechatId = tenantWechatSite.originalId;
            let distributor = null;
            order.org = tenantWechatSite.org;
            let userId = order.bespeak.user._id;
            let membership = yield context.services.membershipService.loadByUserIdAndWechatIdAsync(userId, wechatId);
            let isDistributor = membership.type && (membership.type === 'd');
            if(isDistributor){
                distributor = yield context.services.membershipService.loadDistributorsChainByIdAsync(membership._id);
                yield context.services.membershipService.splitBillAsync(distributor, order.bespeak.product, order.finalPrice, 3);
            }
            let orderMeta = {
                bespeak: order.bespeak._id,
                org: order.org,
                finalPrice: order.finalPrice
            };
            if(distributor){
                let distributors = [];
                let recurPushDistributors = function(distributor){
                    if(!distributor || !distributor.upLine){
                        return;
                    }
                    if(typeof distributor.upLine === 'object'){
                        distributors.push(distributor.upLine._id);
                    }
                    recurPushDistributors(distributor.upLine);
                };
                recurPushDistributors(distributor);
                orderMeta['distributors'] = distributors;
            }
            let orderPersisted = yield context.services.orderService.createAsync(wechatId, orderMeta);
            yield context.services.bespeakService.removeByIdAsync(wechatId, order.bespeak._id);

            this.body = {order: orderPersisted, error: null};
        }catch(e){
            logger.error(e);
            this.body = {error: e};
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

    router.get('/sd/customers/count', function*() {
        try {
            let tenantId = this.request.query.tenant;
            let count = yield context.services.membershipService.findCountByTenantIdAsync(tenantId, {type: MembershipType.Customer.value()});
            this.body = {error: null, count: count};
        }catch (e){
            logger.error(e);
            this.body = {error: e};
        }
    });

    router.get('/sd/distributors/payment/count', function*() {
        try {
            let tenantId = this.request.query.tenant;
            let conditions = {
                $or: [
                    {
                        type: MembershipType.Distributor.value()
                    },
                    {
                        type: MembershipType.Both.value()
                    }
                ],
                accountBalance: {$gt: 0}
            };
            let count = yield context.services.membershipService.findCountByTenantIdAsync(tenantId, conditions);
            this.body = {error: null, count: count};
        }catch (e){
            logger.error(e);
            this.body = {error: e};
        }
    });

    router.post('/sd/distributors/checkout', function*() {
        try {
            let distributorId = this.request.body.distributor;
            let tenantId = this.request.body.tenant;
            let media = this.request.body.media;

            yield context.services.membershipService.checkoutByDistributorIdAsync(distributorId, tenantId, media);
            this.body = {error: null};
        }catch (e){
            logger.error(e);
            this.body = {error: e};
        }
    });

    router.get('/sd/distributors/count', function*() {
        try {
            let tenantId = this.request.query.tenant;
            let count = yield context.services.membershipService.findCountByTenantIdAsync(tenantId, {type: MembershipType.Distributor.value()});
            this.body = {error: null, count: count};
        }catch (e){
            logger.error(e);
            this.body = {error: e};
        }
    });

    router.get('/sd/customers', function*(){
        try{
            let tenantId = this.request.query.tenant;
            let wechatId = this.request.query.wechatId;
            let options = {
                page: {
                    no: this.request.query.no,
                    size: this.request.query.size
                },
                conditions: {
                    $or: [
                        {
                            type: MembershipType.Customer.value()
                        },
                        {
                            type: MembershipType.Both.value()
                        }
                    ],
                    org: tenantId
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
                    {
                        path: 'media',
                        model: 'WechatMedia'
                    }
                ]
            };
            if(wechatId){
                options.populates.forEach(function(populate){
                    if(populate.path === 'media'){
                        populate['match'] = {
                            originalId: wechatId
                        }
                    }
                })
            }
            let customers = yield context.services.membershipService.findAsync(options);
            customers = customers.filter(function(customer){
                return customer.media;
            });
            this.body = {customers: customers, error: null};
        } catch (e){
            logger.error(e);
            this.body = {error: e};
        }
    });

    router.get('/sd/distributors/payment', function*(){
        try{
            let tenantId = this.request.query.tenant;
            let options = {
                page: {
                    no: this.request.query.no,
                    size: this.request.query.size
                },
                conditions: {
                    $or: [
                        {
                            type: MembershipType.Distributor.value()
                        },
                        {
                            type: MembershipType.Both.value()
                        }
                    ],
                    accountBalance: {$gt: 0},
                    org: tenantId
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

    router.get('/sd/distributors', function*(){
        try{
            let tenantId = this.request.query.tenant;
            let wechatId = this.request.query.wechatId;
            let options = {
                page: {
                    no: this.request.query.no,
                    size: this.request.query.size
                },
                conditions: {
                    $or: [
                        {
                            type: MembershipType.Distributor.value()
                        },
                        {
                            type: MembershipType.Both.value()
                        }
                    ],
                    org: tenantId
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
                    {
                        path: 'media',
                        model: 'WechatMedia'
                    }
                ]
            };
            if(wechatId){
                options.populates.forEach(function(populate){
                    if(populate.path === 'media'){
                        populate['match'] = {
                            originalId: wechatId
                        }
                    }
                })
            }
            let distributors = yield context.services.membershipService.findAsync(options);
            distributors = distributors.filter(function(distributor){
                return distributor.media;
            });
            this.body = {distributors: distributors, error: null};
        } catch (e){
            logger.error(e);
            this.body = {error: e};
        }
    });

    router.get('/sd/membership/info', function*(){
        try{
            let userId = this.request.query.user;
            let mediaId = this.request.query.media;
            let memberships = yield context.services.membershipService.findByUserIdAndMediaIdAsync(userId, mediaId);
            if(!memberships){
                return this.body = {error: null, data: {}}
            }
            let membership = memberships[0];
            let bespeaks = yield context.services.bespeakService.loadByUserIdAndMediaIdAsync(userId, mediaId);
            if(bespeaks){
                bespeaks = bespeaks.filter(function(b){
                    return b.lFlg != 'd'
                });
            }
            let params = {
                populates: [{
                    path: 'bespeak',
                    model: 'Bespeak',
                    match: {
                        media: mediaId,
                        user: userId
                    },
                    populate: [{
                        path: 'user',
                        model: 'TenantUser'
                    },{
                        path: 'product',
                        model: 'Course'
                    }]
                }]
            };
            let myOrders = yield context.services.orderService.filterAsync(params);
            var pricesObject = null;
            if(membership.type === MembershipType.Distributor.value()
                || membership.type === MembershipType.Both.value()){
                let orders = yield context.services.orderService.findByRelatedDistributorAsync(membership._id);
                pricesObject = context.services.orderService.getClearPriceAndUnclearPriceOfOrdersByOrdersAndDistributorId(orders, membership._id);
            }

            let data = {
                bespeaks: bespeaks,
                orders: myOrders,
                clearPrice: pricesObject && pricesObject.clear || 0,
                unclearPrice: pricesObject && pricesObject.unclear || 0
            };
            this.body = {error: null, data: data}
        }catch(e){
            logger.error(e);
            this.body = {error: e}
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
    });

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
    });

    router.put('/wechatsite/_:id', function*(){
        try{
            if(this.request.body.id){
                delete this.request.body['id'];
            }
            let tenantWechatSiteService = context.services.tenantWechatSiteService;

            let wechatSiteUpdated = yield tenantWechatSiteService.updateTenantWechatSiteByIdAsync(this.params.id, this.request.body);
            this.body = {error: null};
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });
};