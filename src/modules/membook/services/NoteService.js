var cbUtil = require('../../../framework/callback');

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
        .populate({path: 'initiator', select: 'headimgurl nickname crtOn'})
        .sort({crtOn: 1})
        .exec(callback);
    //.populate({path: 'likes', populate:{path: 'initiator'}})
    //.populate({path: 'comments', populate:{path: 'initiator'}})
};

Service.prototype.loadMatesDeepById = function(id, callback){
    var Note = this.context.models.Note;
    Note.find({parentNote: id}, null, {lean: true})
        .populate({path: 'initiator', select: 'headimgurl nickname crtOn'})
        .populate({path: 'likes', populate:{path: 'initiator'}})
        .populate({path: 'comments', populate:{path: 'initiator'}})
        .sort({crtOn: 1})
        .exec()
        .then(function(doc){
            Note.populate(doc, {
                path: 'likes.initiator',
                select: 'headimgurl nickname crtOn',
                model: 'User'
            }, function(err, doc){
                if(err){
                    return callback(err);
                }
                Note.populate(doc, {
                    path: 'likes.initiator',
                    select: 'headimgurl nickname crtOn',
                    model: 'User'
                }, callback)
            })
        }, function(e){
            callback(e)
        })
}

Service.prototype.loadNotesByNotebookId = function(id, callback){
    var Note = this.context.models.Note;
    Note.find({notebook: id}, null, {lean: true})
        .populate({path: 'initiator'})
        .exec(callback);
};

Service.prototype.loadSectionNotesByNotebookId = function(id, callback){
    var Note = this.context.models.Note;
    Note.find({notebook: id, type: 'sc'}, null, {lean: true})
        .populate({path: 'initiator', select: 'headimgurl nickname crtOn'})
        .exec(callback);
};

Service.prototype.updateById = function(id, json, callback){
    var kv = this.context.kvs.note;
    var Note = this.context.models.Note;
    Note.findByIdAndUpdate(id, json, {new: true}, function (err, doc) {
        if(err){
            return callback(err);
        }else if(doc) {
            var obj = doc.toObject({virtuals: true});
            return kv.saveById(obj, function (err, obj) {
                if (callback) callback(err, obj);
            });
        }else{
            if (callback) callback(err, doc);
        }
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

Service.prototype.filter = function (params, callback) {
    var Note = this.context.models.Note;

    var query = Note.find();

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
        params.populate.forEach(function (item) {
            query.populate(item);
        })
    }
    query.lean(true);
    query.exec(function (err, rawDocs) {
        if (err) {
            callback(err);
            return;
        }
        var docs = rawDocs.map(function(doc){
            return doc;
        });
        if (callback) callback(null, docs);
    });
}

module.exports = Service;