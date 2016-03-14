var cbUtil = require('../../../framework/callback');

var Service = function(context){
    this.context = context;
};

Service.prototype.create = function(noteJson, callback){
    var UserNotebook = this.context.models.UserNotebook;
    var userNotebook = new UserNotebook(noteJson);
    userNotebook.save(function (err, result, affected) {
        cbUtil.logCallback(
            err,
            'Fail to save user notebook: ' + err,
            'Succeed to save user notebook');

        cbUtil.handleAffected(function(err, doc){
            var obj = doc.toObject({virtuals: true});
            if(callback) callback(err, obj);
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


Service.prototype.loadByUserId = function(id, callback){
    var Note = this.context.models.Note;
    Note.find({initiator: id, type: 'pg'}, null, {lean: true, sort: {crtOn: -1}}).exec(callback);
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