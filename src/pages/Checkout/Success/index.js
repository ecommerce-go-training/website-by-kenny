import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Header from 'components/Header';
import Footer from 'components/Footer';

import { success } from 'assets/images';

import './style.scss';

const PaymentSuccess = ({ orderNumber = '812218' }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'Pages.Checkout' });

  return (
    <div className='payment-success'>
      <Header disableAnnounce login />
      <div className='payment-success__content'>
        <div className='payment-success__content__result'>
          <img src={success} alt='image icon' />
          <p>{t('thank')}</p>
          <p>{t('confirmEmail')}</p>
          <p>
            {t('orderNumber')} <span>#{orderNumber}</span>
          </p>
          <Link to='/catalouge/new-arrivals'>Back to Shopping</Link>
        </div>
      </div>
      <Footer paymentSuccess />
    </div>
  );
};

export default PaymentSuccess;
