import 'services/i18n';
import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';

import ScrollToTop from 'components/ScrollToTop';
import PrivateRoute from 'components/PrivateRoute';
import InternetCheck from 'components/InternetCheck';

import { store, persistor } from './store';
import { privateRoutes, publicRoutes } from 'routes';

import 'assets/scss/global.scss';
import 'assets/scss/normalize.scss';

const App = () => {
  return (
    <Provider store={store}>
      <ToastContainer
        autoClose={2000}
        closeButton={true}
        position='top-right'
        theme='light'
        hideProgressBar
      />
      <InternetCheck />
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <ScrollToTop>
            <Routes>
              {publicRoutes.map((item, index) => (
                <Route
                  key={index}
                  path={item.path}
                  element={<item.component />}
                />
              ))}
            </Routes>
            <Routes>
              {privateRoutes.map((item, index) => (
                <Route
                  key={index}
                  path={item.path}
                  element={
                    <PrivateRoute>
                      <item.component />
                    </PrivateRoute>
                  }
                />
              ))}
            </Routes>
          </ScrollToTop>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
