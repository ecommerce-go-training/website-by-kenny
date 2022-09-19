import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import Input from 'components/Input';
import Header from 'components/Header';
import Button from 'components/Button';

import resetVal from './validation';

import { successMail, success } from 'assets/images';

import './style.scss';

function Resetpsw() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    mode    : 'all',
    resolver: yupResolver(resetVal),
  });

  const handleClick = () => {
    setPage((prev) => prev + 1);
  };

  const formSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  console.log(watch('email'));

  return (
    <div>
      <Header disableAnnounce login />
      <div className='container'>
        <form onSubmit={handleSubmit(formSubmit)}>
          {page === 1 && (
            <section className='page1' style={{ display: '' }}>
              <div className='page1__intro'>
                <p className='title'>Reset your password</p>
                <p className='description'>
									Please enter your email address and click on submit. We will
									send you an email contaninng a link that you can click to
									create a new password.
                </p>
              </div>
              <Input
                register={register}
                error={errors.email?.message}
                label='email'
                name='email'
                centerError
                inputCheck={watch('email')}
              />
              <div className='page1__button'>
                <Button
                  disable={watch('email') && !errors.email ? false : true}
                  handleClick={handleClick}
                  type='button'
                >
                  <p>Submit</p>
                </Button>
              </div>
              <Link to='/signIn'>Back to sign in</Link>
            </section>
          )}

          {page === 2 && (
            <section className='page2'>
              <div className='page2__intro'>
                <p className='title'>Check your Email</p>
                <p className='description'>
									Please check your mail box and click in the recevied link to
									reset your new password
                </p>
              </div>
              <img src={successMail} alt='Mail success img' />
              <Input
                register={register}
                error={errors.code?.message}
                label='code'
                name='code'
                centerError
                inputCheck={watch('code')}
              />
              <div className='page2__button'>
                <Button
                  disable={watch('code') && !errors.code ? false : true}
                  handleClick={handleClick}
                  type='button'
                >
                  <p>Submit</p>
                </Button>
              </div>
              <p>
								Didn&#39;t receive the code?{' '}
                <span onClick={() => setPage(1)}>Resend</span>
              </p>
            </section>
          )}

          {page === 3 && (
            <section className='page3'>
              <div className='page3__intro'>
                <p className='title'>Create new password</p>
                <p className='description'>
									Enter a new password for abc@gmail.com
                </p>
              </div>
              <Input
                register={register}
                error={errors.password?.message}
                label='password'
                name='password'
                type='password'
                inputCheck={watch('password')}
              />
              <Input
                register={register}
                error={errors.confirmPassword && 'Does not match'}
                label='confirmPassword'
                name='confirmPassword'
                type='text'
                inputCheck={watch('confirmPassword')}
              />
              <div className='page3__button'>
                <Button
                  disable={watch('password') && !errors.password ? false : true}
                  handleClick={handleClick}
                  type='submit'
                >
                  <p>Reset Password</p>
                </Button>
              </div>
            </section>
          )}

          {page === 4 && (
            <section className='page4'>
              <img src={success} alt='success' />
              <p className='title'>password changed !</p>
              <p className='description'>
								You can now sign in with your new password
              </p>
              <Button handleClick={() => navigate('/signIn')}>sign in</Button>
            </section>
          )}
        </form>
        {/*<p>{JSON.stringify(watch())}</p>*/}
      </div>
    </div>
  );
}

export default Resetpsw;
