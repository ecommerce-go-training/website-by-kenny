import React from 'react';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import Input from 'components/Input';
import Header from 'components/Header';
import Button from 'components/Button';
import Checkbox from 'components/checkbox';
import signUpVal from './validation';

import './style.scss';

function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
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
      <div className='signup__container'>
        <form className='signup' onSubmit={handleSubmit(formSubmit)}>
          <label>create an account</label>
          <p>Please register your details below to create an account</p>
          <Input
            register={register}
            error={errors.firstName?.message}
            label='firstName'
            name='firstName'
            inputCheck={watch('firstName')}
          />
          <Input
            register={register}
            error={errors.lastName?.message}
            label='lastName'
            name='lastName'
            inputCheck={watch('lastName')}
          />
          <Input
            register={register}
            error={errors.phone?.message}
            label='phone'
            name='phone'
            inputCheck={watch('phone')}
          />
          <Input
            register={register}
            error={errors.email?.message}
            label='email'
            name='email'
            inputCheck={watch('email')}
          />
          <Input
            register={register}
            error={errors.password?.message}
            label='password'
            name='password'
            type='password'
            inputCheck={watch('password')}
          />
          <div className='signup__checkbox'>
            <Checkbox>
              <p>
								Sign me up to reveive updates on new arrivals, events,
								promotions and much more!
              </p>
            </Checkbox>
          </div>
          <p className='agree'>
						By signing up you agree to Elemush &nbsp;
            <Link to='/privacy'>Terms of Service</Link> &nbsp; and &nbsp;
            <Link to='/privacy'>Privacy Policy</Link>
          </p>
          <div className='signup__button'>
            <Button type='submit'>
              <p>Create</p>
            </Button>
          </div>
          <Link to='/signIn'>I have an account</Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
