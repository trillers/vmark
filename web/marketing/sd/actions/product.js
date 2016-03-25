'use strict'

let productAction = riot.observable({});

productAction.get = () =>{
    productAction.trigger('done', 'abc');
}
export {productAction};