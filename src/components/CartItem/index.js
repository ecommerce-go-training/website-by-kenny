import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useTranslation } from 'react-i18next';

import { minus, plus } from 'assets/images';

import './style.scss';

function CartItem({ data }) {
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
          <p>
            {data.price} {t('unit')}
          </p>
        </div>
        <div className='item-total'>
          <p>
            {data.price * quantity} {t('unit')}
          </p>
          <p>{t('remove')}</p>
        </div>
      </div>
      <div className='cart-item-img'>
        <img src={data.image} alt='cloth image' />
      </div>
    </div>
  );
}

CartItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CartItem;
