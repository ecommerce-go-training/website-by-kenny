import React, { useState, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { formatCurrency } from 'utils/helpers';

import { plus } from 'assets/images';

import './style.scss';

const CatalougeItem = ({ data }) => {
  const navigate = useNavigate();
  const { t } = useTranslation('translation', {
    keyPrefix: 'Components.CatalougeItem',
  });
  const [size, setSize] = useState(0);

  const handleClick = () => {
    navigate(`/details/${data.id}`, {
      state: {
        img: data?.image,
      },
    });
  };

  return (
    <div className='cataItem'>
      <div className='img-container'>
        <div className='item-img'>
          <img
            onClick={handleClick}
            src={data?.image?.mainImage}
            alt='Item image'
          />
        </div>
        <div className='item-add'>
          <div>
            <img src={plus} alt='icon image' />
            <p>{t('quickAdd')}:</p>
          </div>
          {data?.inventories.map((item, index) => (
            <p
              key={index}
              className={size === index ? 'active' : ''}
              onClick={() => setSize(index)}
            >
              {item.size}
            </p>
          ))}
        </div>
        <div className='item-info'>
          <div>
            <p>{data.name}</p>
            <p>{formatCurrency('VND', data.totalPrice)}</p>
          </div>
          <div>
            <p className='category-info'>{data.category.name}</p>
            {data?.discount?.status && (
              <p className='old-price'>{formatCurrency('VND', data?.price)}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CatalougeItem);
