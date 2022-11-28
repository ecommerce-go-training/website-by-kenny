import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Header from 'components/Header';
import Footer from 'components/Footer';

import { success } from 'assets/images';

import './style.scss';

const PaymentSuccess = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'Pages.Checkout' });

  const { state } = useLocation();
  const { invoiceId } = state;

  return (
    <div className='payment-success'>
      <Header disableAnnounce login />
      <div className='payment-success__content'>
        <div className='payment-success__content__result'>
          <img src={success} alt='image icon' />
          <p>{t('thank')}</p>
          <p>{t('confirmEmail')}</p>
          <p>
            {t('orderNumber')}: <span>{invoiceId}</span>
          </p>
          <Link to='/catalouge/new-arrivals'>Back to Shopping</Link>
        </div>
      </div>
      <Footer paymentSuccess />
    </div>
  );
};

export default PaymentSuccess;
