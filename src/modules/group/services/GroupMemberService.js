var cbUtil = require('../../../framework/callback');

var Service = function(context){
    this.context = context;
};

Service.prototype.create = function(GroupMemberJson, callback){
    var GroupMember = this.context.models.GroupMember;
    var member = new GroupMember(GroupMemberJson);
    member.save(function (err, result, affected) {
        //TODO: need logging
        cbUtil.handleAffected(callback, err, result, affected);
    });
};

Service.prototype.findByGroupId = function(groupId, callback){
    var GroupMember = this.context.models.GroupMember;
    GroupMember.find({group: groupId, 'lFlg': 'a'}, null, {lean: true}).exec(callback);
};


Service.prototype.findAllDetailByGroupId = function(groupId, callback){
    var GroupMember = this.context.models.GroupMember;
    GroupMember.find({group: groupId, 'lFlg': 'a'}, null, {lean: true}).populate({path: 'member'}).exec(callback);
};

Service.prototype.findAllDetailById = function(id, callback){
    var GroupMember = this.context.models.GroupMember;
    GroupMember.findById(id, null, {lean: true}).populate({path: 'member'}).exec(callback);
};

Service.prototype.removeGroupMembersByGroupId = function(groupId, callback){
    var GroupMember = this.context.models.GroupMember;
    GroupMember.findOneAndUpdate({group: groupId}, {lFlg: 'd'}, {lean: true}).exec(callback);
};

//
//Service.prototype.create = function(OrgMemberJson, callback){
//    var OrgMember = this.context.models.OrgMember;
//    var member = new OrgMember(OrgMemberJson);
//    member.save(function (err, result, affected) {
//        //TODO: need logging
//        cbUtil.handleAffected(callback, err, result, affected);
//    });
//
//};
//
//Service.prototype.updateById = function(id, update, callback){
//    var OrgMember = this.context.models.OrgMember;
//    OrgMember.findByIdAndUpdate(id, update, {new: true}, function (err, result) {
//        //TODO: need logging
//        cbUtil.handleSingleValue(callback, err, result);
//    });
//
//};

module.exports = Service;