import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import counterReducer from 'global/redux/counter/slice';
import authReducer from 'global/redux/auth/slice';

const store = configureStore(
  {
    reducer: {
      counter: counterReducer,
      auth   : authReducer,
    },
  },
  composeWithDevTools()
);

export { store };
