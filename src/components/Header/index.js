import classNames from 'classnames';
import PropTypes from 'prop-types';

import Announce from 'components/Announce';
import Search from 'components/Search';
import { Link } from 'react-router-dom';
import React, { useEffect, useState, memo } from 'react';

import { search, searchBlack, cart, cartBlack } from 'assets/images';

import './style.scss';

function Header({ disable, disableAnnounce, login }) {
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
  });

  return (
    <div>
      <Announce disable={disableAnnounce} />
      <Search toggle={toggleSearch} setToggle={setToggleSearch} />
      <div className={classes}>
        <div className='header__nav'>
          <div className='header__nav-link'>
            <Link to='/'>new arrivals</Link>
            <Link to='/'>shop</Link>
            <Link to='/'>fall winter</Link>
          </div>
          <div onClick={() => alert('pop later')} className='header__nav-line'>
            <div className='line'></div>
            <div className='line'></div>
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
            src={bg || login ? searchBlack : search}
            alt='search img'
          />
          <Link to='/signIn'>log in</Link>
          <img src={bg || login ? cartBlack : cart} alt='cart img' />
        </div>
      </div>
    </div>
  );
}

Header.defaultProps = {
  disable        : false,
  disableAnnounce: false,
};

Header.propTypes = {
  disable        : PropTypes.bool,
  disableAnnounce: PropTypes.bool,
};

export default memo(Header);
