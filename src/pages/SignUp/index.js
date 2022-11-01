import React from 'react';

import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';

import Input from 'components/Input';
import Header from 'components/Header';
import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import signUpVal from './validation';
import Footer from 'components/Footer';

import { registerAccount } from 'global/redux/auth/thunk';

import './style.scss';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'Pages.SignUp' });

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const {
    watch,
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    mode    : 'all',
    resolver: yupResolver(signUpVal),
  });

  const formSubmit = async () => {
    const formData = getValues();
    const status = await dispatch(registerAccount(formData));
    if (status.payload) {
      reset();
    }
  };

  return (
    <div>
      <Header disableAnnounce login />
      <div className='signup__container'>
        <form className='signup' onSubmit={handleSubmit(formSubmit)}>
          <label>{t('label')}</label>
          <p>{t('description')}</p>
          <Input
            register={register}
            error={errors.firstName?.message}
            label={t('firstName')}
            name='firstName'
            inputCheck={watch('firstName')}
          />
          <Input
            register={register}
            error={errors.lastName?.message}
            label={t('lastName')}
            name='lastName'
            inputCheck={watch('lastName')}
          />
          <Input
            register={register}
            error={errors.phone?.message}
            label={t('phone')}
            name='phone'
            inputCheck={watch('phone')}
          />
          <Input
            register={register}
            error={errors.email?.message}
            label={t('email')}
            name='email'
            inputCheck={watch('email')}
          />
          <Input
            register={register}
            error={errors.password?.message}
            label={t('password')}
            name='password'
            type='password'
            inputCheck={watch('password')}
          />
          <div className='signup__checkbox'>
            <Checkbox>
              <p className='receive-news'>{t('receiveNews')}</p>
            </Checkbox>
          </div>
          <p className='agree'>
            {t('userAgree')} Elemush &nbsp;
            <Link to='/privacy'>{t('terms')}</Link> &nbsp; and &nbsp;
            <Link to='/privacy'>{t('privacy')}</Link>
          </p>
          <div className='signup__button'>
            <Button login type='submit' isLoading={isLoading}>
              <p>{t('create')}</p>
            </Button>
          </div>
          <Link to='/sign-in'>{t('haveAccount')}</Link>
        </form>
      </div>
      <Footer lineTop />
    </div>
  );
};

export default SignUp;
