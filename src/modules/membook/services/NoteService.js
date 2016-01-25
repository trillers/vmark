var cbUtil = require('../../../framework/callback');
var OrgType = require('../../common/models/TypeRegistry').item('OrgType');

var Service = function(context){
    this.context = context;
};

Service.prototype.create = function(noteJson, callback){
    var kv = this.context.kvs.note;
    var Note = this.context.models.Note;
    var note = new Note(noteJson);
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
    Note.find({parentNote: id}, null, {lean: true}).exec(callback);
};

Service.prototype.updateById = function(id, json, callback){
    var kv = this.context.kvs.note;
    var Note = this.context.models.Note;
    Note.findByIdAndUpdate(id, json, {new: true}, function (err, doc) {
        if(err){
            return callback(err);
        }
        var obj = doc.toObject({virtuals: true});
        return kv.saveById(obj, function(err, obj){
            if(callback) callback(err, obj);
        });
    });
};

Service.prototype.loadByUserId = function(id, callback){
    var Note = this.context.models.Note;
    Note.find({initiator: id}, null, {lean: true}).exec(callback);
};

Service.prototype.deleteNotesById = function(ids, callback){
    var kv = this.context.kvs.note;
    var Note = this.context.models.Note;
    Note.remove({_id: {$in: ids}}, function(err){
        if(err){
           return callback(err);
        }
        return kv.deleteByIds(ids, function(err, obj){
            if(callback) callback(err, obj);
        });
    })
};

module.exports = Service;