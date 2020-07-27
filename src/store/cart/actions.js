export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const CHANGE_PRODUCT_COUNT = 'CHANGE_PRODUCT_COUNT';

export const addProductToCart = (product) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: product
  }
};

export const removeProductFromCart = (index) => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: index
  }
};

export const changeProductCount = (params) => {
  return {
    type: CHANGE_PRODUCT_COUNT,
    payload: params
  }
};