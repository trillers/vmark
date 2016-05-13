"use strict";
import {} from 'jQuery';
import {} from 'wx';

import {app} from './app';
import {actions} from '../actions/index';
import {mixins} from '../mixins/index';
import {util} from './util';

require('../tag/catalog-app.html');
require('../tag/product-app.html');
require('../tag/test-detail.html');

window.app = app;
window.actions = actions;

Object.keys(mixins).forEach(key => {
    riot.mixin(key, mixins[key]);
});

let entry = riot.mount('*')[0];

app.entry = entry;

app.init();


