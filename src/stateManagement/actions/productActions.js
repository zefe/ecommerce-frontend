import { types } from '../constants/productConstants';
import productServices from '../../services/productServices';

export const listProducts = () => {
    return async(dispatch) => {
        try {
            dispatch({ type: types.PRODUCT_LIST_LOADING})
            const res = await productServices.getProductList();
            const data = res.data;
            dispatch({
                type: types.PRODUCT_LIST_SUCCESS,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: types.PRODUCT_LIST_ERROR,
                payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            })
        }
    }

}