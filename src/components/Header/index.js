import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { useEffect, useState, memo } from 'react';

import { search, searchBlack, cart, cartBlack } from 'assets/images';

import './style.scss';

function Header({ disable }) {
  const [bg, setBg] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) setBg(true);
    else setBg(false);
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener('scroll', changeBackground);
  });

  const classes = classNames({
    header : true,
    disable: disable,
    move   : bg,
    stand  : !bg,
  });

  return (
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
          className='search'
          src={bg ? searchBlack : search}
          alt='search img'
        />
        <Link to='/signIn'>log in</Link>
        <img src={bg ? cartBlack : cart} alt='cart img' />
      </div>
    </div>
  );
}

Header.defaultProps = {
  disable: false,
};

Header.propTypes = {
  disable: PropTypes.bool,
};

export default memo(Header);
