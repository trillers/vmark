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

            likes: [{type: String, ref: 'Interaction'}],

            comments: [{type: String, ref: 'Interaction'}],

            initiator: {type: String, ref: 'User'},

            parentNote: {type: String, ref: 'Note', required: true, default: 'root'},

            type: {type: String, enum: NoteType.valueList(), default: NoteType.Page.value()},

            status: {type: String, enum: NoteStatus.valueList(), default: NoteStatus.Draft.value()},

            rank: {type: Number, default: 0}
        })
        .build();
    return schema.model(true);
};

module.exports = Model;
