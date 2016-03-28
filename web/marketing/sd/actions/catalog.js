var baseUrl = __app.settings.api.url;

export var loadCatalogById = id => callback =>{
    $.get(baseUrl + '/tenant/sd/catalog/_' + id)
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



