import React, { useState } from 'react';
import classNames from 'classnames';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Filter from 'components/Filter';

import { xmark, backLongArrow } from 'assets/images';

import './style.scss';

const MobileNav = ({ toggle, setToggle }) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Components.Header',
  });

  const [toggleShop, setToggleShop] = useState(false);

  const handleToggleShop = () => {
    setToggleShop(!toggleShop);
  };

  return (
    <div
      className={classNames({
        'mobile-nav': true,
        active      : toggle,
      })}
    >
      {!toggleShop && (
        <div>
          <div className='intro'>
            <Link to='/'>Élemush</Link>
            <div>
              <img
                onClick={() => setToggle(false)}
                src={xmark}
                alt='icon image'
              />
            </div>
          </div>
          <div className='nav'>
            <Link to='/catalouge'>{t('newArrivals')}</Link>
            <p onClick={handleToggleShop}>{t('shop')}</p>
            <Link to='/season'>{t('shopWinter')}</Link>
            <Link to='/account'>{t('account')}</Link>
            <Link to='/sign-in'>{t('logIn')}</Link>
          </div>
        </div>
      )}
      {toggleShop && (
        <div className='shop-nav'>
          <div className='shop-nav__header'>
            <img
              onClick={handleToggleShop}
              src={backLongArrow}
              alt='icon image'
            />
            <p>SHOP</p>
          </div>
          <Filter shop />
        </div>
      )}
    </div>
  );
};

export default MobileNav;
