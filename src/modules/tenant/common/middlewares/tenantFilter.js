var filter = function* (next) {
    this.wechatId = this.params.wechatId;
    this.tenantId = this.params.tenantId;

    yield next;

};

module.exports = filter;