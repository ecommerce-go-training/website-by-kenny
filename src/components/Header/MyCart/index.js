import React from 'react';
import classNames from 'classnames';

import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Button from 'components/Button';
import CartItem from 'components/CartItem';

import {
  xmark,
  backDress,
  whiteDress,
  greenDress,
  orangeDress,
} from 'assets/images';

import './style.scss';

const MyCart = ({ toggle, setToggle, price }) => {
  const tempData = [
    {
      image   : backDress,
      name    : 'Back Dress',
      size    : 'M',
      price   : 1230,
      quantity: 1,
    },
    {
      image   : greenDress,
      name    : 'Green Dress',
      size    : 'S',
      price   : 12320,
      quantity: 3,
    },
    {
      image   : whiteDress,
      name    : 'White Dress',
      size    : 'XL',
      price   : 130,
      quantity: 6,
    },
    {
      image   : orangeDress,
      name    : 'Orange Dress',
      size    : 'XXL',
      price   : 45,
      quantity: 3,
    },
  ];

  const navigate = useNavigate();
  const { t } = useTranslation('translation', {
    keyPrefix: 'Components.Header',
  });

  return (
    <div
      className={classNames({
        'my-cart': true,
        active   : toggle,
      })}
    >
      <div className='my-cart-title'>
        <p>{t('myCart')}</p>
        <div>
          <img onClick={() => setToggle(false)} src={xmark} alt='icon image' />
        </div>
      </div>
      <div className='my-cart-item'>
        {tempData.map((item, index) => (
          <CartItem key={index} data={item} />
        ))}
      </div>
      <div className='my-cart-button'>
        <div>
          <Button whiteBg border handleClick={() => navigate('/my-cart')}>
            {t('viewCart')}
          </Button>
        </div>
        <div>
          <Button border handleClick={() => navigate('/checkout')}>
            <div className='button-info'>
              <p>{t('checkOut')} </p>
              {price && <p>price</p>}
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
