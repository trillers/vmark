var cbUtil = require('../../../framework/callback');

var Service = function(context){
    this.context = context;
};

Service.prototype.create = function(json, callback){
    var Notebook = this.context.models.Notebook;
    var notebook = new Notebook(json);
    notebook.save(function (err, result, affected) {
        cbUtil.logCallback(
            err,
            'Fail to save notebook: ' + err,
            'Succeed to save notebook');

        cbUtil.handleAffected(function(err, doc){
            var obj = doc.toObject({virtuals: true});
            if(callback) callback(err, obj);
        }, err, result, affected);
    });
};

Service.prototype.load = function(callback){
    var Notebook = this.context.models.Notebook;
    Notebook.find({}, function(err, result){
        if(err) {
            console.error(err);
            callback(err);
        }
        else{
            callback(null, result);
        }
    })
};

Service.prototype.loadById = function(id, callback){
    var Notebook = this.context.models.Notebook;
    Notebook.findById(id, function(err, result){
        if(err) {
            console.error(err);
            callback(err);
        }
        else{
            callback(null, result);
        }
    })
};

Service.prototype.updateById = function(id, json, callback){
    var Notebook = this.context.models.Notebook;
    Notebook.findByIdAndUpdate(id, json, {new: true}, function (err, doc) {
        if(err){
            return callback(err);
        }else if(doc) {
            var obj = doc.toObject({virtuals: true});
            callback(err, obj);
        }else{
            if (callback) callback(err, doc);
        }
    });
};

Service.prototype.loadByUserId = function(id, callback){
    var Notebook = this.context.models.Notebook;
    Notebook.find({initiator: id}, null, {lean: true, sort: {crtOn: -1}}).exec(callback);
};

Service.prototype.filter = function (params, callback) {
    var Notebook = this.context.models.Notebook;

    var query = Notebook.find();

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