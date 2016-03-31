var url = "http://www.baidu.com/%s/111";
var test = require('url').format(url, '222');
console.log(test)
