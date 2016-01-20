var NoteType = require('../../common/models/TypeRegistry').item('NoteType');

var Model = function(domainBuilder){
    var schema = domainBuilder
        .i('Note')
        .withBasis()
        .withLifeFlag()
        .withCreatedOn()
        .withProperties({
            title: {type: String},

            img: {type: String},

            voi: {type: String},

            txt: {type: String},

            parent: {type: String, ref: 'Note', required: true, default: 'root'},

            type: {type: String, enum: NoteType.valueList(), default: NoteType.Plain.value()}
        })
        .build();
    return schema.model(true);
};

module.exports = Model;
