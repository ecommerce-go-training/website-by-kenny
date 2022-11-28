import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { auth, cart, address, product } from 'global/redux';

const persistConfig = {
  key: 'root',
  storage,
};

const persistCart = persistReducer(persistConfig, cart);
const persistProduct = persistReducer(persistConfig, product);

const allReducer = combineReducers({
  auth,
  cart   : persistCart,
  address,
  product: persistProduct,
});

const rootReducer = (state, action) => {
  return allReducer(state, action);
};

export default rootReducer;
