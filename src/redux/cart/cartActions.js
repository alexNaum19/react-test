import {
  ADD_PRODUCT_TO_CART,
  CHANGE_PRODUCT_COUNT,
  REMOVE_PRODUCT_FROM_CART
} from "./cartTypes";

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
