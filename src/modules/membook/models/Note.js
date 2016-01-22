var TypeRegistry = require('../../common/models/TypeRegistry');
var NoteType = TypeRegistry.item('NoteType');
var NoteStatus = TypeRegistry.item('NoteStatus');

var Model = function(domainBuilder){
    var schema = domainBuilder
        .i('Note')
        .withBasis()
        .withLifeFlag()
        .withCreatedOn()
        .withProperties({
            title: {type: String},

            url: {type: String},

            seconds: {type: Number},

            content: {type: String},

            initiator: {type: String, ref: 'User'},

            parentNote: {type: String, ref: 'Note', required: true, default: 'root'},

            type: {type: String, enum: NoteType.valueList(), default: NoteType.Plain.value()},

            status: {type: String, enum: NoteStatus.valueList(), default: NoteStatus.Draft.value()}
        })
        .build();
    return schema.model(true);
};

module.exports = Model;
