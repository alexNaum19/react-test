import axios from 'axios'
const API_URL  = 'http://demo3947282.mockable.io/product';

export const getListProducts = () => {
  return axios.get(API_URL)
}


export const productsApi = {
  getListProducts,
}
