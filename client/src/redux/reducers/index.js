import { combineReducers } from 'redux';

//! REDUCERS
import { userRegisterReducer, userLoginReducer } from './userReducer';

import { productListReducer, productDetailsReducer } from './productReducer';

import { cartReducer } from './cartReducers';
//!

const rootReducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

export default rootReducer;
