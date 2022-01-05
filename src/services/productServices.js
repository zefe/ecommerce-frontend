import { instance } from './axios';

const getProductList = () => {
    return instance.get('/api/products/')
}

const getProduct = (id) => {
    return instance.get(`/api/products/${id}`)
}



export default {
    getProductList,
    getProduct,
}