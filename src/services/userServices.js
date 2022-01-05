import { instance, config } from './axios';

const login = (email, password) => {
    return instance.post(
        `/api/users/login/`,        
        { 'username': email, 'password': password },
        config    
    )
}



export default {
    login,
}