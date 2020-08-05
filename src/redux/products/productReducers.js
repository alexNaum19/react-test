import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from "./productsTypes";

const initialState = {
  loading: false,
  products: [{
    count: 1,
    imageId: 1,
    title: '',
    price: '',
    id: Math.floor(Math.random() * (10000 - 1) + 1),
  }],
  error: ''
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
        error: ''
      }
    case FETCH_PRODUCTS_FAILURE:
      return {
        loading: false,
        products: [],
        error: action.payload
      }
    default:
      return state
  }
}

export default productReducer