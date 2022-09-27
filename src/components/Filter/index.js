import React from 'react';
import { useTranslation } from 'react-i18next';

import { Link } from 'react-router-dom';

import './style.scss';

function Filter() {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Components.Filter',
  });

  return (
    <div className='filter'>
      <div className='filter__categories'>
        <p>{t('categories')}</p> <Link to='/'>{t('new arrivals')}</Link>
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
    </div>
  );
}

export default Filter;
