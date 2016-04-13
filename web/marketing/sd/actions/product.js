'use strict'
//import {appDispatcher} from '../dispatcher';

let productActions = {};

productActions.loadProduct = function(id){
    return function(done){
        $.get(__app.settings.api.url + '/tenant/sd/course/_' + id).then(res=>{
                done({
                    name: 'loadProduct',
                    res
                });
            })
    };
};
export {productActions};