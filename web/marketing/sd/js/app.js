export var app = riot.observable();

app.views = {};

app.off('action').on('action', onAction);
function onAction(action){
    Object.keys(app.views).forEach(tagName=>{
        app.views[tagName].trigger(action.name, action.res);
    })
}