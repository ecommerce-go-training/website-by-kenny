import 'services/i18n';
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import ScrollToTop from 'components/ScrollToTop';

import { store } from './store';
import { publicRoutes } from 'routes';

import 'assets/scss/global.scss';

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<p>Loading</p>}>
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
          </ScrollToTop>
        </Router>
      </Suspense>
    </Provider>
  );
}

export default App;
