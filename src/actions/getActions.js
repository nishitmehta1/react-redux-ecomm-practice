import { GET_PRODUCT_CART } from './types';

export const getCart = () => {
  return (dispatch) => {
    console.log('Getting from Cart');
    dispatch({
      type: GET_PRODUCT_CART,
    });
  };
};
