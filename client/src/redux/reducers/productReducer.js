import { productConstants } from '../types';

const {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} = productConstants;

export const productListReducer = (
  state = { products: [] },
  { type, payload }
) => {
  switch (type) {
    case PRODUCT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        products: [],
      };

    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload,
      };

    case PRODUCT_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
