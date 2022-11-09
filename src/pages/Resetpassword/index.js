import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';

import { sendCode, verifyCode, changePassword } from 'global/redux/auth/thunk';

import Input from 'components/Input';
import Header from 'components/Header';
import Button from 'components/Button';

import resetVal from './validation';

import { successMail, success } from 'assets/images';

import './style.scss';

const Resetpsw = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const { t } = useTranslation('translation', {
    keyPrefix: 'Pages.ResetPassword',
  });
  const [formPage, setFormPage] = useState(1);

  const {
    reset,
    watch,
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode    : 'all',
    resolver: yupResolver(resetVal),
  });

  const handleClick = async () => {
    const formData = {
      email          : getValues('email'),
      code           : getValues('code'),
      newPassword    : getValues('password'),
      confirmPassword: getValues('confirmPassword'),
      function       : setFormPage,
    };
    switch (formPage) {
    case 1:
      await dispatch(sendCode(formData));
      break;
    case 2:
      await dispatch(verifyCode(formData));
      break;
    case 3:
      await dispatch(changePassword(formData));
      break;
    default:
      break;
    }
  };

  const formSubmit = () => {
    reset();
  };

  return (
    <div>
      <Header disableAnnounce login />
      <div className='container'>
        <form onSubmit={handleSubmit(formSubmit)}>
          {formPage === 1 && (
            <section className='page1' style={{ display: '' }}>
              <div className='page1__intro'>
                <p className='title'>{t('title')}</p>
                <p className='description'>{t('description')}</p>
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
                  login
                  isLoading={isLoading}
                >
                  <p>{t('submit')}</p>
                </Button>
              </div>
              <Link to='/sign-in'>{t('backToSignIn')}</Link>
            </section>
          )}

          {formPage === 2 && (
            <section className='page2'>
              <div className='page2__intro'>
                <p className='title'>Check your Email</p>
                <p className='description'>{t('description2')}</p>
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
                  login
                  isLoading={isLoading}
                >
                  <p>{t('submit')}</p>
                </Button>
              </div>
              <p>
                {t('didntReceive')} &nbsp;
                <span onClick={() => setFormPage(1)}>{t('resend')}</span>
              </p>
            </section>
          )}

          {formPage === 3 && (
            <section className='page3'>
              <div className='page3__intro'>
                <p className='title'>{t('createNewPassword')}</p>
                <p className='description'>{t('description3')} abc@gmail.com</p>
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
                type='password'
                inputCheck={watch('confirmPassword')}
              />
              <div className='page3__button'>
                <Button
                  disable={watch('password') && !errors.password ? false : true}
                  handleClick={handleClick}
                  type='submit'
                  login
                  isLoading={isLoading}
                >
                  <p>{t('resetPassword')}</p>
                </Button>
              </div>
            </section>
          )}

          {formPage === 4 && (
            <section className='page4'>
              <img src={success} alt='success' />
              <p className='title'>{t('success')}</p>
              <p className='description'>{t('description4')}</p>
              <Button handleClick={() => navigate('/sign-in')}>
                {t('signIn')}
              </Button>
            </section>
          )}
        </form>
      </div>
    </div>
  );
};

export default Resetpsw;
