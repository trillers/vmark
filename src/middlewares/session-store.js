var client = require('../app/redis');
var Promise = require('bluebird');

var Store = function(){
    this.client = client;
    this.client.setAsync = Promise.promisify(this.client.set);
    this.client.getAsync = Promise.promisify(this.client.get);
    this.client.delAsync = Promise.promisify(this.client.del);
}

Store.prototype.get = function *(sid) {
    var sess = yield this.client.getAsync(sid);
    if(sess){
        return JSON.parse(sess);
    }else{
        return null;
    }
};

Store.prototype.set = function *(sid, sess, ttl) {
    sess = JSON.stringify(sess || '{}');
    return this.client.setAsync(sid, sess, 'PX', ttl);
};

Store.prototype.destroy = function *(sid) {
    return this.client.delAsync(sid);
};

module.exports = Store;
