/* eslint-disable no-case-declarations */
import ProductScreen from '../../screens/ProductScreen';
import { cartConstants } from '../types';

const { CART_ADD_ITEM, CART_REMOVE_ITEM } = cartConstants;

export const cartReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case CART_ADD_ITEM:
      const item = payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, item],
      };

    default:
      return state;
  }
};
