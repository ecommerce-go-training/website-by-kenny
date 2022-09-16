import React from 'react';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import Input from 'components/Input';
import Header from 'components/Header';
import Button from 'components/Button';
import signUpVal from './validation';

import './style.scss';

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    //watch,
    reset,
  } = useForm({
    mode    : 'all',
    resolver: yupResolver(signUpVal),
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
          <Button type='submit'>
            <p>Submit</p>
          </Button>
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

export default SignUp;
