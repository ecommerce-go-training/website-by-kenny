import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from 'components/Button';
import Collapse from 'components/Collapse';

import { Link } from 'react-router-dom';

import './style.scss';

function Filter() {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Components.Filter',
  });

  return (
    <div className='filter'>
      <div className='filter__categories'>
        <p className='filter-title'>{t('categories')}</p>{' '}
        <Link to='/'>{t('new arrivals')}</Link>
        <Link to='/'>{t('back in stock')}</Link>
        <Link to='/'>{t('dresses')}</Link>
        <Link to='/'>{t('tops')}</Link>
        <Link to='/'>{t('skirts')}</Link>
        <Link to='/'>{t('shorts')}</Link>
        <Link to='/'>{t('pants')}</Link>
        <Link to='/'>{t('jackets')}</Link>
        <Link to='/'>{t('jumpsuits')}</Link>
        <Link to='/'>{t('two piece sets')}</Link>
        <Link to='/'>{t('sales')}</Link>
      </div>
      <div className='filter__collections'>
        <p className='filter-title'>{t('collections')}</p>
        <Link to='/'>{t('essentials edit')}</Link>
        <Link to='/'>{t('spring summer')}</Link>
        <Link to='/'>{t('fall winter')}</Link>
      </div>
      <div className='filter__filter'>
        <p className='filter-title'>{t('filter')}</p>
        <div>
          <Collapse filterCollapse label={t('color')}>
            <p>{t('beige')}</p>
            <p>{t('blue')}</p>
            <p>{t('black')}</p>
            <p>{t('brown')}</p>
            <p>{t('green')}</p>
            <p>{t('red')}</p>
            <p>{t('metallic')}</p>
            <p>{t('white')}</p>
            <p>{t('cream')}</p>
            <p>{t('pink')}</p>
            <p>{t('orange')}</p>
            <p>{t('yellow')}</p>
            <p>{t('lilac')}</p>
            <p>{t('floral')}</p>
          </Collapse>
          <Collapse filterCollapse label={t('size')}>
            <p>{t('freesize')}</p>
            <p>XS</p>
            <p>S</p>
            <p>M</p>
            <p>L</p>
            <p>XL</p>
          </Collapse>
          <p>{t('clear filters')}</p>
          <Button smallPad>apply</Button>
        </div>
      </div>
      <div className='filter__sort'>
        <p className='filter-title'>{t('sort')}</p>
        <div>
          <p>{t('newest')}</p>
          <p>{t('best sellers')}</p>
          <p>{t('price highest')}</p>
          <p>{t('price lowest')}</p>
        </div>
      </div>
    </div>
  );
}

export default Filter;
