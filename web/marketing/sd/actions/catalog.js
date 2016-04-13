var baseUrl = __app.settings.api.url;

export var loadCatalogById = function(id){
    console.error('adsfasdfasdfasdfasdf');
    console.error(id);
    return function(done){
        return $.get(baseUrl + '/tenant/sd/catalog/_' + id)
            .success(res=>{
                console.error('adfad');
                done({
                    name: 'loadCatalogById',
                    res
                });
            })
            .error(e=>{
                console.warn(e.stack)
            })
    }
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



