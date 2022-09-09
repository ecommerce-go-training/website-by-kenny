import { Provider } from 'react-redux';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import 'services/i18n';
import Test from 'config';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';

import { store } from './store';

import 'assets/scss/global.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Test />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/signUp' element={<SignUp />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
