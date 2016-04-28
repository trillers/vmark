var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var iconv = require('iconv-lite');
var path = require('path');
var co = require('co');
var swig  = require('swig');
var cbUtil = require('../../../framework/callback');
var helper = require('../../common/services/helper');
//require('request').debug = true;

var ImgQueue = function(id, targetBaseDir, targetBaseUrl, originalReferer){
    this.queue = [];
    this.id = id;
    this.seq = id*1000;
    this.targetBaseDir = targetBaseDir;
    this.targetBaseUrl = targetBaseUrl;
    this.originalReferer = originalReferer;
};

ImgQueue.prototype = {
    getExt: function(src) {
        var regex = new RegExp("[\\?&]" + 'wx_fmt' + "=([^&#]*)");
        var results = regex.exec(src);
        return results === null ? '' : results[1];
    },
    add: function(src){
        var ext = this.getExt(src) || 'jpeg';
        var id = ++this.seq;
        var img = {
            id: id,
            src: src,
            ext: ext,
            newSrc: this.targetBaseUrl + id + '.' + ext
        };
        this.queue.push(img);
        return img;
    },
    downloadImg: function(img){
        try{
            var filePath = this.targetBaseDir + img.id + '.' + img.ext;
            var httpStream = request({
                url: img.src,
                method: 'GET',
                headers: {
                    'accept': 'image/webp,image/*,*/*;q=0.8',
                    'referer': this.originalReferer,
                    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36'
                }
            });

            var fileStream = fs.createWriteStream(filePath);
            httpStream.pipe(fileStream);
        }
        catch(e){
            console.error(e);
        }
    },
    download: function(){
        var len = this.queue.length;
        for(var i=0; i<len; i++){
            this.downloadImg(this.queue[i]);
        }
    }
};

var Service = function(context){
    this.context = context;
};

Service.prototype.generate = function(form, callback){
    var adlinkService = this.context.services.adlinkService;
    var originalUrl = form.originalUrl;
    var adlinkId = form.adlink;
    var tenantId = form.tenantId;
    var me = this;
    co(function* (){
        var adlink = yield adlinkService.loadByIdAsync(adlinkId);
        var adHtml = yield me.renderAdlinkAsync(adlink);
        var recontentJson = yield me.transformWechatArticleAsync(originalUrl, adHtml);
        recontentJson.org = tenantId;
        recontentJson.adLink = adlinkId;
        recontentJson.adName = adlink.name;
        var recontent = yield me.createAsync(recontentJson);
        if(callback) callback(null, recontent);
    }).catch(Error, function(err){
        me.context.logger.error(err);
        if(callback) callback(err);
    });
};

Service.prototype.renderAdlink = function(adlink, callback){
    var templatePath = path.join(__dirname, '../templates/adlink.html');
    var adHtml = swig.renderFile(templatePath, adlink);
    callback(null, adHtml);
};

Service.prototype.transformWechatArticle = function(originalUrl, adHtml, callback){
    var recontent = {};
    var articleId = new Date().getTime();
    var publishUri = '' + articleId + '.html';
    var uploadPath = path.join(__dirname, '../../../../public/uploads/');
    var articlePath = path.join(uploadPath, publishUri);
    var imgBaseDir = path.join(uploadPath, './images/');
    recontent.originalUrl = originalUrl;
    recontent.newUrl = '/public/uploads/' + publishUri;

    var options = {url: originalUrl, encoding: null};
    request.get(options, function (err, res, body) {
        var html = body.toString();
        var $ = cheerio.load(html, {decodeEntities: false});
        var originalTitle = $('div#page-content .rich_media_title').text() || '未识别标题';
        recontent.originalTitle = originalTitle.replace(/\r\n/g, '').replace(/^\s+|\s+$/g, '');

        var imgQueue = new ImgQueue(articleId, imgBaseDir, '/public/uploads/images/', originalUrl);
        $('div.rich_media_content img').each(function(i, e){
            var dataSrc = $(this).attr('data-src');
            var src = dataSrc || $(this).attr('src');
            var img = imgQueue.add(src);
            $(this).attr('src', img.newSrc);
        });
        imgQueue.download();
        $('div.rich_media_content').after(adHtml);

        fs.writeFile(articlePath, $.html(), function (err) {
            callback(err, recontent);
        });
    });
};

Service.prototype.create = function(json, callback){
    var Recontent = this.context.models.Recontent;
    var recontent = new Recontent(json);

    recontent.save(function (err, result, affected) {
        cbUtil.logCallback(
            err,
            'Fail to save recontent: ' + err,
            'Succeed to save recontent');

        cbUtil.handleAffected(function(err, doc){
            var obj = !err && doc && doc.toObject({virtuals: true});
            if(callback) callback(err, obj);
        }, err, result, affected);
    });
};

Service.prototype.findTenantRecontents = function(tenantId, callback){
    var Recontent = this.context.models.Recontent;
    var filter = helper.generateFilter(Recontent);
    var params = {
        conditions: {
            org: tenantId
        },
        sort: {lFlg: 1, crtOn: -1}
    };
    filter(params, callback);
};


module.exports = Service;