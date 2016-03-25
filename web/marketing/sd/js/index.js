import {} from 'jQuery';
import {} from 'wx';

import {app} from './app';
import {actions} from '../actions/index';
import {mixins} from '../mixins/index';

console.log(wx);
require('../tag/catalog-index.html');
require('../tag/product.html');

window.app = app;
window.actions = actions;

Object.keys(mixins).forEach(key => {
    riot.mixin(key, mixins[key]);
});

let tags = riot.mount('*');
tags.forEach(tag=>{
    app.views[tag.name] = tag;
});

