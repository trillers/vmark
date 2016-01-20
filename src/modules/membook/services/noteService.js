var cbUtil = require('../../../framework/callback');
var OrgType = require('../../common/models/TypeRegistry').item('OrgType');

var Service = function(context){
    this.context = context;
};    

Service.prototype.create = function(groupJson, callback){
    var kv = this.context.kvs.note;
    var Note = this.context.models.Note;
    var note = new Note(groupJson);
    note.save(function (err, result, affected) {
        cbUtil.logCallback(
            err,
            'Fail to save note: ' + err,
            'Succeed to save note');

        cbUtil.handleAffected(function(err, doc){
            var obj = doc.toObject({virtuals: true});
            kv.saveById(obj, function(err, obj){
                if(callback) callback(err, obj);
            });
        }, err, result, affected);
    });
};

Service.prototype.loadById = function(id, callback){
    var kv = this.context.kvs.note;
    var Note = this.context.models.Note;
    kv.loadById(id, function(err, result){
        if(err){
            console.error(err);
        }else if(!result){
            Note.findById(id, null, {lean: true}).exec(callback);
        }
        else{
            callback(null, result);
        }
    })
};

Service.prototype.loadMatesById = function(id, callback){
    var Note = this.context.models.Note;
    Note.find({parent: id}, null, {lean: true}).exec(callback);
};

module.exports = Service;