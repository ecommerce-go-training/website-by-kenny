import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { plus } from 'assets/images';

import './style.scss';

const CatalougeItem = ({ data }) => {
  const navigate = useNavigate();
  const { t } = useTranslation('translation', {
    keyPrefix: 'Components.CatalougeItem',
  });
  const [size, setSize] = useState(0);

  return (
    <div className='cataItem'>
      <div className='img-container'>
        <div className='item-img'>
          <img
            onClick={() =>
              navigate('/details:id', {
                state: {
                  img        : data.img,
                  name       : data.name || 'add name',
                  price      : data.price || 'add price',
                  catalouge  : data.catalouge || 'add catalouge',
                  description: data.description || 'add des',
                  care       : data.care || 'add garment care',
                  details    : data.details || 'add item details',
                  quantity   : data.quantity || 0,
                },
              })
            }
            src={data.img}
            alt='Item image'
          />
        </div>
        <div className='item-add'>
          <div>
            <img src={plus} alt='icon image' />
            <p>{t('quickAdd')}:</p>
          </div>
          <p className={size === 0 ? 'active' : ''} onClick={() => setSize(0)}>
						XS
          </p>
          <p className={size === 1 ? 'active' : ''} onClick={() => setSize(1)}>
						S
          </p>
          <p className={size === 2 ? 'active' : ''} onClick={() => setSize(2)}>
						M
          </p>
          <p className={size === 3 ? 'active' : ''} onClick={() => setSize(3)}>
						L
          </p>
        </div>
        <div className='item-info'>
          <div>
            <p>{data.name}</p>
            <p>
              {data.price.toString()} {t('$')}
            </p>
          </div>
          <p>{data.catalouge}</p>
        </div>
      </div>
    </div>
  );
};

export default CatalougeItem;
