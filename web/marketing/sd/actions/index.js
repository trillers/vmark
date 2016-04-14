import {loadCatalogById, loadCatalogByProductIdAndMediaId} from './catalog';
import {addBespeak} from './bespeak';
import {productActions} from './product';

export var actions = {
    loadCatalogByProductIdAndMediaId,
    loadCatalogById,
    productActions,
    addBespeak
};