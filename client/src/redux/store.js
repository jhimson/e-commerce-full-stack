import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const middleware = [thunk];

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const initialState = {
  userRegister: { userRegisterInfo: { message: null }, error: null },
  userLogin: {
    userLoginInfo: { message: null, token: null, email: null },
    error: null,
  },
  productList: { products: [] },
  productDetails: { product: { reviews: [] } },
  cart: { cartItems: cartItemsFromStorage },
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
