var client = require('../app/redis');
var Promise = require('bluebird');

var Store = function(){
    this.client = client;
    this.client.setAsync = Promise.promisify(this.client.set);
    this.client.getAsync = Promise.promisify(this.client.get);
    this.client.delAsync = Promise.promisify(this.client.del);
}

Store.prototype.get = function *(sid) {
    try {
        console.error('start get session : sid ' + sid);
        var sess = yield this.client.getAsync(sid);
        if (sess) {
            return JSON.parse(sess);
        } else {
            return null;
        }
    }catch(e){
        console.error('session store get session error: ' + e);
    }
};

Store.prototype.set = function *(sid, sess, ttl) {
    try {
        console.error('start set session : sid ' + sid);
        sess = JSON.stringify(sess || '{}');
        var res = yield this.client.setAsync(sid, sess, 'PX', ttl);
        return res;
    }catch(e){
        console.error('session store set session error: ' + e);
    }
};

Store.prototype.destroy = function *(sid) {
    return this.client.delAsync(sid);
};

module.exports = Store;
