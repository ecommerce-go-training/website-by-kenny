import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

function Test() {
  const schema = yup
    .object({
      name    : yup.string().required(),
      email   : yup.string().email().required(),
      password: yup.string().min(4).max(7).required(),
    })
    .required();

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode    : 'all',
    resolver: yupResolver(schema),
  });

  const [page, setPage] = useState(0);

  const handleClick = () => {
    setPage((prev) => prev + 1);
  };

  const hanldeFormSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(hanldeFormSubmit)}>
      {page >= 0 && (
        <section>
          <label>Form 1</label>
          <input
            {...register('name', {
              required: true,
            })}
            type='text'
            name='name'
            placeholder='name'
          />
          <p style={{ color: 'red' }}>{errors?.name?.message}</p>
        </section>
      )}

      {page >= 1 && (
        <section>
          <label>Form 2</label>
          <input
            {...register('email')}
            type='text'
            name='email'
            placeholder='email'
          />
          <p style={{ color: 'red' }}>{errors?.email?.message}</p>
        </section>
      )}

      {page >= 2 && (
        <section>
          <label>Form 3</label>
          <input
            {...register('password')}
            name='password'
            type='text'
            placeholder='password'
          />
          <p style={{ color: 'red' }}>{errors?.password?.message}</p>
        </section>
      )}
      <button type='submit'>Submit</button>
      <button onClick={handleClick} type='button'>
				Next
      </button>
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
      <pre>{isValid}</pre>
    </form>
  );
}

export default Test;
