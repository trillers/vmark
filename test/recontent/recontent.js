var request = require('request');
var fs = require('fs');
var cheerio = require('cheerio');

//var readableStream = fs.createReadStream('/Users/henryleu/Downloads/adidas tui/impbcopy.m');
//var writableStream = fs.createWriteStream('/Users/henryleu/Downloads/adidas tui/clipboard.jpg')
//readableStream.pipe(writableStream);
//http://mp.weixin.qq.com/s?__biz=MjM5ODc3MTAwMQ==&mid=401361248&idx=1&sn=f38a0973bc191558508ccdce777b5844&3rd=MzA3MDU4NTYzMw==&scene=6#rd
var url = 'http://mmbiz.qpic.cn/mmbiz/UUwjicObpT3qOVefOcSC0txOWebibLnSvLleo5qd9TuibF8TIic6Y6826sk2VDIgEyKbqTfPATzYO6sXvSMZQMyibZQ/640?wx_fmt=jpeg';
var url2 = 'https://mp.weixin.qq.com/s?__biz=MjM5NzAxNTkzNg==&mid=405254434&idx=3&sn=62399b8965f060303d0e5468e8193d25&scene=1&srcid=1225QLQOmvn0lVQcPIvVmZ06&key=62bb001fdbc364e5a8375026fbe23cc887e223b765364b70c1db7badaa9d33692ff5bad835e1251c66b5671ac27928ec&ascene=0&uin=MTAyMzgzNTEyMg%3D%3D&devicetype=iMac+MacBookPro11%2C4+OSX+OSX+10.10.5+build(14F27)&version=11020012&pass_ticket=SyacN7GM061%2Bg9PWqg42pzrmR4Yb4kQ5VhVARR8nNP%2BKoRbJGMbBfB8w0WSWiLUM';
var downloadPath = '/Users/henryleu/Downloads/adidas tui/download-content.jpeg';
var downloadPath2 = '/Users/henryleu/Downloads/adidas tui/download-content2.html';


request.get(url).pipe(fs.createWriteStream(downloadPath));

//var rawStream = request.get(url);
//var html = '';
//rawStream.on('data', function(chunk){
//    html +=chunk;
//});
//rawStream.on('end', function(){
//    var $ = cheerio.load(html);
//    $('div.rich_media_content img').each(function(i, e){
//        $(this).attr('src', $(this).attr('data-src'));
//    });
//
//    var transformedHtml = $.html();
//    console.log(transformedHtml);
//    var stream = fs.createWriteStream(downloadPath);
//    stream.once('open', function(fd) {
//        stream.write(transformedHtml);
//        stream.end();
//    });
//});

//rawStream.pipe(fs.createWriteStream(downloadPath2));

/*
 <img data-type="gif" data-src="http://mmbiz.qpic.cn/mmbiz/9ZVA77oiaadqwgC3DiaePek5Eia23DW9IM09YfQk1tXicfvVPrsRJlbCEMWfqkbVVRg85qcsX0JLtqMO05UwKhqvQQ/0?wx_fmt=gif" data-ratio="0.56" data-w="350" src="http://mmbiz.qpic.cn/mmbiz/9ZVA77oiaadqwgC3DiaePek5Eia23DW9IM09YfQk1tXicfvVPrsRJlbCEMWfqkbVVRg85qcsX0JLtqMO05UwKhqvQQ/0?wx_fmt=gif&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1" style="width: auto !important; visibility: visible !important; height: auto !important;">
 */