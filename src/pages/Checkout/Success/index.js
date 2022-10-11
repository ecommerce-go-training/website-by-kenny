import React from 'react';
import { useTranslation } from 'react-i18next';

import Header from 'components/Header';
import Footer from 'components/Footer';

import { success } from 'assets/images';

import './style.scss';

const PaymentSuccess = ({ orderNumber = '812218' }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'Pages.Checkout' });

  return (
    <div className='payment-success'>
      <Header login />
      <div className='payment-success__content'>
        <div className='payment-success__content__result'>
          <img src={success} alt='image icon' />
          <p>{t('thank')}</p>
          <p>{t('confirmEmail')}</p>
          <p>
            {t('orderNumber')} <span>#{orderNumber}</span>
          </p>
        </div>
      </div>
      <Footer paymentSuccess />
    </div>
  );
};

export default PaymentSuccess;
