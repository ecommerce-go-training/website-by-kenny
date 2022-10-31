import React, { useEffect, useState, memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import QuickCart from './QuickCart';
import Search from './Search';
import Announce from './Announce';
import MobileNav from './MobileNav';
import Filter from 'components/Filter';

import { search, searchBlack, cart, cartBlack, blackCart } from 'assets/images';

import './style.scss';

const Header = ({ disable, disableAnnounce, login, store, catalouge }) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Components.Header',
  });

  const isLogin = localStorage.getItem('isLogin');
  const userName = useSelector((state) => state?.auth?.userInfo?.firstName);
  const cartItem = useSelector((state) => state.persistedCartReducer.cartItem);

  const [moveBg, setMoveBg] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleNavMobile, setToggleNavMobile] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const [toggleShop, setToggleShop] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) setMoveBg(true);
    else setMoveBg(false);
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
      <QuickCart toggle={toggleCart} setToggle={setToggleCart} />
      <div
        className={classNames('quick-shop-nav', {
          toggleShop: toggleShop,
          moveup    : login,
        })}
      >
        <Filter shop />
      </div>
      <div
        className={classNames({
          header            : true,
          disable           : disable,
          move              : moveBg,
          stand             : !moveBg,
          'login-header'    : login,
          'store-header'    : store,
          'catalouge-header': catalouge,
        })}
      >
        <div className='header__nav'>
          <div className='header__nav-link'>
            <Link to='/catalouge/new-arrivals'>{t('newArrivals')}</Link>
            <p
              className='header-shop'
              onClick={() => setToggleShop(!toggleShop)}
            >
              {t('shop')}
            </p>
            <Link to='/catalouge'>{t('sale')}</Link>
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
            src={moveBg || login || store || catalouge ? searchBlack : search}
            alt='search img'
          />
          <Link to={isLogin ? '/account' : '/sign-in'}>
            {login ? t('account') : isLogin ? userName : t('login')}
          </Link>
          <div onClick={() => setToggleCart(true)}>
            {!login && <p className='item-quantity'>{cartItem.length}</p>}
            <img
              src={
                moveBg || login || store || catalouge
                  ? login
                    ? blackCart
                    : cartBlack
                  : cart
              }
              alt='cart img'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = {
  disable        : false,
  disableAnnounce: false,
  login          : false,
  store          : false,
  catalouge      : false,
};

Header.propTypes = {
  login          : PropTypes.bool,
  store          : PropTypes.bool,
  disable        : PropTypes.bool,
  disableAnnounce: PropTypes.bool,
  catalouge      : PropTypes.bool,
};

export default memo(Header);
