var PosterType = require('../../common/models/TypeRegistry').item('PosterType');
var wechatApi = require('../../wechat/common/api').api;
var qrRegistry = require('../../wechatsite/qr');
var bgImgPath = __dirname + '/images/bgImg.png';
var qrPath = __dirname + '/images/qr.png';
var posterPath = __dirname + '/images/poster.png';
var headImgPath = __dirname + '/images/headImg.png';
var request = require('request');
var Promise = require('bluebird');
var co = require('co');
var fs = Promise.promisifyAll(require('fs'));

var Canvas = require('canvas')
    , Image = Canvas.Image
    , canvas = new Canvas(600, 900)
    , ctx = canvas.getContext('2d');

var Handler = function (type) {
    this.type = type;
}

Handler.prototype.create = function*(bgImg, userHeadImg) {
    if (bgImg) {
        try {
            yield drawImg(bgImg, bgImgPath, 0, 0, 600, 900);
            var qrType = null;
            var qr = null;
            var qrCodeUrl = '';
            if (this.type === PosterType.participant.value()) {
                if(!userHeadImg){
                    return {err: 'headImg is required'}
                }
                qrType = qrRegistry.getQrType('pap');
                qr = yield qrType.createQrAsync();
                qrCodeUrl = wechatApi.showQRCodeURL(qr.ticket);
                yield drawImg(qrCodeUrl, qrPath, 0, 300, 200, 200);
                yield drawImg(userHeadImg, headImgPath, 0, 150, 150, 150);
            } else if(this.type === PosterType.activity.value()){
                qrType = qrRegistry.getQrType('acp');
                qr = yield qrType.createQrAsync();
                qrCodeUrl = wechatApi.showQRCodeURL(qr.ticket);
                yield drawImg(qrCodeUrl, qrPath, 0, 300, 200, 200);
            }
            yield fs.writeFileAsync(posterPath, canvas.toBuffer());
            var imageData = yield wechatApi.uploadMediaAsync(posterPath, 'image');
            var mediaId = imageData[0].media_id;
            return {err: null, mediaId: mediaId, sceneId: qr.sceneId}
        } catch (err) {
            return {err: err};
        }
    } else {
        return {err: 'bgImg is required'}
    }
}

var drawImg = function*(url, path, offsetX, offsetY, width, height){
    yield saveImgAsync(url, path);
    var ImgData = yield fs.readFileAsync(path);
    var img = new Image;
    img.src = ImgData;
    ctx.drawImage(img, offsetX, offsetY, width, height);
}

var saveImg = function (url, savePath, callback) {
    request.get(url).pipe(fs.createWriteStream(savePath)).on('close', function () {
        callback(null, 'success');
    }).on('error', function (err) {
        callback(err, null);
    })
}

var saveImgAsync = Promise.promisify(saveImg);

module.exports = Handler;