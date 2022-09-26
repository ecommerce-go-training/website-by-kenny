import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState, memo } from 'react';

import Search from 'components/Search';
import Announce from 'components/Announce';

import { search, searchBlack, cart, cartBlack, blackCart } from 'assets/images';

import './style.scss';

function Header({ disable, disableAnnounce, login, store }) {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Components.Header',
  });
  const [bg, setBg] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 100) setBg(true);
    else setBg(false);
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener('scroll', changeBackground);
  });

  const classes = classNames({
    header        : true,
    disable       : disable,
    move          : bg,
    stand         : !bg,
    'login-header': login,
    'store-header': store,
  });

  return (
    <div>
      <Announce disable={disableAnnounce} />
      <Search toggle={toggleSearch} setToggle={setToggleSearch} />
      <div className={classes}>
        <div className='header__nav'>
          <div className='header__nav-link'>
            <Link to='/'>{t('new arrivals')}</Link>
            <Link to={login ? '/season' : '/store'}>
              {login ? t('shop winter') : t('shop')}
            </Link>
            <Link to='/season'>{login ? t('about') : t('fall winter')}</Link>
            <div onClick={() => alert('pop later')} className='triple-line'>
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
          <Link to='/signIn'>{login ? t('account') : t('log in')}</Link>
          <img
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
