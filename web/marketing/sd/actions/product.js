'use strict'
//import {appDispatcher} from '../dispatcher';

let productActions = {};

productActions.loadProduct = function(id){
    return function(done){
        $.get(__app.settings.api.url + '/tenant/sd/course/_' + id).success(res=>{
                done({
                    name: 'loadProduct',
                    res
                });
            })
            .error(e=>{
                console.warn(e)
            })
    };
};
export {productActions};