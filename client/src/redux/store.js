import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const middleware = [thunk];

const initialState = {
  userRegister: { userRegisterInfo: { message: null }, error: null },
  userLogin: {
    userLoginInfo: { message: null, token: null, email: null },
    error: null,
  },
  productList: { products: [] },
  productDetails: { product: { reviews: [] } },
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
