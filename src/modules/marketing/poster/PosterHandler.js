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
    , Image = Canvas.Image;

var getImgPaths = function(type, openid){
    return {
        bgImgPath: path.join(__dirname, '../../../../public/uploads/posters/' + type + '_bgImg_' + openid + '.png'),
        qrPath: path.join(__dirname, '../../../../public/uploads/posters/' + type + '_qr_' + openid + '.png'),
        posterPath: path.join(__dirname, '../../../../public/uploads/posters/' + type + '_poster_' + openid + '.png'),
        headImgPath: path.join(__dirname, '../../../../public/uploads/posters/' + type + '_headImg_' + openid + '.png')
    }
}

var getQrCode = function*(wechatApi, wechatId, type){
    var qrType = qrTypeRegistry.getQrType(type);
    var qr = yield qrType.createQrAsync({wechatId: wechatId});
    return {
        url: wechatApi.showQRCodeURL(qr.ticket),
        sceneId: qr.sceneId
    }
}

var getPosterMediaId = function*(wechatApi, posterPath, canvas){
    yield fs.writeFileAsync(posterPath, canvas.toBuffer());
    var imageData = yield wechatApi.uploadMediaAsync(posterPath, 'image');
    var mediaId = imageData[0].media_id;
    return mediaId;
}

var saveImg = function (url, savePath, callback) {
    request.get(url).pipe(fs.createWriteStream(savePath)).on('close', function () {
        callback(null, 'success');
    }).on('error', function (err) {
        callback(err, null);
    })
}

var saveImgAsync = Promise.promisify(saveImg);

var drawImg = function*(ctx, url, path, offsetX, offsetY, width, height, type){
    ctx.save();
    yield saveImgAsync(url, path);
    var ImgData = yield fs.readFileAsync(path);
    var img = new Image;
    img.src = ImgData;
    // Create a circular clipping path
    if(type === 'headImg') {
        ctx.beginPath();
        var r = width/2;
        var x = offsetX + r;
        var y = offsetY + r;
        ctx.arc(x, y, r, 0, Math.PI * 2, true);
        ctx.clip();
    }
    ctx.drawImage(img, offsetX, offsetY, width, height);
    ctx.closePath();
    ctx.restore();
}

var drawText = function*(ctx, text, offsetX, offsetY, maxWidth){
    ctx.save();
    ctx.font = "30px SimHei";
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText(text, offsetX, offsetY, maxWidth);
    ctx.restore();
}


var drawSdActivityPoster = function*(posterMeta, wechatId, bgImg){
    var qr = posterMeta.qr;
    var canvas = new Canvas(450, 800);
    var ctx = canvas.getContext('2d');
    var wechatApi = (yield wechatApiCache.get(wechatId)).api;
    var imgPaths = getImgPaths(PosterType.activity.value(), (new Date()).getTime());
    yield drawImg(ctx, bgImg, imgPaths.bgImgPath, 0, 0, 450, 800);
    yield drawImg(ctx, qr.url, imgPaths.qrPath, 150, 567, 150, 150);
    yield drawText(ctx, '长按图片识别二维码', 225, 738, 450);
    var mediaId = yield getPosterMediaId(wechatApi, imgPaths.posterPath, canvas);
    return  {err: null, mediaId: mediaId, sceneId: qr.sceneId, path: imgPaths.posterPath}
};

var drawSdParticipantPoster = function*(meta){
    try{
        var qr = meta.qr;
        var user = meta.user;
        var bgImg = meta.bgImg;
        var wechatId = meta.wechatId;
        var canvas = new Canvas(450, 800);
        var ctx = canvas.getContext('2d');
        var wechatApi = (yield wechatApiCache.get(wechatId)).api;
        var qrUrl = wechatApi.showQRCodeURL(qr.ticket);
        var imgPaths = getImgPaths(PosterType.sdParticipant.value(), user.openid);
        yield drawImg(ctx, bgImg, imgPaths.bgImgPath, 0, 0, 450, 800);
        yield drawImg(ctx, user.headimgurl, imgPaths.headImgPath, (450-80)/2, 24, 80, 80, 'headImg');
        yield drawText(ctx, user.nickname, 225, 115, 300);
        yield drawImg(ctx, qrUrl, imgPaths.qrPath, 150, 567, 150, 150);
        yield drawText(ctx, '长按图片识别二维码', 225, 738, 450);
        var mediaId = yield getPosterMediaId(wechatApi, imgPaths.posterPath, canvas);
        return  {mediaId: mediaId, fsPath: imgPaths.posterPath}
    }catch(e){
        console.log('Failed to draw sd poster');
        throw e;
    }
};

var createActivityPoster = function*(wechatId, bgImg){
    var canvas = new Canvas(450, 800);
    var ctx = canvas.getContext('2d');
    var wechatApi = (yield wechatApiCache.get(wechatId)).api;
    var imgPaths = getImgPaths(PosterType.activity.value(), (new Date()).getTime());
    var qr = yield getQrCode(wechatApi, wechatId, PosterType.activity.value());
    yield drawImg(ctx, bgImg, imgPaths.bgImgPath, 0, 0, 450, 800);
    yield drawImg(ctx, qr.url, imgPaths.qrPath, 150, 567, 150, 150);
    yield drawText(ctx, '长按图片识别二维码', 225, 738, 450);
    var mediaId = yield getPosterMediaId(wechatApi, imgPaths.posterPath, canvas);
    return  {err: null, mediaId: mediaId, sceneId: qr.sceneId, path: imgPaths.posterPath}
}
var createParticipantPoster = function*(wechatId, bgImg, user){
    var canvas = new Canvas(450, 800);
    var ctx = canvas.getContext('2d');
    var wechatApi = (yield wechatApiCache.get(wechatId)).api;
    var imgPaths = getImgPaths(PosterType.participant.value(), user.openid);
    var qr = yield getQrCode(wechatApi, wechatId, PosterType.participant.value());
    yield drawImg(ctx, bgImg, imgPaths.bgImgPath, 0, 0, 450, 800);
    yield drawImg(ctx, user.headimgurl, imgPaths.headImgPath, (450-80)/2, 24, 80, 80, 'headImg');
    yield drawText(ctx, user.nickname, 225, 115, 300);
    yield drawImg(ctx, qr.url, imgPaths.qrPath, 150, 567, 150, 150);
    yield drawText(ctx, '长按图片识别二维码', 225, 738, 450);
    var mediaId = yield getPosterMediaId(wechatApi, imgPaths.posterPath, canvas);
    return  {err: null, mediaId: mediaId, sceneId: qr.sceneId, path: imgPaths.posterPath}
}

module.exports = {
    getImgPaths: getImgPaths,
    getQrCode: getQrCode,
    drawText: drawText,
    drawImg: drawImg,
    getPosterMediaId: getPosterMediaId,
    createActivityPoster: createActivityPoster,
    drawSdActivityPoster: drawSdActivityPoster,
    drawSdParticipantPoster: drawSdParticipantPoster,
    createParticipantPoster: createParticipantPoster
}



