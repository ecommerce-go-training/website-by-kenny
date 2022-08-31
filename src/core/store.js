import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import counterReducer from 'global/redux/counter/slice';

const store = configureStore(
  {
    reducer: {
      counter: counterReducer,
    },
  },
  composeWithDevTools()
);

export { store };
