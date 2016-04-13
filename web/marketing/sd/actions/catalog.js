var baseUrl = __app.settings.api.url;

export var loadCatalogById = id => {
    return $.get(baseUrl + '/tenant/sd/catalog/_' + id)
        .then(res=>{
            done({
                name: 'loadCatalogById',
                res
            });
        })
        .catch(e=>{
            console.warn(e.stack)
        })
};
//export var loadCatalogById = id = done =>{
//    return $.get(baseUrl + '/tenant/sd/catalog/_' + id)
//        .success(res=>{
//            done({
//                name: 'loadCatalogById',
//                res
//            });
//        })
//        .error(e=>{
//            console.warn(e.stack)
//        })
//};



