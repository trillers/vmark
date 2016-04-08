var PosterType = require('../../common/models/TypeRegistry').item('PosterType');
var wechatApiCache = require('../../tenant/wechat/api-cache');
var qrTypeRegistry = require('../../wechatsite/qr/QrTypeRegistries').tenantQrTypeRegistry;
require('../../wechatsite/qr/qr-center');

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
};

Handler.prototype.create = function*(wechatId, bgImg, user) {
    if (bgImg) {
        if(!user){
            user = {
                openid: 'temp_user001'
            }
        }
        try {
            var wechatApi = (yield wechatApiCache.get(wechatId)).api;
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
                qrType = qrTypeRegistry.getQrType('pap');
                qr = yield qrType.createQrAsync({wechatId: wechatId});
                qrCodeUrl = wechatApi.showQRCodeURL(qr.ticket);
                yield drawImg(qrCodeUrl, qrPath, 150, 500, 300, 300);
                yield drawImg(user.headimgurl, headImgPath, 200, 100, 200, 200, 'headImg');
                yield drawText(user.nickname, 300, 350, 600);
                yield drawText('长按图片识别二维码', 300, 850, 600);
            } else if(this.type === PosterType.activity.value()){
                qrType = qrTypeRegistry.getQrType('acp');
                qr = yield qrType.createQrAsync({wechatId: wechatId});
                qrCodeUrl = wechatApi.showQRCodeURL(qr.ticket);
                yield drawImg(qrCodeUrl, qrPath, 150, 300, 300, 300);
                yield drawText('长按图片识别二维码', 300, 650, 600);
            }
            yield fs.writeFileAsync(posterPath, canvas.toBuffer());
            var imageData = yield wechatApi.uploadMediaAsync(posterPath, 'image');
            var mediaId = imageData[0].media_id;
            return {err: null, mediaId: mediaId, sceneId: qr.sceneId, path: posterPath}
        } catch (err) {
            console.error(err.stack)
            return {err: err};
        }
    } else {
        return {err: 'bgImg is required'}
    }
}

var drawImg = function*(url, path, offsetX, offsetY, width, height, type){
    ctx.save();
    yield saveImgAsync(url, path);
    var ImgData = yield fs.readFileAsync(path);
    var img = new Image;
    img.src = ImgData;
    // Create a circular clipping path
    if(type === 'headImg') {
        ctx.beginPath();
        ctx.arc(300, 200, 100, 0, Math.PI * 2, true);
        ctx.clip();
    }
    ctx.drawImage(img, offsetX, offsetY, width, height);
    ctx.closePath();
    ctx.restore();
}

var drawText = function*(text, offsetX, offsetY, maxWidth){
    ctx.save();
    ctx.font = "30px 'Arial Unicode MS'";
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText(text, offsetX, offsetY, maxWidth);
    ctx.restore();
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