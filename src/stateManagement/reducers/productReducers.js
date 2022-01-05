import { types } from '../constants/productConstants';

const initialState = {
    loading: false,
    products: [],
}

export const productListReducers = ( state=initialState, action) => {
    switch (action.type) {
        case types.PRODUCT_LIST_LOADING:
            return {
                ...state,
                loading: true,
                products:[],
            }
        case types.PRODUCT_LIST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case types.PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload
            }
    
        default:
            return state;
    }
}
