var cbUtil = require('../../../framework/callback');
var InteractType = require('../../common/models/TypeRegistry').item('InteractType');

var Service = function(context){
    this.context = context;
};

Service.prototype.create = function(noteJson, callback){
    var kv = this.context.kvs.interaction;
    var Note = this.context.models.Interaction;
    var note = new Note(noteJson);
    note.save(function (err, result) {
        if(err){
            return callback(err)
        }
        result = result.toObject();
        callback(null, result)
    });
};

Service.prototype.loadById = function(id, callback){
    var kv = this.context.kvs.interaction;
    var Note = this.context.models.Interaction;
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

Service.prototype.updateById = function(id, json, callback){
    var kv = this.context.kvs.interaction;
    var Interaction = this.context.models.Interaction;
    Interaction.findByIdAndUpdate(id, json, {new: true}, function (err, doc) {
        if(err){
            return callback(err);
        }
        var obj = doc.toObject({virtuals: true});
        return kv.saveById(obj, function(err, obj){
            if(callback) callback(err, obj);
        });
    });
};

Service.prototype.deleteById = function(id, callback){
    var Interaction = this.context.models.Interaction;
    Interaction.remove({_id: id},function(err, doc){
        if(err){
            return callback(err)
        }
        callback(null, doc)
    });
};

module.exports = Service;