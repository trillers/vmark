var co = require('co');
var Promise = require('bluebird');
var LifeFlag = require('../../../../framework/model/enums').LifeFlag;

var Service = function(context){
    this.context = context;
};

Service.prototype.loadAllMyManagedMedias = function(tenantId, operatorMemberId, callback){
    var logger = this.context.logger;
    var OrgMedia = this.context.models.OrgMedia;
    co(function* (){
        var conditions = {org: tenantId, operator: operatorMemberId, lFlg: LifeFlag.Active};
        var orgMediaList = yield OrgMedia.find(conditions, 'media', {lean: true}).populate({path: 'media'}).exec();
        var medieLists = [];
        var len = orgMediaList.length;
        for(var i=0; i<len; i++){
            medieLists.push(orgMediaList[i].media);
        }

        if(callback) callback(null, medieLists);
    }).catch(Error, function(err){
        logger.error('Fail to load all my managed medias: ' + err);
        logger.error(err.stack);
        if(callback) callback(err);
    });
};

Service.prototype.loadBoundMediaById = function(orgMediaId, callback){
    var logger = this.context.logger;
    var OrgMedia = this.context.models.OrgMedia;
    co(function* (){
        var orgMedia = yield OrgMedia.findById(orgMediaId, 'media', {lean: true}).populate({path: 'media'}).exec();
        if(callback) callback(null, orgMedia.media);
    }).catch(Error, function(err){
        logger.error('Fail to load bound media by org media id: ' + err);
        logger.error(err.stack);
        if(callback) callback(err);
    });
};


module.exports = Service;