import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState, memo } from 'react';

import MyCart from './MyCart';
import Search from './Search';
import Announce from './Announce';
import MobileNav from './MobileNav';

import { search, searchBlack, cart, cartBlack, blackCart } from 'assets/images';

import './style.scss';

function Header({ disable, disableAnnounce, login, store }) {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Components.Header',
  });
  const [bg, setBg] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleNavMobile, setToggleNavMobile] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) setBg(true);
    else setBg(false);
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <div>
      <Announce disable={disableAnnounce} />
      <Search toggle={toggleSearch} setToggle={setToggleSearch} />
      <MobileNav toggle={toggleNavMobile} setToggle={setToggleNavMobile} />
      <MyCart toggle={toggleCart} setToggle={setToggleCart} />
      <div
        className={classNames({
          header        : true,
          disable       : disable,
          move          : bg,
          stand         : !bg,
          'login-header': login,
          'store-header': store,
        })}
      >
        <div className='header__nav'>
          <div className='header__nav-link'>
            <Link to='/catalouge'>{t('newArrivals')}</Link>
            <Link to={login ? '/season' : '/store'}>
              {login ? t('shopWinter') : t('shop')}
            </Link>
            <Link to='/season'>{login ? t('about') : t('fallWinter')}</Link>
            <div
              onClick={() => setToggleNavMobile(true)}
              className='triple-line'
            >
              <div className='line'></div>
              <div className='line'></div>
              <div className='line'></div>
            </div>
          </div>
        </div>
        <div className='header__logo'>
          <Link className='logo' to='/'>
						Élemush
          </Link>
        </div>
        <div className='header__icon'>
          <img
            onClick={() => setToggleSearch(true)}
            className='search-img'
            src={bg || login || store ? searchBlack : search}
            alt='search img'
          />
          <Link to={login ? '/account' : '/sign-in'}>
            {login ? t('account') : t('logIn')}
          </Link>
          <img
            onClick={() => setToggleCart(true)}
            src={bg || login || store ? (login ? blackCart : cartBlack) : cart}
            alt='cart img'
          />
        </div>
      </div>
    </div>
  );
}

Header.defaultProps = {
  disable        : false,
  disableAnnounce: false,
  login          : false,
  store          : false,
};

Header.propTypes = {
  login          : PropTypes.bool,
  store          : PropTypes.bool,
  disable        : PropTypes.bool,
  disableAnnounce: PropTypes.bool,
};

export default memo(Header);
