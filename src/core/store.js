import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer from './reducers';

const store = configureStore(
  {
    reducer   : rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  },
  composeWithDevTools()
);

const persistor = persistStore(store);

export { persistor, store };
