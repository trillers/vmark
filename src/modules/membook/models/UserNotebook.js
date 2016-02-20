var TypeRegistry = require('../../common/models/TypeRegistry');
var NoteType = TypeRegistry.item('NoteType');
var NoteStatus = TypeRegistry.item('NoteStatus');

var Model = function(domainBuilder){
    var schema = domainBuilder
        .i('UserNotebook')
        .withBasis()
        .withLifeFlag()
        .withCreatedOn()
        .withProperties({
            user: {type: String, ref: 'User'},
            notebook: {type: String, ref: 'Notebook'}
        })
        .build();
    return schema.model(true);
};

module.exports = Model;
