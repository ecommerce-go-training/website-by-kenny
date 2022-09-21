import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from 'pages/Home';
import Brand from 'pages/Brand';
import Store from 'pages/Store';
import Season from 'pages/Season';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import Size from 'pages/SizeGuide';
import ScrollToTop from 'components/ScrollToTop';
import Resetpsw from 'pages/Resetpassword';

import { store } from './store';

import 'assets/scss/global.scss';

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback='loading'>
        <Router>
          <ScrollToTop>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/signIn' element={<SignIn />} />
              <Route path='/signUp' element={<SignUp />} />
              <Route path='/resetPassword' element={<Resetpsw />} />
              <Route path='/brand' element={<Brand />} />
              <Route path='/store' element={<Store />} />
              <Route path='/size' element={<Size />} />
              <Route path='/season' element={<Season />} />
            </Routes>
          </ScrollToTop>
        </Router>
      </Suspense>
    </Provider>
  );
}

export default App;
