var setBasics = require('../middlewares/basics');
var setLocals = require('../middlewares/locals');
var wechatConfiguring = require('../middlewares/wechat-configuring');
module.exports = function(router){
    router.use(setBasics);
    router.use(setLocals);
    router.use(wechatConfiguring);
};
