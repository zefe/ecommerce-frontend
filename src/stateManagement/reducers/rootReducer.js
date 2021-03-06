import { combineReducers } from 'redux';
import { cartReducer } from './cartReducers';

import { productListReducers, productDetailsReducer } from './productReducers';
import { userLoginReducer, userRegisterReducer } from './userReducers';


export const rootReducer = combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
})