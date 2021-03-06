import { types } from '../constants/userConstants';

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case types.USER_LOGIN_LOADING:
            return { loading: true }

        case types.USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload }

        case types.USER_LOGIN_ERROR:
            return { loading: false, error: action.payload }

        case types.USER_LOGOUT:
            return {}

        default:
            return state
    }
}

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case types.USER_REGISTER_LOADING:
            return { loading: true }

        case types.USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload }

        case types.USER_REGISTER_ERROR:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
