import {ADD_PRODUCT_TO_CART, CHANGE_PRODUCT_COUNT, REMOVE_PRODUCT_FROM_CART} from "./cartTypes";

const initialState = {
  items: [
    {
      id:1,
      imageId:1,
      title: "apple",
      price: '2',
      count: 10
    }
  ]
};

const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PRODUCT_TO_CART:
      return {...state, items: state.items.concat([action.payload])};
    case REMOVE_PRODUCT_FROM_CART:
      return {...state, items: state.items.filter((item, i) => i !== action.payload)};
    case CHANGE_PRODUCT_COUNT:
      return {
        ...state,
        items: state.items.map((item, i) => {
          if (action.payload.index === i) item.count = action.payload.count;
          return item
        })
      }
    default: return state;
  }
}

export default cartReducer;