import {appDispatcher} from '../dispatcher';

let appStore = {};

let loadProduct = (actionType, id) => {
    $.get(__app.settings.api.url + '/tenant/sd/course/_' + id)
        .then((data)=>{
            appStore.done(actionType, data);
        })
        .catch(e=>{
            console.warn(e)
        })
}

appStore.done = (actionType, data) => {
    Object.keys(app.views).forEach(tagName=>{
        app.views[tagName].trigger(actionType, data);
    })
}

appDispatcher.registry(action => {
    switch (action.actionType){
        case 'loadProduct':
            loadProduct(action.actionType, action.id);
            break;
    }
})