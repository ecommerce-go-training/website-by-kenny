import React, { useState } from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Header from 'components/Header';
import OrderHistory from './OrderHistory';

import { pinkDress, whiteDressCart, orangeDressCart } from 'assets/images';

import './style.scss';

const Account = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('translation', { keyPrefix: 'Pages.Account' });

  const [selectNav, setSelectNav] = useState(0);

  const orderHistory = [
    {
      id             : 'abc123',
      status         : 'YOUR ORDER WILL BE SHIPPED ON JULY 20TH 2021',
      trackNumber    : 123,
      payment        : 'Paypal',
      delivery       : 'VN Express',
      customerName   : 'Sundeptrai',
      customerAddress:
				'44a phan dinh phung, phuong xuong huan, khanh hoa\n 0888551230',
      items: [
        {
          id      : 1,
          image   : pinkDress,
          name    : 'Demo name',
          color   : 'Pink',
          size    : 'M',
          quantity: 4,
          price   : 100,
        },
        {
          id      : 2,
          image   : whiteDressCart,
          name    : 'Demo name',
          color   : 'Pink',
          size    : 'M',
          quantity: 1,
          price   : 100,
        },
        {
          id      : 3,
          image   : orangeDressCart,
          name    : 'Demo name',
          color   : 'Pink',
          size    : 'M',
          quantity: 10,
          price   : 100,
        },
      ],
    },
    {
      id             : '812218asd',
      status         : 'YOUR ORDER IS BEING PROCESSED',
      trackNumber    : 333,
      payment        : 'Credit card',
      delivery       : 'Amazon service',
      customerName   : 'Gundeptrai',
      customerAddress:
				'18/10A Tang Bat Ho, Ward 11, District 1 ,Ho Chi Minh City, 70000, Vietnam\n 08824351130',
      items: [
        {
          id      : 3,
          image   : pinkDress,
          name    : 'Demo name',
          color   : 'Pink',
          size    : 'M',
          quantity: 3,
          price   : 100,
        },
        {
          id      : 2,
          image   : whiteDressCart,
          name    : 'Demo name',
          color   : 'Pink',
          size    : 'M',
          quantity: 6,
          price   : 100,
        },
        {
          id      : 6,
          image   : orangeDressCart,
          name    : 'Demo name',
          color   : 'Pink',
          size    : 'M',
          quantity: 9,
          price   : 100,
        },
      ],
    },
  ];

  const handleClickNav = (e) => {
    setSelectNav(e);
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className='account-container'>
      <Header login />
      <div className='account'>
        <div className='account__nav'>
          <p
            className={classNames({ active: selectNav === 0 })}
            onClick={() => handleClickNav(0)}
          >
            {t('ordersReturn')}
          </p>
          <p
            className={classNames({ active: selectNav === 1 })}
            onClick={() => handleClickNav(1)}
          >
            {t('addressBook')}
          </p>
          <p
            className={classNames({ active: selectNav === 2 })}
            onClick={() => handleClickNav(2)}
          >
            {t('newsLetter')}
          </p>
          <p
            className={classNames({ active: selectNav === 3 })}
            onClick={() => handleClickNav(3)}
          >
            {t('changeLanguage')}
          </p>
          <p onClick={handleLogout}>{t('logout')}</p>
        </div>
        <div className='account__content'>
          {selectNav === 0 && (
            <div className='account__content__order'>
              {orderHistory.map((item, index) => (
                <OrderHistory key={index} data={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
