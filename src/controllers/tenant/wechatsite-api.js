var context = require('../../context/context');
var wechatMediaSettingService = context.services.wechatMediaSettingService;
var logger = context.logger;
var wechatApiCache = require('../../modules/tenant/wechat/api-cache');

var util = require('../../app/util');

module.exports = function(router){
    router.post('/settings/save', function *(){
        try {
            var json = this.request.body;
            var data = null;
            if(json.menu){
                var wechatApi = (yield wechatApiCache.get(json.originalId)).api;
                yield wechatApi.createMenuAsync(json.menu);
                json.menu.button.map(function(item, i){
                    if(!item.name){
                        json.menu.button.splice(i, 1);
                    }
                })
                json.menu = JSON.stringify(json.menu);
            }

            if(!json.id){
                data = yield wechatMediaSettingService.createAsync(json);
            }else{
                json.id && delete json.id;
                json._id && delete json._id;
                data = yield wechatMediaSettingService.updateByWechatIdAsync(json.originalId, json);
            }
            this.body = {success: true, data: data};
        }catch(e){
            logger.error('save wechatmedia settings err: ' + e.stack);
            this.body = {success: false, data: null}
        }
    });

    router.get('/settings/load', function *(){
        var wechatId = this.query.id;
        var data = yield wechatMediaSettingService.loadByWechatIdAsync(wechatId);
        this.body = data;
    });
}

