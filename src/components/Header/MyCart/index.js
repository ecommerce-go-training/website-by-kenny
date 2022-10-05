import React from 'react';
import classNames from 'classnames';

import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Button from 'components/Button';

import { xmark } from 'assets/images';

import './style.scss';

function MyCart({ toggle, setToggle, price }) {
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
        <h1>Hello</h1>
      </div>
      <div className='my-cart-button'>
        <div>
          <Button whiteBg border handleClick={() => navigate('my-cart')}>
            {t('viewCart')}
          </Button>
        </div>
        <div>
          <Button border>
            <div className='button-info'>
              <p>{t('checkOut')} </p>
              {price && <p>price</p>}
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MyCart;
