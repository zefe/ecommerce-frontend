import { combineReducers } from 'redux';

import { productListReducers, productDetailsReducer } from './productReducers';


export const rootReducer = combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducer,
})