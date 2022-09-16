import { Provider } from 'react-redux';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import 'services/i18n';

import Home from 'pages/Home';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import Resetpsw from 'pages/Resetpassword';

import { store } from './store';

import 'assets/scss/global.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/resetPassword' element={<Resetpsw />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
