import { combineReducers } from 'redux';

import { productListReducers } from './productReducers';


export const rootReducer = combineReducers({
    productList: productListReducers,
})