exports.logger = function(app){
    return function(next){
        return function(){
            console.log('app is starting');
            next();
        }
    }
};

exports.loadNotebooksByUserId = function(app){
    return function(next){
        return function(){
            domain.action('loadNotebooksByUserId')
                .newInvocation({
                    userId: __page.user.id
                })
                .onDone(function(data){
                    if(data.error){
                        return alert('error occur!');
                    }
                    app.notebooks = data.notebooks;
                    app.latestnotebook = data.latestNotebook;
                    next();
                })
                .execute();
        }
    }
};

exports.applyMiddlewares = function(){
    var fns = [].slice.apply(arguments);
    return function(boot){
        var next = boot;
        fns.map(function(fn){
            next = fn.apply(null, [next])
        });
        next();
    }
};
