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
            Note.findById(id, null, {lean: true}).populate('initiator').exec(callback);
        }
        else{
            callback(null, result);
        }
    })
};

Service.prototype.loadMatesById = function(id, callback){
    var Note = this.context.models.Note;
    Note.find({parentNote: id}, null, {lean: true})
        .populate({path: 'likes', populate:{path: 'initiator'}})
        .populate({path: 'comments', populate:{path: 'initiator'}})
        .populate('initiator')
        .exec(callback);
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
    Note.find({initiator: id, type: 'pg'}, null, {lean: true, sort: {crtOn: -1}}).exec(callback);
};
Service.prototype.addComment = function(id, json, callback){
    var me = this;
    var noteKv = this.context.kvs.note;
    var Note = this.context.models.Note;
    Note.findByIdAndUpdate(id, {$addToSet: {comments: json._id}}, {lean: true, new: true}).populate('initiator').exec(function(err, doc){
        if(err){
            me.context.logger.error(err);
            return callback(err);
        }
        noteKv.saveById(doc, function(err, result){
            if(err){
                me.context.logger.error(err);
                return callback(err)
            }
            callback(null, doc);
        })
    })
};
Service.prototype.like = function(id, json, callback){
    var me = this;
    var noteKv = this.context.kvs.note;
    var interactKv = this.context.kvs.interaction;
    var Note = this.context.models.Note;
    Note.findByIdAndUpdate(id, {$addToSet: {likes: json._id}}, {lean: true, new: true}).populate('initiator').exec(function(err, doc){
        if(err){
            me.context.logger.error(err);
            return callback(err);
        }
        noteKv.saveById(doc, function(err, result){
            if(err){
                me.context.logger.error(err);
                return callback(err)
            }
            callback(null, doc);
        })
    })
};

Service.prototype.unlike = function(id, initiator, callback){
    var me = this;
    var noteKv = this.context.kvs.note;
    var interactKv = this.context.kvs.interaction;
    var Note = this.context.models.Note;
    Note.findByIdAndUpdate(id, {$pull: {likes: initiator}}, {lean: true}).exec(function(err, doc){
        if(err){
            me.context.logger.error(err);
            return callback(err);
        }
        noteKv.saveById(doc, function(err, result){
            if(err){
                me.context.logger.error(err);
                return callback(err)
            }
            callback(null);
        })
    })
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