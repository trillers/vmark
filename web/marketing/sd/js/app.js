import * as _ from './util';

export var app = riot.observable();

app.entry = null;

app.init = function(){
    app._doActionBinding();
}

app._doActionBinding = function(){
    app.off('action').on('action', action=>{
        app.entry.trigger(action.name, action.res);
        recursiveOnAction(app.entry, action);
    });
    function recursiveOnAction(tag, action){
        if(!Object.keys(tag.tags).length){
            return;
        }
        Object.keys(tag.tags).forEach(k=>{
            let childTag = tag.tags[k];
            if(!childTag){
                return;
            }
            if(!Array.isArray(childTag)){
                childTag.trigger(action.name, action.res);
                recursiveOnAction(childTag, action);
            }else{
                childTag.forEach(t=>{
                    t.trigger(action.name, action.res);
                    recursiveOnAction(t, action);
                });
            }
        })
    }
};