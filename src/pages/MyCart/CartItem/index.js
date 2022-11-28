import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addItemQuantity, minusItemQuantity } from 'global/redux/cart/slice';

import { formatCurrency } from 'utils/helpers';

import { xmark, more } from 'assets/images';
import { colorList } from 'utils/constants';

import './style.scss';

const CartItem = ({ data, handleRemove, index }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'Pages.Cart' });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleMinusItem = () => {
    if (data.quantity > 1) {
      dispatch(minusItemQuantity(index));
    } else {
      handleRemove();
    }
  };

  const convertColor =
		colorList.filter((item) => item.value === data.color).length > 0
		  ? colorList
		    .filter((item) => item.value === data.color)
		    .map((item) => item.key)
		  : data.color;

  return (
    <div className='cart-items'>
      <div className='cart-items-img'>
        <img
          onClick={() =>
            navigate(`/details/${data.id}`, {
              state: {
                img: data?.image,
              },
            })
          }
          src={data.image.mainImage}
          alt='dress image'
        />
      </div>
      <div className='cart-items-info'>
        <div>
          <p>{data.name}</p>
          <img onClick={handleRemove} src={xmark} alt='close-delete icon' />
        </div>
        <p>{formatCurrency('VND', data.totalPrice)}</p>
        <div>
          <p>{t('color')}: </p>
          <div>
            <p>{convertColor}</p>
          </div>
        </div>
        <div>
          <p>{t('size')}: </p>
          <div>
            <p>{data.size}</p>
          </div>
        </div>
        <div className='add-minus-item'>
          <p>{t('quantity')}: </p>
          <div>
            <p>{data.quantity}</p>
            <div>
              <img
                onClick={() => dispatch(addItemQuantity(index))}
                src={more}
                alt='more icon'
              />
              <img onClick={handleMinusItem} src={more} alt='more icon' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
