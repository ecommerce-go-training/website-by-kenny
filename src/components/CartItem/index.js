import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { formatCurrency } from 'utils/helpers';

import { minus, plus } from 'assets/images';
import { colorList } from 'utils/constants';

import './style.scss';

const CartItem = ({ data, handleRemove, handleAddItem, handleMinusItem }) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Components.CartItem',
  });
  const navigate = useNavigate();

  const convertColor =
		colorList.filter((item) => item.value === data.color).length > 0
		  ? colorList
		    .filter((item) => item.value === data.color)
		    .map((item) => item.key)
		  : data.color;

  return (
    <div className='cart-item'>
      <div className='cart-item-info'>
        <p>
          {data.name} | <b>{data.size}</b> | <b>{convertColor}</b>
        </p>
        <div className='item-price'>
          <div className='item-adjustment'>
            <div>
              <img
                onClick={() => {
                  if (data.quantity > 1) {
                    handleMinusItem();
                  } else {
                    handleRemove();
                  }
                }}
                src={minus}
                alt='minus icon'
              />
            </div>
            <p>{data.quantity}</p>
            <div>
              <img
                // onClick={() => dispatch(addItemQuantity(data.id))}
                onClick={handleAddItem}
                src={plus}
                alt='plus icon'
              />
            </div>
          </div>
          <div className='item-total-price'>
            {data?.discount?.status && (
              <p className='old-price'>{formatCurrency('VND', data.price)}</p>
            )}
            <p>{formatCurrency('VND', data.totalPrice)}</p>
          </div>
        </div>
        <div className='item-total'>
          <p>{formatCurrency('VND', data.totalPrice * data.quantity)}</p>
          <p onClick={handleRemove}>{t('remove')}</p>
        </div>
      </div>
      <div className='cart-item-img'>
        <img
          onClick={() =>
            navigate(`/details/${data.id}`, {
              state: {
                img: data?.image,
              },
            })
          }
          src={data.image.mainImage}
          alt='cloth image'
        />
      </div>
    </div>
  );
};

CartItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CartItem;
