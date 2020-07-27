import {
  SET_PRODUCTS,
} from './actions';

const defaultState = {
  productsList: [
    {
      id:1,
      imageId:1,
      title: "apple",
      price: '2',
      count: 10,
      img:null
    }
  ]
};

const productsReducer = (state = defaultState, action) => {
  switch(action.type) {
    case SET_PRODUCTS:
      console.log('p', action)
      return {...state, productsList: action.payload.data};
    default: return state;
  }
}

export default productsReducer;