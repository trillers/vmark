var Model = function(domainBuilder){
    var schema = domainBuilder
        .i('Poster')
        .withBasis()
        .withCreatedOn()
        .withProperties({
            user: {type: String, ref: 'TenantUser'},
            product: {type: String},
            qr: {type: String, ref: 'QrCode'},
            mediaId: {type: String, required: true},
            fsPatch : {type: String}
        }).build();
    return schema.model(true);
};

module.exports = Model;