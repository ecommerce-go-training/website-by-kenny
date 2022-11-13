import React, { useState, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { formatCurrency, modifyLocalStorage } from 'utils/helpers';

import { plus } from 'assets/images';

import './style.scss';

const CatalougeItem = ({ data }) => {
  const navigate = useNavigate();
  const { t } = useTranslation('translation', {
    keyPrefix: 'Components.CatalougeItem',
  });
  const [size, setSize] = useState(0);

  const isLogin = modifyLocalStorage('getItem', 'isLogin');

  const handleClick = () => {
    if (isLogin) {
      navigate(`/details/${data.id}`, {
        state: {
          img      : data?.image?.detailImages,
          initColor: data?.inventories[0]?.color,
        },
      });
    } else {
      navigate('/sign-in');
    }
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
            <p>
              {formatCurrency(
                'VND',
                data?.discount?.status
                  ? data?.price - (data?.price * data?.discount?.percent) / 100
                  : data?.price
              )}
            </p>
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
