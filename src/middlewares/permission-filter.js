var OrgMemberRole = require('../modules/common/models/TypeRegistry').item('OrgMemberRole');

var permissionFilter = {
    needAdminPermission: function*(next) {
        if (this.session && this.session.auth && this.session.auth.post && this.session.auth.post.role === OrgMemberRole.PlatformAdmin.value()) {
            yield next;
        } else {
            this.redirect('/permission-deny');
        }
    },
    tenantPermissionCheck: function*(next) {
        var tenantId = this.params.id;
        if ((this.session && this.session.auth && this.session.auth.tenantId === tenantId) || (this.session.auth.post && this.session.auth.post.role === OrgMemberRole.PlatformAdmin.value())) {
            yield next;
        } else {
            this.redirect('/permission-deny');
        }
    }
}
module.exports = permissionFilter;