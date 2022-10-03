import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import Button from 'components/Button';
import Collapse from 'components/Collapse';
import Checkbox from 'components/Checkbox';

import { Link } from 'react-router-dom';

import './style.scss';

function Filter() {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Components.Filter',
  });

  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);

  const colorFilter = [
    t('beige'),
    t('blue'),
    t('black'),
    t('brown'),
    t('green'),
    t('red'),
    t('metallic'),
    t('white'),
    t('cream'),
    t('pink'),
    t('orange'),
    t('yellow'),
    t('lilac'),
    t('floral'),
  ];

  const sizeFilter = [t('freesize'), 'XS', 'S', 'M', 'L', 'XL'];

  const handleFilter = (func, arr, index) => {
    if (arr.includes(index)) {
      func([
        ...arr.slice(0, arr.indexOf(index)),
        ...arr.slice(arr.indexOf(index) + 1, arr.length),
      ]);
    } else func((prev) => [...prev, index]);
  };

  console.log(color);
  console.log(size);

  return (
    <div className='filter'>
      <div className='filter__categories'>
        <p className='filter-title'>{t('categories')}</p>{' '}
        <Link to='/'>{t('newArrivals')}</Link>
        <Link to='/'>{t('backInStock')}</Link>
        <Link to='/'>{t('dresses')}</Link>
        <Link to='/'>{t('tops')}</Link>
        <Link to='/'>{t('skirts')}</Link>
        <Link to='/'>{t('shorts')}</Link>
        <Link to='/'>{t('pants')}</Link>
        <Link to='/'>{t('jackets')}</Link>
        <Link to='/'>{t('jumpsuits')}</Link>
        <Link to='/'>{t('twoPieceSets')}</Link>
        <Link to='/'>{t('sales')}</Link>
      </div>
      <div className='filter__collections'>
        <p className='filter-title'>{t('collections')}</p>
        <Link to='/'>{t('essentialsEdit')}</Link>
        <Link to='/'>{t('springSummer')}</Link>
        <Link to='/'>{t('fallWinter')}</Link>
      </div>
      <div className='filter__filter'>
        <p className='filter-title'>{t('filter')}</p>
        <div>
          <Collapse filterCollapse label={t('color')}>
            {colorFilter.map((item, index) => (
              <div key={index}>
                <p
                  onClick={() => handleFilter(setColor, color, index)}
                  className={classNames('filter__items')}
                >
                  <span>
                    <Checkbox filter toggle={color.includes(index)} />
                  </span>
                  {item}
                </p>
              </div>
            ))}
          </Collapse>
          <Collapse filterCollapse label={t('size')}>
            {sizeFilter.map((item, index) => (
              <div key={index}>
                <p
                  onClick={() => handleFilter(setSize, size, index)}
                  className={classNames('filter__items')}
                >
                  <span>
                    <Checkbox filter toggle={size.includes(index)} />
                  </span>
                  {item}
                </p>
              </div>
            ))}
          </Collapse>
          <p>{t('clearFilters')}</p>
          <Button smallPad>{t('apply')}</Button>
        </div>
      </div>
      <div className='filter__sort'>
        <p className='filter-title'>{t('sort')}</p>
        <div>
          <p>{t('newest')}</p>
          <p>{t('bestSellers')}</p>
          <p>{t('priceHighest')}</p>
          <p>{t('priceLowest')}</p>
        </div>
      </div>
    </div>
  );
}

export default Filter;
