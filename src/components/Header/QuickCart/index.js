import React, { memo, useEffect, useRef } from 'react';
import classNames from 'classnames';

import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import Button from 'components/Button';
import CartItem from 'components/CartItem';

import { formatCurrency, showNoti } from 'utils/helpers';
import {
  addItemQuantity,
  minusItemQuantity,
  removeItem,
} from 'global/redux/cart/slice';

import { xmark } from 'assets/images';

import './style.scss';

const QuickCart = ({ toggle, setToggle }) => {
  const { cartItem } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation('translation', {
    keyPrefix: 'Components.Header',
  });

  const totalPrice = cartItem
    ?.map((item) => item.quantity * item.totalPrice)
    ?.reduce((item, sum) => item + sum, 0);

  const handleViewCart = () => {
    if (cartItem.length > 0) {
      navigate('/my-cart');
    } else {
      showNoti('error', 'Cart is empty');
    }
  };

  const handleCheckout = () => {
    if (cartItem.length > 0) {
      navigate('/checkout');
    } else {
      showNoti('error', 'Cart is empty');
    }
  };

  let cartRef = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', (e) => {
      if (!cartRef.current.contains(e.target)) {
        setToggle(false);
      }
    });
    /* eslint-disable-next-line */
	}, []);

  return (
    <div
      ref={cartRef}
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
        {cartItem.length > 0 ? (
          cartItem?.map((item, index) => (
            <CartItem
              key={index}
              data={item}
              handleAddItem={() => dispatch(addItemQuantity(index))}
              handleMinusItem={() => dispatch(minusItemQuantity(index))}
              handleRemove={() => dispatch(removeItem(index))}
            />
          ))
        ) : (
          <p className='empty-cart-inform'>
						Empty cart, let&lsquo;s add more item
          </p>
        )}
      </div>
      <div className='my-cart-button'>
        <div className='my-cart-button-cart'>
          <Button whiteBg border handleClick={handleViewCart}>
            {t('viewCart')}
          </Button>
        </div>
        <div>
          <Button border handleClick={handleCheckout}>
            <div className='button-info'>
              <p>{t('checkOut')}</p>
              {totalPrice > 0 && <p>{formatCurrency('VND', totalPrice)}</p>}
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(QuickCart);
