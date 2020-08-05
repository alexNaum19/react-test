import axios from 'axios'
import {FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS} from "./productsTypes"

export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST
  }
}

export const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
  }
}

export const fetchProductsFailure = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
  }
}

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest())
    axios.get('http://demo3947282.mockable.io/product')
      .then(response => {
        dispatch(fetchProductsSuccess(response.data.data))
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchProductsFailure(errorMsg))
      })
  }
};
