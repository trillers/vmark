export var loadCatalogById = id => dispatch =>{
    $.get(__app.settings.api.url + '/tenant/sd/catalog/_' + id)
        .then((res)=>{
            dispatch({
                name: 'loadCatalogById',
                res
            });
        })
        .catch(e=>{
            console.warn(e)
        })
};