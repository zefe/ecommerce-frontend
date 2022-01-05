import userServices from '../../services/userServices';
import { types } from '../constants/userConstants';

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: types.USER_LOGIN_LOADING
        })

        const res = await userServices.login(email, password);
        const data = res.data;

        dispatch({
            type: types.USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: types.USER_LOGIN_ERROR,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const logout = () => (dispatch) =>{
    localStorage.removeItem('userInfo');
    dispatch({ type: types.USER_LOGOUT});

}

export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({
            type: types.USER_REGISTER_LOADING
        })

        const res = await userServices.register(name, email, password);
        const data = res.data;

        dispatch({
            type: types.USER_REGISTER_SUCCESS,
            payload: data
        })
        dispatch({
            type: types.USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: types.USER_REGISTER_ERROR,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}