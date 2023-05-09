import axios from 'axios';

const productApi = axios.create({
    baseURL: 'https://fakestoreapi.com/products'
});

export const getProducts = async () => {
    const response = await productApi.get('/products');
    return response.data;
}