import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const Item = ({ textQuantity = false, data }) => {
  return (
    <div className='checkout-item-image'>
      <div className='item-img'>
        <p className={classNames({ hide: textQuantity })}>{data.quantity}</p>
        <img src={data.image} alt='dress image' />
      </div>
      <div className='item-info'>
        <div>
          <p>{data.name}</p>
          <p>
            {data.color} / {data.size}{' '}
            {textQuantity && `/ Qty ${data.quantity}`}
          </p>
        </div>
        <p>USD ${data.price}</p>
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
