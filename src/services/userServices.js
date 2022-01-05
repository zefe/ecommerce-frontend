import { instance, config } from './axios';

const login = (email, password) => {
    return instance.post(
        `/api/users/login/`,        
        { 'username': email, 'password': password },
        config    
    )
}

const register = (name, email, password) => {
    return instance.post(
        `/api/users/register/`,        
        { 'name': name, 'email': email, 'password': password },
        config    
    )
}



export default {
    login,
    register,
}