import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { formatCurrency } from 'utils/helpers';
import {
  addItemQuantity,
  minusItemQuantity,
  removeItem,
} from 'global/redux/cart/slice';

import { minus, plus } from 'assets/images';

import './style.scss';

const CartItem = ({ data, handleRemove }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation('translation', {
    keyPrefix: 'Components.CartItem',
  });

  return (
    <div className='cart-item'>
      <div className='cart-item-info'>
        <p>
          {data.name} | <b>{data.size}</b>
        </p>
        <div className='item-price'>
          <div>
            <div>
              <img
                onClick={() => {
                  if (data.quantity > 1) {
                    dispatch(minusItemQuantity(data.id));
                  } else {
                    dispatch(removeItem(data.id));
                  }
                }}
                src={minus}
                alt='minus icon'
              />
            </div>
            <p>{data.quantity}</p>
            <div>
              <img
                onClick={() => dispatch(addItemQuantity(data.id))}
                src={plus}
                alt='plus icon'
              />
            </div>
          </div>
          <p>{formatCurrency(data.price)}</p>
        </div>
        <div className='item-total'>
          <p>{formatCurrency(data.price * data.quantity)}</p>
          <p onClick={handleRemove}>{t('remove')}</p>
        </div>
      </div>
      <div className='cart-item-img'>
        <img src={data.image} alt='cloth image' />
      </div>
    </div>
  );
};

CartItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CartItem;
