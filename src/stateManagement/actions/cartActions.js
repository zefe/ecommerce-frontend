import cartServices from '../../services/cartServices';
import { types } from '../constants/cartConstants';


export const addToCart = (id, qty) => async (dispatch, getState) => {
    const res = await cartServices.getProduct(id);
    const data = res.data;

    dispatch({
        type: types.CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}



export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: types.CART_REMOVE_ITEM,
        payload: id,
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}


export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({
        type: types.CART_SAVE_SHIPPING_ADDRESS,
        payload: data,
    })

    localStorage.setItem('shippingAddress', JSON.stringify(data))
}

