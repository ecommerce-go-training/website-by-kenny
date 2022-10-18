import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import authReducer from 'global/redux/auth/slice';

const store = configureStore(
  {
    reducer: {
      auth: authReducer,
    },
  },
  composeWithDevTools()
);

export { store };
