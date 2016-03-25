export var loadCatalogById = id => callback =>{
    $.get(__app.settings.api.url + '/tenant/sd/catalog/_' + id)
        .then((res)=>{
            callback({
                name: 'loadCatalogById',
                res
            });
        })
        .catch(e=>{
            console.warn(e)
        })
};