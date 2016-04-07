var qrTypeRegistry = require('./QrTypeRegistries').tenantQrTypeRegistry;
var context = require('../../../context/context');
var typeRegistry = require('../../common/models/TypeRegistry');
var MembershipType = typeRegistry.item('MembershipType');

var distributorCreateType = qrTypeRegistry.newType('distributorCreate');

distributorCreateType.onAccess(function(qr, openid, wechatId){
    co(function*(){
        var membership = yield context.services.membershipSerivce.findAsync({wechatId: wechatId, openid: openid});

        if(!membership){
            var poster = yield context.services.posterService.loadByQrCodeIdAsync(qr._id);
            var product = yield context.services.courseService.loadByIdAsync(poster.product);
            var tenantWechatSite = yield




            membership = {
                upLine:    {type: String, ref: 'TenantUser'},
                org:       product.tenant,
                media:     {type: String, ref: 'WechatMedia'},
                type: MembershipType.Distributor.value()
            };

            //downLine:  [{type: String, ref: 'TennatUser'}],
            yield context.services.membershipSerivce.createAsync(membership);
            return;
        }



    })

});

distributorCreateType.onExpire(function(qr, openid, wechatId){});