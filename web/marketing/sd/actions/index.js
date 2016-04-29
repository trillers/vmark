import {loadCatalogById, loadCatalogByProductIdAndMediaId} from './catalog';
import {addBespeak, loadBespeakByUserId} from './bespeak';
import {productActions} from './product';
import {loadPersonalInfoByUserId} from './membership';

export var actions = {
    loadCatalogByProductIdAndMediaId,
    loadCatalogById,
    productActions,
    addBespeak,
    loadPersonalInfoByUserId
};