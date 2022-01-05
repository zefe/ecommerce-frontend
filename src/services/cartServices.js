import { instance } from './axios';

const getProduct = (id) => {
    return instance.get(`/api/products/${id}`)
}


export default {
    getProduct,
}