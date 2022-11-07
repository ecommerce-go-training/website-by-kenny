import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { auth, cart, address } from 'global/redux';

const persistConfig = {
  key: 'root',
  storage,
};

const persistCart = persistReducer(persistConfig, cart);

const allReducer = combineReducers({
  auth,
  persistCart,
  address,
});

const rootReducer = (state, action) => {
  if (action.type === 'auth/logout') {
    /*eslint-disable-next-line*/
		state = undefined;
  }

  return allReducer(state, action);
};

export default rootReducer;
