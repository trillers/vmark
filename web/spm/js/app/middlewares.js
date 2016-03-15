exports.logger = function(app){
    return function(next){
        return function(){
            console.log('app is starting');
            next();
        }
    }
};

exports.listenToChange = function(app){
    return function(next){
        return function(){
            domain.action('createNotebookAction').onDone(function(res){
                var arr = app.notebooks || [];
                arr.push(res.notebook);
                app.notebooks = arr;
            });
            domain.action('updateLatestNotebook').onDone(function(res){
                app.latestnotebook = res.notebook;
                app.trigger('changeForUpdate');
            });
            domain.action('updateNotebook').onDone(function(data){
                app.notebooks = app.notebooks.map(function(notebook){
                    if(notebook._id === data.notebook.id){
                        return util.assign({}, notebook, data.notebook);
                    }
                    return notebook
                });
                app.trigger('change', {
                    error: data.error,
                    notebooks: app.notebooks
                });
            });
            domain.action('loadNoteDetail')
                .onDone(function(data){
                    if(data.error){
                        console.error('error occur.');
                    }
                    app.notebooks = app.notebooks.map(function(notebook){
                        if(notebook._id === data.notebook.id){
                            return util.assign({}, notebook, data.notebook);
                        }
                        return notebook
                    });
                });
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
