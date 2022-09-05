import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import authReducer from 'global/redux/auth/slice';
import counterReducer from 'global/redux/counter/slice';

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
