import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import SignInForm from './SignInForm/index';

function SignIn() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('isLogin') === 'true') {
      navigate('/');
    }
  });

  return <SignInForm />;
}

export default SignIn;
