var redis = require('../../../../../src/app/redis');
var logger = require('../../../../../src/app/logging').logger;
var Promise = require('bluebird');
var cbUtil = require('../../../../../src/framework/callback');

var sceneSequenceKey = function(id){
    return 'mc:scene:seq';
};

var tempSceneSequenceKey = function(id){
    return 'mc:tempscene:seq';
};

var wechatIdToFvSceneIdKey = function(wechatId){
    return 'qr:fv:sn:wc:' + wechatId;
};

var wechatIdToTmpSceneIdKey = function(wechatId){
    return 'qr:tmp:sn:wc:' + wechatId;
};

var INITIAL_SCENE_ID = 100;

var INITIAL_TEMP_SCENE_ID = 100000;

var QrCode = {
    nextTenantSceneId: function(wechatId, callback){
        var key = wechatIdToFvSceneIdKey(wechatId);
        redis.incr(key, function(err, seq){
            if(err){
                //TODO: error handling
            }
            else if(seq==1){
                redis.set(key, INITIAL_SCENE_ID, function(err, result){
                    cbUtil.handleOk(callback, err, result, INITIAL_SCENE_ID);
                });
            }
            else{
                cbUtil.handleSingleValue(callback, err, seq);
            }
        })
    },
    deleteTenantSceneId: function(wechatId, callback){
        var key = wechatIdToFvSceneIdKey(wechatId);
        redis.del(key, function(err, result){
            cbUtil.handleSingleValue(callback, err, result);
        });
    },
    nextTenantTmpSceneId: function(wechatId, callback){
        var key = wechatIdToTmpSceneIdKey(wechatId);
        redis.incr(key, function(err, seq){
            if(err){
                //TODO: error handling
            }
            else if(seq==1){
                redis.set(key, INITIAL_TEMP_SCENE_ID, function(err, result){
                    cbUtil.handleOk(callback, err, result, INITIAL_TEMP_SCENE_ID);
                });
            }
            else{
                cbUtil.handleSingleValue(callback, err, seq);
            }
        })
    },
    deleteTenantTmpSceneId: function(wechatId, callback){
        var key = wechatIdToTmpSceneIdKey(wechatId);
        redis.del(key, function(err, result){
            cbUtil.handleSingleValue(callback, err, result);
        });
    },
    nextSceneId: function(callback){
        var key = sceneSequenceKey();
        redis.incr(key, function(err, seq){
            if(err){
                //TODO: error handling
            }
            else if(seq==1){
                redis.set(key, INITIAL_SCENE_ID, function(err, result){
                    cbUtil.handleOk(callback, err, result, INITIAL_SCENE_ID);
                });
            }
            else{
                cbUtil.handleSingleValue(callback, err, seq);
            }
        });
    },
    deleteSceneId: function(callback){
        var key = sceneSequenceKey();
        redis.del(key, function(err, result){
            cbUtil.handleSingleValue(callback, err, result);
        });
    },

    nextTempSceneId: function(callback){
        var key = tempSceneSequenceKey();
        redis.incr(key, function(err, seq){
            if(err){
                //TODO: error handling
            }
            else if(seq==1){
                redis.set(key, INITIAL_TEMP_SCENE_ID, function(err, result){
                    cbUtil.handleOk(callback, err, result, INITIAL_SCENE_ID);
                });
            }
            else{
                cbUtil.handleSingleValue(callback, err, seq);
            }
        });
    },
    deleteTempSceneId: function(callback){
        var key = tempSceneSequenceKey();
        redis.del(key, function(err, result){
            cbUtil.handleSingleValue(callback, err, result);
        });
    }

};

QrCode = Promise.promisifyAll(QrCode);
module.exports = QrCode;