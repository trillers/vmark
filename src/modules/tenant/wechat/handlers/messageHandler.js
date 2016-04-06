
module.exports = function(emitter){
    emitter.message(function(event, context){
        console.warn(context);
    });
};