import { ADD_PRODUCT_CART } from './types';

export const addCart = (product_name) => {
  return (dispatch) => {
    console.log('Added to Cart');
    console.log('Product: ', product_name);
    dispatch({
      type: ADD_PRODUCT_CART,
      payload: product_name,
    });
  };
};
