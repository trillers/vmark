var baseUrl = __app.settings.api.url + '/tenant/sd/catalog';

export var loadCatalogById = id => {
    return $.get(baseUrl + '/_' + id)
        .then(res=>{
            return {
                name: 'loadCatalogById',
                res
            };
        })
        .catch(e=>{
            console.warn(e.stack);
        })
};

export var loadCatalogByProductIdAndMediaId = (productId, mediaId) => {
    return $.get(baseUrl + '?product=' + productId + '&media=' + mediaId)
        .then(res=>{
            return {
                name: 'loadCatalogByProductIdAndMediaId',
                res
            };
        })
        .catch(e=>{
            console.warn(e.stack);
        })
};



