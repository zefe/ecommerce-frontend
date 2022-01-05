import { combineReducers } from 'redux';
import { cartReducer } from './cartReducers';

import { productListReducers, productDetailsReducer } from './productReducers';


export const rootReducer = combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducer,
    cart: cartReducer,
})