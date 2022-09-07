import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { search, cart } from 'assets/images';

import './style.scss';

function Header() {
  const [bg, setBg] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 100) setBg(true);
    else setBg(false);
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener('scroll', changeBackground);
  });

  return (
    <div
      style={{
        backgroundColor: bg ? 'white' : 'red',
        color          : bg ? 'black' : 'white',
      }}
      className='header'
    >
      <div className='header__nav'>
        <div className='header__nav-link'>
          <Link
            className='hover'
            style={{ color: bg ? 'black' : 'white' }}
            to='/'
          >
						new arrivals
          </Link>
          <Link
            className='hover'
            style={{ color: bg ? 'black' : 'white' }}
            to='/'
          >
						shop
          </Link>
          <Link
            className='hover'
            style={{ color: bg ? 'black' : 'white' }}
            to='/'
          >
						fall winter
          </Link>
        </div>
        <div onClick={() => alert('pop later')} className='header__nav-line'>
          <div style={{ backgroundColor: bg ? 'black' : 'white' }}></div>
          <div style={{ backgroundColor: bg ? 'black' : 'white' }}></div>
        </div>
      </div>
      <div className='header__logo'>
        <Link style={{ color: bg ? 'black' : 'white' }} className='logo' to='/'>
					Élemush
        </Link>
      </div>
      <div className='header__icon'>
        <img className='search' src={search} alt='search img' />
        <Link
          className='hover'
          style={{ color: bg ? 'black' : 'white' }}
          to='/signIn'
        >
					log in
        </Link>
        <img src={cart} alt='cart img' />
      </div>
    </div>
  );
}

export default Header;
