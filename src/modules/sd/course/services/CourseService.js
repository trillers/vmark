var co = require('co');
var cbUtil = require('../../../../framework/callback');
var typeRegistry = require('../../../common/models/TypeRegistry');

var Service = function(context){
    this.context = context;
};

Service.prototype.create = function(courseJson, callback){
    var courseKv = this.context.kvs.course;
    var Course = this.context.models.Course;
    var course = new Course(courseJson);
    course.save(function (err, result, affected) {
        cbUtil.logCallback(
            err,
            'Fail to save course: ' + err,
            'Succeed to save course');

        cbUtil.handleAffected(function(err, doc){
            var obj = doc.toObject({virtuals: true});
            courseKv.saveById(obj, function(err, obj){
                if(callback) callback(err, obj);
            });
        }, err, result, affected);
    });
};

Service.prototype.find = function (params, callback) {
    var Course = this.context.models.Course;
    var query = Course.find();

    if (params.options) {
        query.setOptions(params.options);
    }

    if (params.sort) {
        query.sort(params.sort);
    }

    if (params.page) {
        var skip = (params.page.no - 1) * params.page.size;
        var limit = params.page.size;
        if (skip) query.skip(skip);
        if (limit) query.limit(limit);
    }

    if (params.conditions) {
        query.find(params.conditions);
    }

    if (params.populate) {
        query.populate(params.populate);
    }

    query.lean(true);
    query.exec(function (err, docs) {
        if (err) {
            callback(err);
            return;
        }

        if (callback) callback(null, docs);
    });
};

Service.prototype.loadByQrCodeId = function(qrId, callback){
    var Course = this.context.models.Course;
    Course.findOne({qr: qrId}, null, {lean: true}, callback)
};

Service.prototype.loadById = function(id, callback){
    var courseKv = this.context.kvs.course;
    var Course = this.context.models.Course;
    courseKv.loadById(id, function(e, o){
        if(e){
            return callback(e);
        }
        if(o){
            return callback(null, o);
        }
        Course.findById(id, null, {lean: true}).exec(callback);
    });
};

Service.prototype.updateById = function(id, json, callback){
    var Course = this.context.models.Course;
    var courseKv = this.context.kvs.course;
    !json['_id'] && (json['_id'] = id);
    courseKv.saveById(json, function(err, result){
        if(err){
            return callback(err);
        }
        Course.findByIdAndUpdate(id, json, {lean: true, new: true}).exec(function(err, doc){
            if(err){
                return callback(err)
            }
            return callback(null, doc)
        });
    })
};

Service.prototype.removeGroupById = function(id, callback){
    var Group = this.context.models.Group;
    var groupKv = this.context.kvs.group;
    Group.findByIdAndUpdate(id, {lFlg: 'd'}, {lean: true})
        .exec(function(err){
            if(err){
                console.error(err);
            }else{
                groupKv.delById(id, function(err, obj){
                    if(callback) callback(err, obj);
                });
            }
        });
};

function mixin(t, s){
    for(var p in s){
        t[p] = s[p];
    }
}

module.exports = Service;