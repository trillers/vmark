var Promise = require('bluebird');

var helper = {};

/**
 * 直辖市列表
 */
var  directCities = {
    '北京': true,
    '天津': true,
    '上海': true,
    '重庆': true
};
helper.directCities = directCities;

helper.copyPlace = function(dest, place){
    if(!place){
        return;
    }
    //TODO
    var province = place.split(' ')[0];
    var city = place.split(' ')[1];
    dest.province = province;
    if(directCities[province]){
        dest.city = province;
        dest.district = city;
    }
    else{
        dest.city = city;
    }
    for(var prop in dest){
        if(typeof dest[prop] === 'undefined'){
            delete dest[prop];
        }
    }
};

helper.copyLocation = function(dest, src){
    dest.country = src.country;
    dest.province = src.province;
    if(directCities[src.province]){
        dest.city = src.province;
        dest.district = src.city;
    }
    else{
        dest.city = src.city;
    }
};

helper.copyUserInfo = function(dest, src){
    dest.openid     = src.openid;
    dest.unionid    = src.unionid;
    dest.nickname   = src.nickname;
    dest.headimgurl = src.headimgurl;
    dest.sex        = src.sex;

    helper.copyLocation(dest, src);
};

helper.copySubscriptionOnly = function(dest, src){
    dest.subscribe = src.subscribe;
    if(src.subscribe){
        dest.subscribe_time = new Date(src.subscribe_time*1000);
        dest.language       = src.language;
        dest.remark         = src.remark;
        dest.groupid        = src.groupid;
    }
};

helper.copySubscription = function(dest, src){
    helper.copyUserInfo(dest, src);
    helper.copySubscriptionOnly(dest, src);
};

helper.getUserInfo = function (api, openid, language, callback) {
    var input = {openid: openid, lang: language};
    api.api.getUser(input, function (err, userInfo) {
        if (err) {
            if (callback) callback(err);
        }
        else {
            if (callback) callback(null, userInfo);
        }
    });
};
helper.getUserInfoAsync = Promise.promisify(helper.getUserInfo);

module.exports = helper;