import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import storage from 'redux-persist/lib/storage';

import authReducer from 'global/redux/auth/slice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore(
  {
    reducer: {
      auth: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  },
  composeWithDevTools()
);

const persistor = persistStore(store);

export { persistor, store };
