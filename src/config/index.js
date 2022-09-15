import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import signInVal from '../pages/SignIn/validation';
import InputInfo from './input';

function Test() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(signInVal),
  });

  const formSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <InputInfo
        register={register}
        error={errors.email?.message}
        label='email'
        name='email'
      />
      <InputInfo
        register={register}
        error={errors.password?.message}
        label='password'
        name='password'
      />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default Test;
