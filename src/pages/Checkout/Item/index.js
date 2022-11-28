import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { formatCurrency } from 'utils/helpers';
import { colorList } from 'utils/constants';

import './style.scss';

const Item = ({ textQuantity = false, data, invoice }) => {
  const sizeList = [
    {
      key  : 'freesize',
      value: 0,
    },
    {
      key  : 'XS',
      value: 1,
    },
    {
      key  : 'S',
      value: 2,
    },
    {
      key  : 'M',
      value: 3,
    },
    {
      key  : 'L',
      value: 4,
    },
    {
      key  : 'XL',
      value: 5,
    },
  ];

  const convertSize = sizeList
    .filter((item) => item.value === data?.inventory?.size)
    .map((item) => item.key)[0];

  const convertColor = colorList
    .filter(
      (item) => item.value === (invoice ? data?.inventory?.color : data.color)
    )
    .map((item) => item.key)[0];

  return (
    <div className='checkout-item-image'>
      <div className='item-img'>
        <p className={classNames({ hide: textQuantity })}>{data.quantity}</p>
        <img src={data?.image?.mainImage} alt='dress image' />
      </div>
      <div className='item-info'>
        <div>
          <p className='item-name'>
            {invoice ? data?.inventory?.product?.name : data?.name}
          </p>
          <p className='item-color'>
            {convertColor?.toString()?.charAt(0)?.toUpperCase() +
							convertColor?.toString()?.slice(1)}{' '}
						/ {invoice ? convertSize : data?.size}
            {textQuantity &&
							` / Qty ${invoice ? data?.amount : data?.quantity}`}
          </p>
        </div>
        <div className='item-info-price'>
          {invoice ? (
            <p style={{ color: 'black' }}>
              {data?.discount !== 0 && (
                <span>
                  {formatCurrency('VND', data?.inventory?.product?.price)}
                </span>
              )}
              {formatCurrency(
                'VND',
                data?.inventory?.product?.price -
									(data?.discount * data?.inventory?.product?.price) / 100
              )}
            </p>
          ) : (
            <p style={{ color: 'black' }}>
              {data?.discount?.status && (
                <span>{formatCurrency('VND', data.price)}</span>
              )}
              {formatCurrency('VND', data.totalPrice)}
            </p>
          )}
        </div>
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
