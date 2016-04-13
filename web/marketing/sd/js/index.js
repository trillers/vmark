import {} from 'jQuery';
import {} from 'wx';

import {app} from './app';
import {actions} from '../actions/index';
import * as AppStore from '../store/AppStore';
import {mixins} from '../mixins/index';

require('../tag/catalog-index.html');
require('../tag/product.html');

window.app = app;
window.actions = actions;

Object.keys(mixins).forEach(key => {
    riot.mixin(key, mixins[key]);
});

console.error(riot);
let tags = riot.mount('*');
console.log(tags);
tags.forEach(tag=>{
    app.views[tag.name] = tag;
});

