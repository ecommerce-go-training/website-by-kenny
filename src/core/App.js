import 'services/i18n';
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

//import Test from 'config';
import Home from 'pages/Home';
import Brand from 'pages/Brand';
import Season from 'pages/Season';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import Store from 'pages/Store';
import Catalouge from 'pages/Catalouge';
import ItemDetails from 'pages/ItemDetails';
import Resetpsw from 'pages/Resetpassword';
import ScrollToTop from 'components/ScrollToTop';
import Size from 'pages/CustomerSupport/SizeGuide';

import CustomerSupport from 'pages/CustomerSupport';

import { store } from './store';

import 'assets/scss/global.scss';

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<p>Loading</p>}>
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
              <Route path='/customerSupport' element={<CustomerSupport />} />
              <Route path='/catalouge' element={<Catalouge />} />
              <Route path='/details' element={<ItemDetails />} />
            </Routes>
          </ScrollToTop>
        </Router>
      </Suspense>
    </Provider>
  );
}

export default App;
