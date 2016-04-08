var cbUtil = require('../../../../framework/callback');

function Service(context){ this.context = context}

Service.prototype.loadByQrCodeId = function(qrCodeId, callback){
    var posterKv = this.context.kvs.poster;
    var Poster = this.context.models.Poster;

    Poster.findOne({qr: qrCodeId}, callback);
};

Service.prototype.loadByProductId = function(productId, callback){
    var Poster = this.context.models.Poster;

    Poster.findOne({product: productId}, callback);
};

Service.prototype.create = function(json, callback){
    var posterKv = this.context.kvs.poster;
    var Poster = this.context.models.Poster;
    var poster = new Poster(json);

    poster.save(function (err, result, affected) {
        cbUtil.logCallback(
            err,
            'Fail to save poster: ' + err,
            'Succeed to save poster');

        cbUtil.handleAffected(function(err, doc){
            var obj = doc.toObject({virtuals: true});
            posterKv.saveById(obj, function(err, obj){
                if(callback) callback(err, obj);
            });
        }, err, result, affected);
    });
};

module.exports = Service;