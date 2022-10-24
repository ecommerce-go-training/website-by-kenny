import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { formatCurrency } from 'utils/helpers';

import { minus, plus } from 'assets/images';

import './style.scss';

const CartItem = ({ data, handleRemove }) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Components.CartItem',
  });
  const [quantity, setQuantity] = useState(data.quantity);

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
                onClick={() => setQuantity((prev) => prev - 1)}
                src={minus}
                alt='minus icon'
              />
            </div>
            <p>{quantity}</p>
            <div>
              <img
                onClick={() => setQuantity((prev) => prev + 1)}
                src={plus}
                alt='plus icon'
              />
            </div>
          </div>
          <p>{formatCurrency(data.price)}</p>
        </div>
        <div className='item-total'>
          <p>{formatCurrency(data.price * quantity)}</p>
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
