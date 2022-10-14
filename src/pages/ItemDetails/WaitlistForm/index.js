import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';

import Input from 'components/Input';
import Button from 'components/Button';

import waitListVal from './validation';

import { xmark, success } from 'assets/images';

import './style.scss';

const WaitlistForm = ({ closeForm, imageName }) => {
  const {
    reset,
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode    : 'all',
    resolver: yupResolver(waitListVal),
  });

  const { t } = useTranslation('translation', {
    keyPrefix: 'Pages.ItemDetails.Form',
  });

  const [page, setPage] = useState(1);

  const handleClick = () => {
    setPage((prev) => prev + 1);
  };

  const formSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div className='waitlist'>
      <form onSubmit={handleSubmit(formSubmit)} className='waitlist-form'>
        {page === 1 && (
          <section>
            <div className='waitlist-form-intro'>
              <div className='close-form'>
                <img onClick={closeForm} src={xmark} alt='icon image' />
              </div>
              <p className='title'>{t('title')}</p>
              <p className='description'>{t('description')}</p>
            </div>
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
              error={errors.email?.message}
              label={t('email')}
              name='email'
              inputCheck={watch('email')}
            />
            <Input
              register={register}
              error={errors.country?.message}
              label={t('country')}
              name='country'
              inputCheck={watch('country')}
            />
            <div className='page1__button'>
              <Button
                disable={watch('email') && !errors.email ? false : true}
                handleClick={handleClick}
                type='button'
              >
                <p>{t('submit')}</p>
              </Button>
            </div>
          </section>
        )}
        {page === 2 && (
          <div className='waitlist-form-success'>
            <div className='close-form'>
              <img onClick={closeForm} src={xmark} alt='icon image' />
            </div>
            <div className='form-success'>
              <img src={success} alt='icon image' />
            </div>
            <p className='title'>{t('thank')}</p>
            <p className='description'>{t('notification1')}</p>
            <p className='description'>{imageName}</p>
            <p className='description'>{t('notification2')}</p>
            <p className='description'>{t('goodbye')}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default WaitlistForm;
