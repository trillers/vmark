var PowerType = require('../../../common/models/TypeRegistry').item('PowerType');

var Model = function(DomainBuilder){
    var schema = DomainBuilder
        .i('PowerActivity')
        .withBasis()
        .withLifeFlag()
        .withCreatedOn()
        .withProperties({
            org: {type: String, ref: 'Org'}
            ,wechatId: {type: String}
            ,name: {type: String, require: true}
            ,bgImg: [{type: String}]
            ,shareImg: {type: String}
            ,shareTitle: {type: String}
            ,shareDesc: {type: String}
            ,base_power: {type: Number}
            ,friend_help_count_limit: {type: Number}
            ,startTime: {type: Date}
            ,endTime: {type: Date}
            ,friend_help_min_power: {type: Number}
            ,friend_help_max_power: {type: Number}
            ,participants_count: {type: Number, default: 0}
            ,views: {type: Number, default: 0}    //浏览量, 用户浏览一次活动页或者参与者详情页时+1
            ,rule: {type: String}
            ,desc: {type: String}
            ,withPic: {type: Boolean, default: false} //是否启动图片助力功能
            ,posterBgImg: {type: String} //海报背景图片
            ,qrCode: {type: String, ref: 'QrCode'} //scan get activity post
            ,poster: {type: String, ref: 'PowerPoster'} //activity poster
            ,type: {type: String, enum: PowerType.valueList(), default: PowerType.RedPacket.value(), required: true}
        })
        .build();
    return schema.model(true);
}


module.exports = Model;
