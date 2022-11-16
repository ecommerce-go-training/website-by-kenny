import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { formatCurrency } from 'utils/helpers';
import { colorList } from 'utils/constants';

import './style.scss';

const Item = ({ textQuantity = false, data }) => {
  const convertColor =
		colorList.filter((item) => item.value === data.color).length > 0
		  ? colorList
		    .filter((item) => item.value === data.color)
		    .map((item) => item.key)
		  : data.color;

  return (
    <div className='checkout-item-image'>
      <div className='item-img'>
        <p className={classNames({ hide: textQuantity })}>{data.quantity}</p>
        <img src={data.image.mainImage} alt='dress image' />
      </div>
      <div className='item-info'>
        <div>
          <p>{data.name}</p>
          <p>
            {convertColor.toString().charAt(0).toUpperCase() +
							convertColor.toString().slice(1)}{' '}
						/ {data.size} {textQuantity && `/ Qty ${data.quantity}`}
          </p>
        </div>
        <p className='item-info-price'>
          {data?.discount?.status && (
            <span>{formatCurrency('VND', data.price)}</span>
          )}
          {formatCurrency('VND', data.totalPrice)}
        </p>
      </div>
    </div>
  );
};

Item.defaultProps = {
  textQuantity: false,
};

Item.propTypes = {
  textQuantity: PropTypes.bool,
};

export default Item;
