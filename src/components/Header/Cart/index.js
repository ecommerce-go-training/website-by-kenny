import React from 'react';
import classNames from 'classnames';

import Button from 'components/Button';

import { useTranslation } from 'react-i18next';

import { xmark } from 'assets/images';

import './style.scss';

function Cart({ toggle, setToggle, price }) {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Components.Header',
  });

  return (
    <div
      className={classNames({
        cart  : true,
        active: toggle,
      })}
    >
      <div className='cart-title'>
        <p>{t('myCart')}</p>
        <div>
          <img onClick={() => setToggle(false)} src={xmark} alt='icon image' />
        </div>
      </div>
      <div className='cart-item'>
        <h1>Hello</h1>
      </div>
      <div className='cart-button'>
        <div>
          <Button whiteBg border>
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

export default Cart;
