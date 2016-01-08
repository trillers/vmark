var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var path = require('path');
var co = require('co');
var swig  = require('swig');
var cbUtil = require('../../../framework/callback');
var helper = require('../../common/services/helper');
//require('request').debug = true;

 var adHtml = '<div id="page_ad_banner" class="page_ads_item page_ad_banner" style="width: 100%; font-size: 0px; position: fixed; left: 0px; bottom: 0px;">   <div class="page_ads_close">   </div>   <div class="page_ads_content">   <a href="http://pandora.genshuixue.com/ap/info.json?id=cptad_44&amp;u=http%3A%2F%2Fm.genshuixue.com%2Fapp%2Fdw%3Fct%3DGenShuiXue_M2100013%26zn%3Dzn_appxiazai1_msite%26source%3Dcptad&amp;k=d7ROxgnOHX6Jngy3Wg9vVgsTnbRAnCmrnX9wWK6AnXR3nA/m0KOw0UhJMIRcjKmcZQn8MQROxK9XHb5qdbmcZQMzjbmhHA/7ZQ53dSROxK97nEhctgsanb6q0gROxKyqMIRcjKmhZQnzjbmrH1hzd7uhxKY=">       <img width="100%" height="100%" src="http://img.gsxservice.com/3410996_5oi1ifco.png">    </a></div></div>';

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
    var html = '';
    recontent.originalUrl = originalUrl;
    recontent.newUrl = '/public/uploads/' + publishUri;

    var rawStream = request.get(originalUrl);
    rawStream.on('data', function(chunk){html += chunk;});
    rawStream.on('end', function(){
        var $ = cheerio.load(html);
        var originalTitle = $('div#page-content .rich_media_title').text() || '未识别标题';
        recontent.originalTitle = originalTitle.replace(/\r\n/g, '').replace(/^\s+|\s+$/g, '');

        var imgQueue = new ImgQueue(articleId, imgBaseDir, '/public/uploads/images/', originalUrl);
        $('div.rich_media_content img').each(function(i, e){
            var src = $(this).attr('data-src');
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
//
//Service.prototype._generate = function(originalUrl, callback){
//    this._transformWechatArticle(originalUrl, callback);
//};
//
//Service.prototype._transformWechatArticle = function(originalUrl, callback){
//    var articleId = new Date().getTime();
//    var publishUri = '' + articleId + '.html';
//    var uploadPath = path.join(__dirname, '../../../../public/uploads/');
//    var articlePath = path.join(uploadPath, publishUri);
//    var imgBaseDir = path.join(uploadPath, './images/');
//    var html = '';
//
//    var rawStream = request.get(originalUrl);
//    rawStream.on('data', function(chunk){html += chunk;});
//    rawStream.on('end', function(){
//        var $ = cheerio.load(html);
//        var imgQueue = new ImgQueue(articleId, imgBaseDir, '/public/uploads/images/', originalUrl);
//        $('div.rich_media_content img').each(function(i, e){
//            var src = $(this).attr('data-src');
//            var img = imgQueue.add(src);
//            $(this).attr('src', img.newSrc);
//        });
//        imgQueue.download();
//        $('div.rich_media_content').after(adHtml);
//
//        fs.writeFile(articlePath, $.html(), function (err) {
//            callback(err, publishUri);
//        });
//    });
//};

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