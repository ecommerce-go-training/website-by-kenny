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
    reset,
    formState: { errors },
  } = useForm({
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
          <div className='login__row'>
            <Input
              {...register('email')}
              name='email'
              type='text'
              label='email'
            />
            <p>{errors.email?.message}</p>
          </div>
          <div className='login__row'>
            <Input
              {...register('password')}
              label='password'
              name='password'
              type='password'
            />
            <p>{errors.password?.message}</p>
          </div>
          <div className='login__button'>
            <Button type='submit'>
              <p>log in</p>
            </Button>
          </div>
        </form>
        <div className='forgot'>
          <Link to='/forgotPsw'>Forgot your password ?</Link>
          <Link to='/signUp'>sign up</Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
