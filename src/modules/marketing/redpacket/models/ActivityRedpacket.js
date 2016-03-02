var Model = function(DomainBuilder){
    var schema = DomainBuilder
        .i('ActivityRedpacket')
        .withBasis()
        .withLifeFlag()
        .withCreatedOn()
        .withProperties({
            name: {type: String, require: true}
            ,bgImg: [{type: String}]
            ,shareImg: {type: String}
            ,shareTitle: {type: String}
            ,shareDesc: {type: String}
            ,base_lucky_money: {type: Number}
            ,friend_help_count_limit: {type: Number}
            ,startTime: {type: Date}
            ,endTime: {type: Date}
            ,friend_help_min_money: {type: Number}
            ,friend_help_max_money: {type: Number}
            ,participants_count: {type: Number, default: 0}
            ,views: {type: Number, default: 0}    //浏览量, 用户浏览一次活动页或者参与者详情页时+1
            ,rule: {type: String}
            ,desc: {type: String}
        })
        .build();
    return schema.model(true);
}


module.exports = Model;
