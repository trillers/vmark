var qiniu = require('qiniu');

var qn = function(accessKey, secretKey, bucket, origin){
    this.accessKey = accessKey;
    this.secretKey = secretKey;
    this.bucket = bucket;
    this.origin = origin;
    qiniu.conf.ACCESS_KEY = accessKey;
    qiniu.conf.SECRET_KEY = secretKey;
}

qn.prototype.uptoken = function(bucketname){
    var putPolicy = new qiniu.rs.PutPolicy(bucketname);
    //putPolicy.callbackUrl = callbackUrl;
    //putPolicy.callbackBody = callbackBody;
    //putPolicy.returnUrl = returnUrl;
    //putPolicy.returnBody = returnBody;
    //putPolicy.asyncOps = asyncOps;
    //putPolicy.expires = expires;
    //if(transOpt){
    //    var entry = bucketname + ':' + transOpt.key;
    //    var encodedEntryURI = qiniu.util.urlsafeBase64Encode(entry)
    //    putPolicy.persistentOps = transOpt.persistentOps + "|saveas/" + encodedEntryURI;
    //}
    return putPolicy.token();
}

qn.prototype.uploadBuf = function(buf, key, cb){
    var self = this;
    var extra = new qiniu.io.PutExtra();
    //extra.params = params;
    //extra.mimeType = mimeType;
    //extra.crc32 = crc32;
    //extra.checkCrc = checkCrc;
    var uptoken = this.uptoken('china');
    qiniu.io.put(uptoken, key, buf, extra, function(err, ret) {
        if (!err) {
            // 上传成功， 处理返回值
            console.log(ret.key, ret.hash);
            // ret.key & ret.hash
            ret.url = 'http://' + self.origin + '/' + ret.key;
            if(cb) cb(null, ret);
        } else {
            // 上传失败， 处理返回代码
            console.log(err)
            if(cb) cb(err, null);
        }
    });
}

module.exports = qn;