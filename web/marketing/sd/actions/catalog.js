var baseUrl = __app.settings.api.url;

export var loadCatalogById = id =>{
    return $.get(baseUrl + '/tenant/sd/catalog/_' + id)
        .then((res)=>{
            return {
                name: 'loadCatalogById',
                res
            };
        })
        .catch(e=>{
            console.warn(e.stack)
        })
};



