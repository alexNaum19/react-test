import {combineReducers} from 'redux';
import cartReducer from './cart/reducers';
import productsReducer from './products/reducers';

export default combineReducers({
  cart: cartReducer,
  products:productsReducer,
})