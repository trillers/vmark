var DomainBuilder = require('../../../../../src/framework/model/DomainBuilder');
var schema = DomainBuilder
    .i('QrCode')
    .withBasis()
    .withCreatedOn()
    .withProperties({
        temp: {type: Boolean, default: false},
        type: {type: String},
        ticket:{type:String},
        scene_id:{type: String},
        data:{type: String},
        expire:{type: Number},
        views:{type: Number, default: 0}
    }).build();

    //schema.static('create', function (qrChannel, callback) {
    //    var qrChannel = new QrChannel(qrChannel);
    //    qrChannel.save(function(err, doc){
    //        if(err){
    //            if(callback) callback(err);
    //        }
    //        else{
    //            if(callback) callback(null, doc);
    //        }
    //    });
    //});
    //
    //schema.static('loadBySceneId', function (sceneId, callback) {
    //    this.findOneAndUpdate({scene_id: sceneId}, {$inc: {'view': 1}}, function(err, doc){
    //        if(err){
    //            if(callback) callback(err);
    //        }
    //        else{
    //            if(callback) callback(null, doc);
    //        }
    //        //TODO: update to increase views by one
    //    });
    //});

module.exports.schema = schema;
module.exports.model = schema.model(true);
