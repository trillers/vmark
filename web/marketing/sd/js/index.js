import {} from 'jQuery';
import {} from 'wx';

import {app} from './app';
import {actions} from '../actions/index';
import * as AppStore from '../store/AppStore';
import {mixins} from '../mixins/index';
import {util} from './util';

require('../tag/catalog-app.html');
require('../tag/product-app.html');

window.app = app;
window.actions = actions;

Object.keys(mixins).forEach(key => {
    riot.mixin(key, mixins[key]);
});

let entry = riot.mount('*')[0];

app.entry = entry;

app.init();


