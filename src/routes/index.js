module.exports = function(app){
    require('./favicon')(app);
    require('./heartbeat')(app);
    require('./static')(app);
    app.keys = ['keys', 'keykeys'];
    app.use(require('../middlewares/session')());
    require('./auth-wechat')(app);
    require('./auth')(app);
    require('../controllers')(app);

}
