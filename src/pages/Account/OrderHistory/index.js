import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from 'components/Button';
import Input from 'components/Input';
import Item from 'pages/Checkout/Item';

import returnVal from './validation';

import { returnOrder, xmark, success } from 'assets/images';

import './style.scss';

const OrderHistory = ({ data }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'Pages.Account' });
  const {
    watch,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode    : 'all',
    resolver: yupResolver(returnVal),
  });

  const [showDetails, setShowDetails] = useState(false);
  const [toggleReturnOrder, setToggleReturnOrder] = useState(false);
  const [showSuccessForm, setShowSuccessForm] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleClick = () => {
    setToggleReturnOrder(!toggleReturnOrder);
    setShowSuccessForm(false);
    reset();
  };

  const formSubmit = (data) => {
    setShowSuccessForm(!showSuccessForm);
    alert(data);
    reset();
  };

  return (
    <div className='order-history'>
      {toggleReturnOrder && (
        <div className='return-order'>
          {!showSuccessForm && (
            <form
              onSubmit={handleSubmit(formSubmit)}
              className='return-order__form'
            >
              <img onClick={handleClick} src={xmark} alt='close icon' />
              <p>{t('return')}</p>
              <p>{t('enterDetails')}</p>
              <Input
                register={register}
                error={errors.orderNumber?.message}
                label={t('orderNumber')}
                name='orderNumber'
                inputCheck={watch('orderNumber')}
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
                error={errors.returnReason?.message}
                label={t('returnReason')}
                name='returnReason'
                inputCheck={watch('returnReason')}
              />
              <Input
                register={register}
                error={errors.link?.message}
                label={t('link')}
                name='link'
                inputCheck={watch('link')}
              />
              <p>{t('linkPaste')}</p>
              <Button type='submit'>
                <p>{t('startReturn')}</p>
              </Button>
            </form>
          )}
          {showSuccessForm && (
            <div className='return-order__success'>
              <p onClick={handleClick}>{t('close')}</p>
              <img src={success} alt='success icon' />
              <p>{t('requestSubmit')}</p>
              <p>{t('response')}</p>
            </div>
          )}
        </div>
      )}
      <div className='order-history__id'>
        <p>
          {t('order')} {data.id}
        </p>
        <p onClick={handleClick}>
          <img src={returnOrder} alt='icon image' />
          {t('return')}
        </p>
      </div>
      <p className='order-history__status'>
        {t('status')} &nbsp; <span>{data.status}</span>
      </p>
      <div className='order-history__button'>
        <div>
          <Button>
            <p>{t('trackOrder')}</p>
          </Button>
        </div>
        <div>
          <Button handleClick={handleShowDetails}>
            <p>{t('details')}</p>
          </Button>
        </div>
      </div>
      {showDetails && (
        <div className='order-history__details'>
          <p>{t('articles')}</p>
          <p>{t('sendBack')}</p>
          {data.items.map((item, index) => (
            <Item textQuantity key={index} data={item} />
          ))}
          <div className='order-price'>
            <div>
              <p>{t('subtotal')}</p>
              <p>
                {Intl.NumberFormat('vi-VIET', {
                  style   : 'currency',
                  currency: 'VND',
                }).format(250)}
              </p>
            </div>
            <div>
              <p>{t('shipping')}</p>
              <p>
                {Intl.NumberFormat('vi-VIET', {
                  style   : 'currency',
                  currency: 'VND',
                }).format(250)}
              </p>
            </div>
            <div>
              <p>{t('total')}</p>
              <p>
                {Intl.NumberFormat('vi-VIET', {
                  style   : 'currency',
                  currency: 'VND',
                }).format(250)}
              </p>
            </div>
          </div>
          <div className='shipping-method'>
            <div>
              <p>{t('payMethod')}</p>
              <p>{data.payment}</p>
              <p>{t('billTo')}</p>
              <p>{data.customerName}</p>
              <p>{data.customerAddress}</p>
              <div>
                <Button>
                  <p>{t('pdf')}</p>
                </Button>
              </div>
            </div>
            <div>
              <p>{t('deliverMethod')}</p>
              <p>{data.delivery}</p>
              <p>{t('shipTo')}</p>
              <p>{data.customerName}</p>
              <p>{data.customerAddress}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
