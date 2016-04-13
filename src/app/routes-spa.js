var setBasics = require('../middlewares/basics');
var setLocals = require('../middlewares/locals');
//var checkauth = require('../middlewares/checkauth');

var wechatConfiguring = require('../middlewares/wechat-configuring');
module.exports = function(router){
    //router.use(checkauth);
    router.use(setBasics);
    router.use(setLocals);
    router.use(wechatConfiguring);
};