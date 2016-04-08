var Model = function(domainBuilder){
    var schema = domainBuilder
        .i('Poster')
        .withBasis()
        .withCreatedOn()
        .withProperties({
            user: {type: String, ref: 'TenantUser'},
            product: {type: String},
            qr: {type: String, ref: 'QrCode'},
            url: {type: String, required: true}
        }).build();
    return schema.model(true);
};

module.exports = Model;