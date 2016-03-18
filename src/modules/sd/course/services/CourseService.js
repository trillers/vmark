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

Service.find = function (params, callback) {
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

    query.lean(true);
    query.exec(function (err, docs) {
        if (err) {
            callback(err);
            return;
        }

        if (callback) callback(null, docs);
    });
};


Service.prototype.loadById = function(id, callback){
    var Group = this.context.models.Group;
    Group.findById(id, null, {lean: true}).populate({path: 'operator'}).exec(callback);
};

Service.prototype.updateById = function(id, json, callback){
    var Group = this.context.models.Group;
    Group.findByIdAndUpdate(id, json, {lean: true, new: true}).exec(callback);
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

module.exports = Service;