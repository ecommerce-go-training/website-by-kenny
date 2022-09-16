import React, { useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import Input from 'components/Input';
import Header from 'components/Header';
import Button from 'components/Button';
import signInVal from './validation';

import './style.scss';

function SignIn() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    //watch,
    reset,
  } = useForm({
    mode    : 'all',
    resolver: yupResolver(signInVal),
  });

  useEffect(() => {
    if (localStorage.getItem('isLogin') === 'true') {
      navigate('/');
    }
  });

  const formSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div>
      <Header disableAnnounce login />
      <div className='container'>
        <form className='login' onSubmit={handleSubmit(formSubmit)}>
          <label>sign in</label>
          <Input
            register={register}
            error={errors.email?.message}
            label='email'
            name='email'
          />
          <Input
            register={register}
            error={errors.password?.message}
            label='password'
            name='password'
            type='password'
          />
          <div className='login__button'>
            <Button type='submit'>
              <p>Submit</p>
            </Button>
          </div>
          {/*<pre>{JSON.stringify(watch(), null, 2)}</pre>*/}
        </form>
        <div className='forgot'>
          <Link to='/resetPassword'>Forgot your password ?</Link>
          <Link to='/signUp'>sign up</Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
