var qrTypeRegistry = require('./QrTypeRegistries').tenantQrTypeRegistry;
var context = require('../../../context/context');
var typeRegistry = require('../../common/models/TypeRegistry');
var MembershipType = typeRegistry.item('MembershipType');

var distributorCreateType = qrTypeRegistry.newType('distributorCreate');

distributorCreateType.onAccess(function(qr, openid, wechatId){
    co(function*(){
        var membership = yield context.services.membershipSerivce.findAsync({wechatId: wechatId, openid: openid});

        if(!membership){
            var poster = yield context.services.posterService.loadByQrCodeId(qr._id);
            context.services.courseService.loadById(poster.product);

            membership = {
                upLine:    {type: String, ref: 'TenantUser'},
                org:       {type: String, ref: 'Org'},
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