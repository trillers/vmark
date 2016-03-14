var PosterType = require('../../common/models/TypeRegistry').item('PosterType');
var wechatApi = require('../../wechat/common/api').api;
var qrRegistry = require('../../wechatsite/qr');
var request = require('request');
var Promise = require('bluebird');
var co = require('co');
var fs = Promise.promisifyAll(require('fs'));
var path = require('path');

var Canvas = require('canvas')
    , Image = Canvas.Image
    , canvas = new Canvas(600, 900)
    , ctx = canvas.getContext('2d');

var Handler = function (type) {
    this.type = type;
}

Handler.prototype.create = function*(bgImg, user) {
    if (bgImg) {
        try {
            var qrType = null;
            var qr = null;
            var qrCodeUrl = '';
            var bgImgPath = path.join(__dirname, '../../../../public/uploads/posters/' + this.type + '_bgImg_' + user.openid + '.png');
            var qrPath = path.join(__dirname, '../../../../public/uploads/posters/' + this.type + '_qr_' + user.openid + '.png');
            var posterPath = path.join(__dirname, '../../../../public/uploads/posters/' + this.type + '_poster_' + user.openid + '.png');
            var headImgPath = path.join(__dirname, '../../../../public/uploads/posters/' + this.type + '_headImg_' + user.openid + '.png');
            yield drawImg(bgImg, bgImgPath, 0, 0, 600, 900);

            if (this.type === PosterType.participant.value()) {
                if(!user || !user.headimgurl){
                    return {err: 'headImg is required'}
                }
                qrType = qrRegistry.getQrType('pap');
                qr = yield qrType.createQrAsync();
                qrCodeUrl = wechatApi.showQRCodeURL(qr.ticket);
                yield drawImg(qrCodeUrl, qrPath, 0, 300, 200, 200);
                yield drawImg(user.headimgurl, headImgPath, 0, 150, 150, 150);
            } else if(this.type === PosterType.activity.value()){
                qrType = qrRegistry.getQrType('acp');
                qr = yield qrType.createQrAsync();
                qrCodeUrl = wechatApi.showQRCodeURL(qr.ticket);
                yield drawImg(qrCodeUrl, qrPath, 0, 300, 200, 200);
            }
            yield fs.writeFileAsync(posterPath, canvas.toBuffer());
            var imageData = yield wechatApi.uploadMediaAsync(posterPath, 'image');
            var mediaId = imageData[0].media_id;
            return {err: null, mediaId: mediaId, sceneId: qr.sceneId, path: posterPath}
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