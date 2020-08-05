import { combineReducers } from "redux";
import productsReducer from "./products/productReducers";
import cartReducer from './cart/cartReducers';

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productsReducer,
});

export default rootReducer