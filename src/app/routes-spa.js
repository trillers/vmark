var setBasics = require('../middlewares/basics');
var setLocals = require('../middlewares/locals');
module.exports = function(router){
    router.use(setBasics);
    router.use(setLocals);
};
