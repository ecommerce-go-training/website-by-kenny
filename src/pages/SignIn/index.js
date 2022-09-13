import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from 'components/Input';
import Header from 'components/Header';
import Button from 'components/Button';

import './style.scss';

function SignIn() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('isLogin') === 'true') {
      navigate('/');
    }
  });

  return (
    <div>
      <Header disableAnnounce login />
      <div className='container'>
        <form className='login'>
          <label>sign in</label>
          <Input label='email' />
          <Input label='password' type='password' />
          <div className='login__button'>
            <Button>
              <p>log in</p>
            </Button>
          </div>
        </form>
        <div className='login__forgot'>
          <p>forgot your password</p>
          <p>sign up</p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
