import PinapleImg from "../../static/icons8-pineapple-40.png";
import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  CHANGE_PRODUCT_COUNT
} from './actions';

const defaultState = {
  cart: [
    {
      id:1,
      imageId:1,
      title: "apple",
      price: '2',
      count: 10,
      img:PinapleImg
    }
  ]
};

const cartReducer = (state = defaultState, action) => {
  switch(action.type) {
    case ADD_PRODUCT_TO_CART:
      return {...state, cart: state.cart.concat([action.payload])};
    case REMOVE_PRODUCT_FROM_CART:
      return {...state, cart: state.cart.filter((item, i) => i !== action.payload)};
    case CHANGE_PRODUCT_COUNT:
      return {
        ...state,
        cart: state.cart.map((item, i) => {
          if (action.payload.index === i) item.count = action.payload.count;
          return item
        })
      }
    default: return state;
  }
}

export default cartReducer;