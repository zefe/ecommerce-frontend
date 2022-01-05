import { instance } from './axios';

const getProductList = () => {
    return instance.get('/api/products/')
}



export default {
    getProductList,
}