import { ADD_PRODUCT_CART, GET_PRODUCT_CART } from '../actions/types';

const initialState = {
  cartNumber: 0,
  products_in_cart: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_CART:
      return {
        cartNumber: state.cartNumber + 1,
        products_in_cart: [...state.products_in_cart, action.payload],
      };
    case GET_PRODUCT_CART:
      return {
        ...state,
      };
    default:
      return state;
  }
};
