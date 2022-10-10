import React from 'react';
import classNames from 'classnames';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { xmark } from 'assets/images';

import './style.scss';

function MobileNav({ toggle, setToggle }) {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Components.Header',
  });

  return (
    <div
      className={classNames({
        'mobile-nav': true,
        active      : toggle,
      })}
    >
      <div className='intro'>
        <Link to='/'>Élemush</Link>
        <div>
          <img onClick={() => setToggle(false)} src={xmark} alt='icon image' />
        </div>
      </div>
      <div className='nav'>
        <Link to='/catalouge'>{t('newArrivals')}</Link>
        <Link to='/store'>{t('shop')}</Link>
        <Link to='/season'>{t('shopWinter')}</Link>
        <Link to='/sign-in'>{t('logIn')}</Link>
      </div>
    </div>
  );
}

export default MobileNav;
