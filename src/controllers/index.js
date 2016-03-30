module.exports = function(app){
    require('./tenant')(app);
    require('./api')(app);
    require('./modules')(app);
};
