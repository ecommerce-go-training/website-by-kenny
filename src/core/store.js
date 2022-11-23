import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import Env from 'config/env';

import rootReducer from './reducers';

const store = configureStore(
  {
    reducer   : rootReducer,
    devTools  : Env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  },
  composeWithDevTools()
);

const persistor = persistStore(store);

export { persistor, store };
