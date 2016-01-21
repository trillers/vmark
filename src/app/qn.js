var qiniu = require('qiniu');

var qn = function(accessKey, secretKey, bucket, origin){
    this.accessKey = accessKey;
    this.secretKey = secretKey;
    this.bucket = bucket;
    this.origin = origin;
    qiniu.conf.accessKey = accessKey;
    qiniu.conf.secretKey = secretKey;
}

qn.prototype.uptoken = function(bucketname, transOpt){
    var putPolicy = new qiniu.rs.PutPolicy(bucketname);
    //putPolicy.callbackUrl = callbackUrl;
    //putPolicy.callbackBody = callbackBody;
    //putPolicy.returnUrl = returnUrl;
    //putPolicy.returnBody = returnBody;
    //putPolicy.asyncOps = asyncOps;
    //putPolicy.expires = expires;
    if(transOpt){
        var entry = bucketname + ':' + transOpt.key;
        var encodedEntryURI = qiniu.util.urlsafeBase64Encode(entry)
        putPolicy.persistentOps = transOpt.persistentOps + "|saveas/" + encodedEntryURI;
    }
    return putPolicy.token();
}

qn.prototype.uploadVoiceBuf = function(buf, key, transOpt, cb){
    var self = this;
    var extra = new qiniu.io.PutExtra();
    //extra.params = params;
    //extra.mimeType = mimeType;
    //extra.crc32 = crc32;
    //extra.checkCrc = checkCrc;
    var uptoken = this.uptoken('china', transOpt);
    qiniu.io.put(uptoken, key, body, extra, function(err, ret) {
        if (!err) {
            // 上传成功， 处理返回值
            console.log(ret.key, ret.hash);
            // ret.key & ret.hash
            ret.url = self.origin + '/' + ret.key;
            if(cb) cb(null, ret);
        } else {
            // 上传失败， 处理返回代码
            console.log(err)
            if(cb) cb(err, null);
        }
    });
}

module.exports = qn;