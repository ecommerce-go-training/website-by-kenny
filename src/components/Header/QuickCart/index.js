import React, { memo } from 'react';
import classNames from 'classnames';

import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import Button from 'components/Button';
import CartItem from 'components/CartItem';

import { removeItem } from 'global/redux/cart/slice';

import { xmark } from 'assets/images';

import './style.scss';

const QuickCart = ({ toggle, setToggle, price }) => {
  const { cartItem } = useSelector((state) => state.cart);
  console.log('🚀 ~ file: index.js ~ line 19 ~ QuickCart ~ cartItem', cartItem);
  const dispatch = useDispatch();
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
        {cartItem?.map((item, index) => (
          <CartItem
            key={index}
            data={item}
            handleRemove={() => dispatch(removeItem(item.id))}
          />
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

export default memo(QuickCart);
