import {} from 'jQuery';
import {} from 'wx';
import {productAction} from '../actions/product';

console.log(wx);
require('../tag/catalog-index.html');
require('../tag/product.html');

console.log($);
window.productAction = productAction;

let tags = riot.mount('*');
